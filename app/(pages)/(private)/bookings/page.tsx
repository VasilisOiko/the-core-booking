"use client"

import { getAvailableBookings } from "@/app/actions/bookings"
import {
    Card,
    Title,
    WodBookingPanel
} from "@/app/components"
import Loading from "@/app/loading"
import { BookingProps } from "@/app/utils/types/bookings"
import { Suspense, useEffect, useState } from "react"

// TODO: Suspense react when fetching


function Bookings() {

  const [availableBookings, setAvailableBookings] = useState<BookingProps>([])

  useEffect(() => {
    getAvailableBookings().then((data) => {
        setAvailableBookings(data)
    })
  }, [])



  return (
  <>
    <Title>Bookings</Title>
    <Card className="overflow-auto">
      {
        availableBookings.length === 0
        ? <Loading />
        :
        <WodBookingPanel bookings={availableBookings}/>
      }
    </Card>

  </>
  )
}

export default Bookings