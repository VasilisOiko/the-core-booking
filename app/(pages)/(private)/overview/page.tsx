
import { getAthletePastBookings } from "@/app/actions/athlete"
import { BookingCardSkeleton, Card, Col, Row, Title, WorkoutCalendar, WorkoutStatistics, WorkoutStatisticsSkeleton } from "@/app/components"
import { LocalizedText } from "@/app/locales"
import { Suspense } from "react"
import Loading from "../loading"

const OverviewContent = async () => {

  const workouts = await getAthletePastBookings()
  return (
  <>
    <Col>
      <WorkoutStatistics workouts={workouts}/>
    </Col>
    
    <Col>
      <WorkoutCalendar workouts={workouts}/>
    </Col>
  </>
)}

const LoadingState = () => (
  <>
    <Col span={24}>
      <WorkoutStatisticsSkeleton/>
    </Col>
    <Col span={24}>
      <Card>
        <Loading/>
      </Card>
    </Col>
  </>
)

function Overview() {

  return (
    <>
      <Title><LocalizedText id="overview.page.title"/></Title>
      <Card className="overflow-auto">
        <Row gutter={[16, 16]}>
          
          <Suspense fallback={<LoadingState/>}>
            <OverviewContent/>
          </Suspense>
        
        </Row>
      </Card>
    </>
  )
}

export default Overview