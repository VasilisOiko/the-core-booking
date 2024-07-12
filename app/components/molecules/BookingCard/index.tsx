"use client"
import { useState } from "react"
import { WodClassesProps } from "@/app/types/bookings"
import { Button, Card, CardMeta, notification, Popconfirm, Text } from "@/app/components"
import { bookClass } from "@/app/actions/bookings"
import { useTranslations } from "next-intl"

type Props = {
    booking: WodClassesProps
}
type NotificationType = "success" | "warning" | "error"

// TODO: revalidate user on success to get new pastBookings
function BookingCard({ booking }: Props) {

    const t = useTranslations("bookings")

    const [api, contextHolder] = notification.useNotification();

    const [processRequest, setProcessRequest] = useState(false)

    const showNotification = (statusCode: number) => {
        let type: NotificationType = "error"
        let message: string
        let description = t("notification.description", { title: booking.title, time: booking.time })

        switch (statusCode) {
            case 200:
                type = "success"
                message = t("notification.success.message")
                break
            case 400:
                type = "warning"
                message = t("notification.warning.message")
                break
                    
            default:
                message = t("notification.error.message")
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

        const statusCode = await bookClass({ classId: booking.id, classHour: booking.hour })
        
        setProcessRequest(false)
        showNotification(statusCode)
    }

    return (
        <>
            {contextHolder}
            <Card
            bordered={true}
            actions={[
                <Popconfirm
                title={t("popconfirm.title")}
                description={t("popconfirm.description")}
                okText={t("popconfirm.yes")}
                cancelText={t("popconfirm.no")}
                onConfirm={ () => handleBookingRequest(booking) }
                >
                    <Button key={booking.id} type="text" loading={processRequest} block className="h-max">
                        {t("card.button")}
                    </Button>
                </Popconfirm>
            ]}
            >
            <CardMeta
                title={(<Text strong>{booking.time}</Text>)}
                description={t("card.description", { booked: booking.booked, capacity: booking.capacity })}
            />
            </Card>
        </>
      )
}

export default BookingCard