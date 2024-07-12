"use client"
import { Text, Title, Tag, Badge, Popover, Space } from "@/app/components"
import { AthletePastBookingsProps } from "@/app/types/athlete"
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"
import dayjs from "dayjs"

type Props = {
    workout: AthletePastBookingsProps[0]
}

const CalendarWorkoutItem = ({workout}: Props) => {

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

export default CalendarWorkoutItem