

import { getAvailableBookings } from "@/app/actions/bookings"
import {
    Card,
    Title,
    BookingPanel
} from "@/app/components"

// TODO: Suspense react when fetching

async function Bookings() {

  const availableBookings = await getAvailableBookings()

  return (
  <>
    <Title>Bookings</Title>
    <Card className="overflow-auto">
      <BookingPanel bookings={ availableBookings }/>
    </Card>

  </>
  )
}

export default Bookings