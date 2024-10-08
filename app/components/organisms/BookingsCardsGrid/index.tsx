import { BookingCard, BookingCardSkeleton, Button, Card, CardMeta, Col, Popconfirm, Row, SkeletonInput, Text, Title } from "@/app/components"
import { WodClassesProps } from "@/app/types/bookings"

type BookingCardGridProps = {
    bookings: WodClassesProps[] | undefined
}
const BookingsCardsGrid = ({ bookings }: BookingCardGridProps) => {


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