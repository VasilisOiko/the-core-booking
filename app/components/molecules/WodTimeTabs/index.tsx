"use client"
import { Button, Tabs, WodTable } from "@/app/components"
import { BOOKINGS } from "@/app/utils/constants/dummy/bookings"
import { changeConfirmLocale } from "antd/es/modal/locale"


const WodTimeTabs = () => {

    const wodClasses = BOOKINGS
    .filter(booking => booking.date === "2024-06-19T09:00:00Z")
    .flatMap(booking => booking.wodClasses)
    
    const wodTimes = Array.from(new Set(
        BOOKINGS
        .filter(booking => booking.date === "2024-06-19T09:00:00Z")
        .flatMap(booking => booking.wodClasses)
        .map(wodClass => wodClass.time)
    ))
    .map((time) => ({
        label: time,
        key: time,
        children: (
            <WodTable/>
        )
    }))



  return (
    <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        items={wodTimes}
      />
  )
}

export default WodTimeTabs