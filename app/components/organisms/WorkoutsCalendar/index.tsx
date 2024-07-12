"use client"
import { Calendar, Text, Title, Card, Tag, Badge, Popover, Space, Divider, Modal } from "@/app/components"
import { AthletePastBookingsProps } from "@/app/types/athlete"
import { formatValueToBookingsDate } from "@/app/utils/helpers/dateFormatters"
import dayjs, { Dayjs } from "dayjs"
import { theme, type CalendarProps } from "antd"
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"
import React, { useState } from "react"

type DataDisplayColorStatus = "error" | "warning" | "success" | undefined

type TitleColorStatus = "secondary" | "success" | "warning" | "danger"

type WorkoutGroupObject = {
    title: string,
    titleStatus: TitleColorStatus
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
            <div className="hidden sm:block min-h-full" >
                <Tag
                    icon={ !canceledTime ? <CheckCircleOutlined/> : <CloseCircleOutlined/>}
                    color={statusColor}
                >
                    <div className="text-wrap sm:hidden md:block">
                        {workout.title}
                    </div>
                </Tag>
            </div>
            <div className="sm:hidden min-h-full">
                <Badge status={statusColor}/>
            </div>
        </Popover>    
    )
}

const WorkoutCalendarGroupTags = ({workouts}: {workouts: AthletePastBookingsProps}) => {

    const [modalVisibility, setModalVisibility] = useState(false)

    let workoutStatuses: DataDisplayColorStatus[] = []

    const workoutGroup = workouts.map((workout): WorkoutGroupObject => {
        const colorStatus = !!workout.cancellationTime ? "error" : workout.isSubstituted ? "warning" : "success"

        workoutStatuses.some((status) => status === colorStatus) ? null : workoutStatuses.push(colorStatus)

        const bookedTime = dayjs(workout.bookedTime).format("HH:mm")
        const canceledTime = workout.cancellationTime && dayjs(workout.cancellationTime).format("HH:mm")

        return ({
            title: workout.title,
            titleStatus: colorStatus === "error" ? "danger" : colorStatus,
            bookedTime,
            canceledTime,
            isSubstituted: workout.isSubstituted
        })
    })

    

    const ModalContent = () => (
        <Space direction="vertical">
            {workoutGroup.map((workout, index) => (
                <React.Fragment key={index}>
                    <Title type={workout.titleStatus} level={5}>{workout.title}</Title>
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
                {workoutStatuses.map((status, index) => (
                    <>
                        <div className="hidden sm:block">
                            <Tag
                                icon={status !== "error" ? <CheckCircleOutlined/> : <CloseCircleOutlined/>}
                                color={status}
                            />
                            {workoutStatuses.length === 1 &&
                            <Tag
                                icon={workoutStatuses[0] !== "error" ? <CheckCircleOutlined/> : <CloseCircleOutlined/>}
                                color={workoutStatuses[0]}
                            />}
                        </div>
                        <div className="sm:hidden">
                            <Badge key={index} status={status}/>
                            {workoutStatuses.length === 1 && <Badge status={workoutStatuses[0]}/>}
                        </div>
                    </>
                ))}
            </div>
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