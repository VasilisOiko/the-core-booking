"use client"
import React, { useState } from "react"
import dayjs from "dayjs"
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"
import { AthletePastBookingsProps } from "@/app/types/athlete"
import { Text, Title, Tag, Badge, Space, Divider, Modal } from "@/app/components"

type DataDisplayColorStatus = "error" | "warning" | "success" | undefined

type TitleColorStatus = "secondary" | "success" | "warning" | "danger"

type WorkoutGroupObject = {
    title: string,
    titleStatus: TitleColorStatus
    bookedTime: string,
    canceledTime?: string | null,
    isSubstituted: boolean
}

const CalendarWorkoutGroupItems = ({workouts}: {workouts: AthletePastBookingsProps}) => {

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

export default CalendarWorkoutGroupItems