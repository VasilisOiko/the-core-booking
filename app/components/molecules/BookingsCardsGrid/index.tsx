import { Button, Card, Col, Flex, Row, Text, Title } from "@/app/components"
import { WodClassesProps } from "@/app/types/bookings"

type BookingCardGridProps = {
    bookings: WodClassesProps[]
}
const BookingsCardsGrid = ({ bookings }: BookingCardGridProps) => {

    const wodClass = bookings[0].title
    
  return (
    <>
        <Title level={2} >
            {wodClass}
        </Title>
        <Row gutter={[16, 16]}>
            {
                bookings.map(booking => (
                    <Col key={booking.id} xs={24} sm={24} md={24} lg={12} xl={8} xxl={6}>
                        <Card
                            bordered={true}
                            actions={[
                                <Button key="setting" >
                                    Make booking
                                </Button>,
                              ]}
                        >
                            <Text strong >
                                {booking.time}
                            </Text>
                        </Card>
                    </Col>
                ))
            }
        </Row>
    </>
  )
}

export default BookingsCardsGrid