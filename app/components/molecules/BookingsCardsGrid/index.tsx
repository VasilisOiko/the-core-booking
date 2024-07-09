import { BookingCardSkeleton, Button, Card, CardMeta, Col, Divider, Popconfirm, Row, Skeleton, SkeletonButton, Text, Title } from "@/app/components"
import { WodClassesProps } from "@/app/types/bookings"
import SkeletonInput from "antd/es/skeleton/Input"

type BookingCardGridProps = {
    bookings: WodClassesProps[] | undefined
}
const BookingsCardsGrid = ({ bookings }: BookingCardGridProps) => {
  
  const BookingCard = ({ booking }: { booking: WodClassesProps }) => {

    return (
      <Card
        bordered={true}
        actions={[
          <Popconfirm
            title="Book this class?"
            description="Are you sure you want to book this class?"
            okText="Yes"
            cancelText="No"
          >
            <Button key={booking.id} type="text" block className="h-max">
              Make booking
            </Button>
          </Popconfirm>
        ]}
      >
        <CardMeta
          title={(<Text strong>{booking.time}</Text>)}
          description={`Availability: ${booking.booked} / ${booking.capacity}`}
        />
      </Card>
    )
  }

  if (!bookings) return (
    <>
      <SkeletonInput active className="m-2"/>
      <BookingCardSkeleton/>
    </>
  )
  
  return (
    <>
        <Title level={2}>
          {bookings[0].title} 
        </Title>
        <Row gutter={[16, 16]}>
          {
            bookings.map(booking => (
              <Col key={booking.id} xs={24} sm={24} md={12} lg={12} xl={8} xxl={6}>
                <BookingCard booking={booking} />
              </Col>
            ))
          }
        </Row>

      
    </>
  )
}


export default BookingsCardsGrid