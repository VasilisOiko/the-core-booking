"use client"

import {
    Card,
    Flex,
    Tabs,
    Title,
    WodFilterTags,
    Text,
    WodTable,
    WodList
} from "@/app/components"

import { RawLocalizedText } from "@/app/locales"
import { BOOKINGS } from "@/app/utils/constants/dummy/bookings"
import dayjs from "dayjs"
import WodTimeTabs from "../../molecules/WodTimeTabs"
import { useState } from "react"
import { getUniqueWodTitles, getWodClassesByTitle } from "@/app/utils/helpers/bookingFilters"

const WODBookingPanel = () => {

    const [selectedDate, setSelectedDate] = useState<string>(BOOKINGS[0].date)
    const [selectedTime, setSelectedTime] = useState(BOOKINGS[0].wodClasses[0].time)


    const dateTabs = BOOKINGS.map(booking => booking.date)
    .map(date => {
        const day = dayjs(date)

        return {
            key: date,
            label: (
                <Flex vertical align="center">
                    <Text>
                        {RawLocalizedText(`days.${day.locale("gr-GR").format("dddd")}`)}    
                    </Text>
                    <Text>
                        {day.format("DD-MM-YYYY")}
                    </Text>
                </Flex>
            )
        }
    })

    const getWodsPerTime = (time: string) => (
        BOOKINGS
        .filter(booking => booking.date === selectedDate)
        .flatMap(booking => booking.wodClasses)
        .filter(wod => wod.time === time)
    )
    

    const wodTimesItems = Array.from(new Set(
        BOOKINGS
        .filter(booking => booking.date === selectedDate)
        .flatMap(booking => booking.wodClasses)
        .map(wodClass => wodClass.time)
    ))
    .map((time) => ({
        label: time,
        key: time,
        children: (
            <WodList list={getWodsPerTime(time)}/>
        )
    }))

    /* ------------------------------------------ */

    const wodClassesItems = getUniqueWodTitles(Array.from(BOOKINGS), selectedDate)
    .map(title => ({
        label: title,
        key: title,
        children: (
            <WodList list={getWodClassesByTitle(Array.from(BOOKINGS), selectedDate, title)}/>
        )
    }))


    return (
        <Card
            type="inner"
            tabList={dateTabs}
            onTabChange={(key) => setSelectedDate(key)}
        >
            <Flex vertical>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition="left"
                    items={wodClassesItems}
                />
            </Flex>
        </Card>
    )
}

export default WODBookingPanel