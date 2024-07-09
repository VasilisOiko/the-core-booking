import {
    BookingsDefaultSelectionView,
    BookingsMobileSelectionView,
    DefaultViewport,
    MobileViewport,
} from "@/app/components"

import { BookingProps } from "@/app/types/bookings"

import React from "react"

type BookingPanelProps = {
    bookings: BookingProps
}

function BookingPanel({ bookings }: BookingPanelProps) {

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