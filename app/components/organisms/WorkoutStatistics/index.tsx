import { Card, Statistic } from "@/app/components"
import { AthletePastBookingsProps } from "@/app/types/athlete"
import dayjs from "dayjs"

type Props = {
    workouts: AthletePastBookingsProps
}

function WorkoutStatistics({workouts}: Props) {
    const weekOfYear = require("dayjs/plugin/weekOfYear")
    const updatedDayjs = dayjs.extend(require("dayjs/plugin/weekOfYear"))
    

    // const workoutsPerWeek = workouts.reduce((statistics, workout) => {
    //     const date = updatedDayjs(workout.date).week()

    //     if(!statistics[date.week()]) {

    //     return statistics
    // }, {})

  return (
    <Card>
        <Statistic title="Average Workout per week" value={workouts.length}/>

    </Card>
  )
}

export default WorkoutStatistics