import {
    Card,
    Title,
    WODBookingPanel
} from "@/app/components"

// TODO: Suspense react when fetching


function Bookings() {

  return (
  <>
  <Title>Bookings</Title>
  <Card className="overflow-auto">
    <WODBookingPanel/>
  </Card>

  </>
  )
}

export default Bookings