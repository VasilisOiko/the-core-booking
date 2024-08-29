"use client"
import { Calendar, Title, Card, CalendarWorkoutItem, CalendarWorkoutGroupItems } from "@/app/components"
import { AthletePastBookingsProps } from "@/app/types/athlete"
import { formatValueToBookingsDate } from "@/app/utils/helpers/dateFormatters"
import dayjs, { Dayjs } from "dayjs"
import { type CalendarProps } from "antd"
import { RawLocalizedText } from "@/app/locales"

type Props = {
    workouts: AthletePastBookingsProps
}
function WorkoutCalendar({workouts}: Props) {

    require("dayjs/locale/el")

    const workoutUnixDates = workouts.map(booking => dayjs(booking.date).unix())
    const workoutMinDate = dayjs.unix(Math.min(...workoutUnixDates))
    const workoutMaxDate = dayjs()


    const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {

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
                return <CalendarWorkoutItem workout={todayWorkouts[0]}/>
        
            default:
                return <CalendarWorkoutGroupItems workouts={todayWorkouts}/>
        }
    }

    return (
        <Card
            title={<Title level={2} >{RawLocalizedText("overview.calendar.title")}</Title>}
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