
import { getAthletePastBookings } from "@/app/actions/athlete"
import { Card, Title, WorkoutCalendar } from "@/app/components"
import { LocalizedText } from "@/app/locales"
import {AthletePastBookingsProps} from "@/app/types/athlete"

// TODO: Suspense react when fetching
async function Overview() {

  const pastBookings = await getAthletePastBookings()

  // console.log("pastBookings: ", pastBookings)

  const workoutDates = pastBookings.map((booking) => booking.date)

  return (
    <>
      <Title><LocalizedText id="overview.page.title"/></Title>
      <Card className="overflow-auto">
        <WorkoutCalendar workouts={pastBookings}/>
        

      </Card>

    </>
  )
}

export default Overview