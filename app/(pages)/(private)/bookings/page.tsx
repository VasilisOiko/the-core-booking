import { getAvailableBookings } from "@/app/actions/bookings"
import {
    Card,
    Title,
    BookingPanel
} from "@/app/components"
import { LocalizedText } from "@/app/locales"

// TODO: Suspense react when fetching

async function Bookings() {

  const availableBookings = await getAvailableBookings()

  return (
  <>
    <Title><LocalizedText id="bookings.page.title"/></Title>
    <Card className="overflow-auto">
      <BookingPanel bookings={ availableBookings }/>
    </Card>

  </>
  )
}

export default Bookings