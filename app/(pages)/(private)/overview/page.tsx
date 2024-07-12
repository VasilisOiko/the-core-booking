
import { getAthletePastBookings } from "@/app/actions/athlete"
import { BookingCardSkeleton, Card, Col, Row, Title, WorkoutCalendar, WorkoutStatistics, WorkoutStatisticsSkeleton } from "@/app/components"
import { LocalizedText } from "@/app/locales"
import { Suspense } from "react"
import Loading from "../loading"

// TODO: Suspense react when fetching
async function Overview() {
  
  return (
    <>
      <Title><LocalizedText id="overview.page.title"/></Title>
      <Card className="overflow-auto">
        <Row gutter={[16, 16]}>
          
          <Col>
            <Suspense fallback={<WorkoutStatisticsSkeleton/>}>
              <WorkoutStatistics/>
            </Suspense>
          </Col>
          
          <Col>
            <WorkoutCalendar workouts={await getAthletePastBookings()}/>
          </Col>
        
        </Row>
      </Card>
    </>
  )
}

export default Overview