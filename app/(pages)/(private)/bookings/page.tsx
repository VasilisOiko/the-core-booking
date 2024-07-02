import { getAvailableBookings } from "@/app/actions/bookings"
import { Card, Title, BookingPanel } from "@/app/components"
import { LocalizedText } from "@/app/locales"

async function Bookings() {

  const bookings = await getAvailableBookings()

  return (
    <>
      <Title><LocalizedText id="bookings.page.title"/></Title>
      <Card className="overflow-auto">
        <BookingPanel bookings={bookings}/>
      </Card>
    </>
  )
}

export default Bookings