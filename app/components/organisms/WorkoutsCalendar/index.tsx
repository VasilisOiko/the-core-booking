"use client"
import { Calendar, Text, Title, Card, Tag, Badge, Popover, Space, Divider, Modal } from "@/app/components"
import { AthletePastBookingsProps } from "@/app/types/athlete"
import { formatValueToBookingsDate } from "@/app/utils/helpers/dateFormatters"
import dayjs, { Dayjs } from "dayjs"
import type { CalendarProps } from "antd"
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"
import React, { useState } from "react"

type BadgeColorStatus = "error" | "warning" | "success" | undefined

type WorkoutGroupObject = {
    title: string,
    statusColor: "secondary" | "success" | "warning" | "danger",
    bookedTime: string,
    canceledTime?: string | null,
    isSubstituted: boolean

}

type Props = {
    workouts: AthletePastBookingsProps
}

const WorkoutCalendarTag = ({workout}: {workout: AthletePastBookingsProps[0]}) => {

    const statusColor = !!workout.cancellationTime ? "error" : workout.isSubstituted ? "warning" : "success"

    const bookedTime = dayjs(workout.bookedTime).format("HH:mm")
    const canceledTime = workout.cancellationTime && dayjs(workout.cancellationTime).format("HH:mm")


    const popoverContent = () => (
        <Space direction="vertical">
            <Text type="secondary">Booked on: {bookedTime}</Text>
            { !!canceledTime && <Text type="secondary">Canceled on: {canceledTime}</Text>}
            { !!workout.isSubstituted && <Text italic type="secondary">Substituted</Text>}
        </Space>
    )

    return (
        <Popover
            title={<Title type={statusColor === "error" ? "danger" : statusColor} level={4}>{workout.title}</Title>}
            content={popoverContent}
            trigger={["click", "hover"]}
        >
            <div className="hidden md:block min-h-full" >
                <Tag
                    icon={ !canceledTime ? <CheckCircleOutlined/> : <CloseCircleOutlined/>}
                    color={statusColor}
                >
                    <div className="text-wrap">
                        {workout.title}
                    </div>
                </Tag>
            </div>
            <div className="md:hidden min-h-full">
                <Badge status={statusColor}/>
            </div>
        </Popover>    
    )
}

const WorkoutCalendarGroupTags = ({workouts}: {workouts: AthletePastBookingsProps}) => {

    const [modalVisibility, setModalVisibility] = useState(false)

    let badgeStatuses: BadgeColorStatus[] = []

    const workoutGroup = workouts.map((workout): WorkoutGroupObject => {
        const statusColor = !!workout.cancellationTime ? "error" : workout.isSubstituted ? "warning" : "success"

        badgeStatuses.some((status) => status === statusColor) ? null : badgeStatuses.push(statusColor)

        const bookedTime = dayjs(workout.bookedTime).format("HH:mm")
        const canceledTime = workout.cancellationTime && dayjs(workout.cancellationTime).format("HH:mm")

        return ({
            title: workout.title,
            statusColor: statusColor === "error" ? "danger" : statusColor,
            bookedTime,
            canceledTime,
            isSubstituted: workout.isSubstituted
        })
    })

    

    const ModalContent = () => (
        <Space direction="vertical">
            {workoutGroup.map((workout, index) => (
                <React.Fragment key={index}>
                    <Title type={workout.statusColor} level={5}>{workout.title}</Title>
                    <Text type="secondary">Booked on: {workout.bookedTime}</Text>
                    { !!(workout.canceledTime) && <Text type="secondary">Canceled on: {workout.canceledTime}</Text>}
                    { !!(workout.isSubstituted) && <Text italic type="secondary">Substituted</Text>}
                    <Divider/>
                </React.Fragment>
            ))}
        </Space>
    )

    return (
        <>
            {/* <Popover
                title={<Title level={4}>Workouts</Title>}
                content={popoverContent}
                trigger={["click", "hover"]}
                overlayClassName="max-h-13 overflow-auto"
            > */}
            <Modal
                title={<Title level={4}>Workouts</Title>}
                closable
                onCancel={() => setModalVisibility(false)}
                open={modalVisibility}
                footer={null}
            >
                <ModalContent/>
            </Modal>
                <div className="min-h-full" onClick={() => setModalVisibility(true)}>
                    {badgeStatuses.map((status, index) => (
                        <Badge key={index} status={status}/>
                    ))}
                    {badgeStatuses.length === 1 && <Badge status={badgeStatuses[0]}/>}
                </div>
            {/* </Popover> */}
        </>
    )
    
}

function WorkoutCalendar({workouts}: Props) {

    require("dayjs/locale/el")

    const workoutUnixDates = workouts.map(booking => dayjs(booking.date).unix())
    const workoutMinDate = dayjs.unix(Math.min(...workoutUnixDates))
    const workoutMaxDate = dayjs()


    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {

        if(info.type !== "date") {
            return null
        }

        const todayWorkouts = workouts.filter(booking => booking.date === formatValueToBookingsDate(current))

        if(todayWorkouts.length === 0) {
            return null
        }

        switch (todayWorkouts.length) {
            case 0:
                return null
            case 1:
                return <WorkoutCalendarTag workout={todayWorkouts[0]}/>
        
            default:
                return <WorkoutCalendarGroupTags workouts={todayWorkouts}/>
        }

        // const statusColor = !!workout.cancellationTime ? "error" : workout.isSubstituted ? "warning" : "success"

        // const bookedTime = dayjs(workout.bookedTime).format("HH:mm")
        // const canceledTime = workout.cancellationTime && dayjs(workout.cancellationTime).format("HH:mm")


        // const popoverContent = () => (
        //     <Space direction="vertical">
        //         <Text type="secondary">Booked on: {bookedTime}</Text>
        //         { !!canceledTime && <Text type="secondary">Canceled on: {canceledTime}</Text>}
        //         { !!workout.isSubstituted && <Text italic type="secondary">Substituted</Text>}
        //     </Space>
        // )

            // <Popover
            //     title={<Title level={5}>{workout.title}</Title>}
            //     content={popoverContent}
            //     trigger={["click", "hover"]}
            // >
            //     <div className="hidden md:block min-h-full" >
            //         <Tag
            //             icon={ !canceledTime ? <CheckCircleOutlined/> : <CloseCircleOutlined/>}
            //             color={statusColor}
            //         >
            //             <div className="text-wrap">
            //                 {workout.title}
            //             </div>
            //         </Tag>
            //     </div>
            //     <div className="md:hidden min-h-full">
            //         <Badge status={statusColor}/>
            //     </div>
            // </Popover>
        // )
    }


    return (
        <Card
            title={<Title level={2} >Calendar</Title>}
            type="inner"
        >
                <Calendar
                    validRange={[workoutMinDate.subtract(1, "day"), workoutMaxDate.add(4, "day")]}
                    cellRender={(current, info) => cellRender(current, info)}
                />
        </Card>
    )
}

export default WorkoutCalendar