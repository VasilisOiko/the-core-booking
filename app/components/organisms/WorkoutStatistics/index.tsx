import { Card, Col, Divider, Row, Statistic, Title } from "@/app/components"
import { CalendarOutlined } from "@ant-design/icons"
import { GiBiceps, GiFinishLine, GiRunningShoe, GiSlaveryWhip } from "react-icons/gi"
import { IoStatsChartOutline } from "react-icons/io5"
import dayjs from "dayjs"
import { AthletePastBookingsProps } from "@/app/types/athlete"
import { RawLocalizedText } from "@/app/locales"

type Props = {
  workouts: AthletePastBookingsProps
}

// TODO: Add locales
async function WorkoutStatistics({ workouts }: Props) {

    const periodOfRecords = workouts.reduce((period, workout) => {
      const date = dayjs(workout.date)
      if (period.startDate > date) {
        period.startDate = date
      }

      return period
    }, {
      startDate: dayjs(workouts[0].date),
      endDate: dayjs()
    })

    const totalWorkoutsAttend = workouts.reduce((total: number, workout) => {

        if (!!workout.cancellationTime) {
            return total
        }
        return total + 1
    }, 0)

    const noWorkoutsPerMetric = workouts.reduce((statistics: any, workout) => {

      if (!!workout.cancellationTime) {
        return statistics
      }
      const date = dayjs(workout.date)
      const week = `${date.startOf("week").format("DD/MM")} - ${date.endOf("week").format("DD/MM")}`

      statistics.week[week] = statistics.week[week] ? statistics.week[week] + 1 : 1

      return statistics
  }, {
    week: {},
  })
  
  const weekWithMostWorkouts = Object.keys(noWorkoutsPerMetric.week)
  .reduce((bestWeek: string, week: string) => noWorkoutsPerMetric.week[bestWeek] > noWorkoutsPerMetric.week[week] ? bestWeek : week)

  const noWorkoutsPerWeek = Object.values(noWorkoutsPerMetric.week).map((value: unknown) => Number(value))

  const averageWorkoutPerWeek = totalWorkoutsAttend / noWorkoutsPerWeek.length

  return (
    <>
      <Title level={2}>{periodOfRecords.startDate.format("DD/MM/YYYY")} - {periodOfRecords.endDate.format("DD/MM/YYYY")}</Title>
      <Divider />
      <Row gutter={[16, 16]}>
        
        <Col>
          <Card>
            <Statistic title={RawLocalizedText("overview.statistic.weekWithMostWorkouts.title")} value={weekWithMostWorkouts} prefix={<CalendarOutlined />}/>
          </Card>
        </Col>

        <Col>
            <Card>
              <Statistic title={RawLocalizedText("overview.statistic.mostWorkoutsInWeek.title")} value={noWorkoutsPerMetric.week[weekWithMostWorkouts]} prefix={<GiBiceps/>}/>
            </Card>
        </Col>

        <Col>
          <Card>
              <Statistic precision={1} title={RawLocalizedText("overview.statistic.averageWorkoutsPerWeek.title")} value={averageWorkoutPerWeek} prefix={<IoStatsChartOutline/>} suffix={RawLocalizedText("overview.statistic.averageWorkoutsPerWeek.prefix")}/>
          </Card>
        </Col>

      </Row>
    </>
  )
}

export default WorkoutStatistics