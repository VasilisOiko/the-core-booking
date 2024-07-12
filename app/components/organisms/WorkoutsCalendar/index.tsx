"use client"
import { Calendar, Text, Title, Card, Tag, Popover, Space } from "@/app/components"
import { AthletePastBookingsProps } from "@/app/types/athlete"
import { formatValueToBookingsDate } from "@/app/utils/helpers/dateFormatters"
import dayjs, { Dayjs } from "dayjs"
import type { CalendarProps } from "antd"
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"


type Props = {
    workouts: AthletePastBookingsProps
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

        const workout = workouts.find(booking => booking.date === formatValueToBookingsDate(current))

        if(!workout) {
            return null
        }

        const bookedTime = dayjs(workout.bookedTime).format("HH:mm")
        const canceledTime = workout.cancellationTime && dayjs(workout.cancellationTime).format("HH:mm")


        const popoverContent = () => (
            <Space direction="vertical">
                <Text type="secondary">Booked on: {bookedTime}</Text>
                { !!canceledTime && <Text type="secondary">Canceled on: {canceledTime}</Text>}
            </Space>
        )

        return (
            <Popover
                title={<Title level={5}>{workout.title}</Title>}
                content={popoverContent}
                trigger={["click", "hover"]}
            >
                <Tag
                    icon={ !canceledTime ? <CheckCircleOutlined/> : <CloseCircleOutlined/>}
                    color={ !canceledTime ? "success" : "error"}
                >
                    {workout.title}
                </Tag>
            </Popover>)
    }


    return (
        <>
            <Card
                title={<Title level={2} >Calendar</Title>}
                type="inner"
            >
                <Calendar
                    validRange={[workoutMinDate, workoutMaxDate.add(4, "day")]}
                    cellRender={(current, info) => cellRender(current, info)}
                />
            </Card>
        </>
    )
}

export default WorkoutCalendar