import { Button, Card, Col, Row, Text, Title } from "@/app/components"
import { WodClassesProps } from "@/app/types/bookings"

type BookingCardGridProps = {
    bookings: WodClassesProps[]
}
const BookingsCardsGrid = ({ bookings }: BookingCardGridProps) => {

  const BookingCard = ({ booking }: { booking: WodClassesProps }) => {

    return (
      <Card
        bordered={true}
        actions={[
          <Button key="setting">
            Make booking
          </Button>,
        ]}
      >
        <Text strong>
          {booking.time}
        </Text>
      </Card>
    )
  }
  
  return (
    <>
      <Title level={2}>
        {bookings[0].title}
      </Title>
      <Row gutter={[16, 16]}>
        {
          bookings.map(booking => (
            <Col key={booking.id} xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
              <BookingCard booking={booking} />
            </Col>
          ))
        }
      </Row>
    </>
  )
}


export default BookingsCardsGrid