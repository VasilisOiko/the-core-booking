"use client"
import { useState } from "react"
import { WodClassesProps } from "@/app/types/bookings"
import { Button, Card, CardMeta, notification, Popconfirm, Text } from "@/app/components"
import { bookClass } from "@/app/actions/bookings"
import { BOOKING_REQUEST } from "@/app/utils/constants/network"
import { useTranslations } from "next-intl"

type Props = {
    booking: WodClassesProps
}
type NotificationType = "success" | "warning" | "error"

function BookingCard({ booking }: Props) {

    const t = useTranslations("bookings")

    const [api, contextHolder] = notification.useNotification()

    const [processRequest, setProcessRequest] = useState(false)

    const showNotification = (statusMessage: string) => {
        let type: NotificationType = "error"
        let message: string
        let description = t("notification.description", { title: booking.title, time: booking.time })

        switch (statusMessage) {
            case BOOKING_REQUEST.SUCCESSFUL:
                type = "success"
                message = t("notification.success.message")
                break
            case BOOKING_REQUEST.ALREADY_BOOKED:
                type = "warning"
                message = t("notification.warning.isBooked.message")
                break
            case BOOKING_REQUEST.SUBSCRIPTION_EXPIRED:
                type = "warning"
                message = t("notification.warning.noSubscription.message")
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
    }

    const handleBookingRequest = async (booking: WodClassesProps) => {
        setProcessRequest(true)

        const statusMessage = await bookClass({ classId: booking.id, classHour: booking.hour })
        
        setProcessRequest(false)
        showNotification(statusMessage)
    }

    return (
        <>
            {contextHolder}
            <Card
            bordered={true}
            actions={[
                <Popconfirm
                key={booking.id}
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