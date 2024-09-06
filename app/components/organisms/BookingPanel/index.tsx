import {
    BookingsDefaultSelectionView,
    BookingsMobileSelectionView,
    DefaultViewport,
    MobileViewport,
    Result,
} from "@/app/components"

import { BookingProps } from "@/app/types/bookings"
import { useTranslations } from "next-intl"
import { FcBinoculars } from "react-icons/fc"

import React from "react"

type BookingPanelProps = {
    bookings: BookingProps
}

function BookingPanel({ bookings }: BookingPanelProps) {

    const t = useTranslations("bookings.page")

    if(bookings.length === 0){
        return (
            <Result
                status="info"
                title={t("noBookingsView.result.title")}
                subTitle={t("noBookingsView.result.subtitle")}
            />
        )
    }

    return (
        <>
            <DefaultViewport >
                <BookingsDefaultSelectionView bookings={bookings} />
            </DefaultViewport>
            <MobileViewport >
                <BookingsMobileSelectionView bookings={bookings}/>
            </MobileViewport>
        </>
    )
} 
export default BookingPanel