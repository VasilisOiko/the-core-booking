"use client"
import { useState } from "react"
import { WodClassesProps } from "@/app/types/bookings"
import { Button, Card, CardMeta, notification, Popconfirm, Text } from "@/app/components"
import { bookClass } from "@/app/actions/bookings"

type Props = {
    booking: WodClassesProps
}
type NotificationType = "success" | "error"

function BookingCard({ booking }: Props) {

    // TODO: research what should show for each request status

    const [api, contextHolder] = notification.useNotification();

    const [processRequest, setProcessRequest] = useState(false)

    const showNotification = (type: NotificationType) => {
        let message: string
        let description = `Booking class: ${booking.title} - ${booking.time}`

        switch (type) {
            case "success":
                message = "Class booked successfully"
                break
            case "error":
                message = "Error while booking class"
                break
                    
            default:
                message = "Error while booking class"
                break
        }
        api[type]({
            message,
            description,
            showProgress: true,
            duration: 3
        })
    };

    const handleBookingRequest = async (booking: WodClassesProps) => {
        setProcessRequest(true)
        console.log("booking: ", booking)
        const statusCode = await bookClass({ classId: booking.id })
        console.log("status code: ", statusCode)
        setProcessRequest(false)
        showNotification(statusCode === 200 ? "success" : "error")
    }
    // TODO: add locales
    return (
        <>
            {contextHolder}
            <Card
            bordered={true}
            actions={[
                <Popconfirm
                title="Book this class?"
                description="Are you sure you want to book this class?"
                okText="Yes"
                cancelText="No"
                onConfirm={ () => handleBookingRequest(booking) }
                >
                <Button key={booking.id} type="text" loading={processRequest} block className="h-max">
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
        </>
      )
}

export default BookingCard