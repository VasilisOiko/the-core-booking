"use client"

import {
    Card,
    Flex,
    Tabs,
    Text,
    WodList
} from "@/app/components"

import { RawLocalizedText } from "@/app/locales"
import dayjs from "dayjs"
import { useState } from "react"
import { getUniqueClassesTitles, getClassesByTitle } from "@/app/utils/helpers/bookingFilters"
import { BookingProps } from "@/app/utils/types/bookings"
import BookingsCardsGrid from "../../molecules/BookingsCardsGrid"
import LANGUAGES from "@/app/utils/constants/languages"


type BookingPanelProps = {
    bookings: BookingProps
}

const BookingPanel = ({ bookings }: BookingPanelProps) => {


    const [selectedDate, setSelectedDate] = useState<string>(bookings[0].date)
    const [selectedTime, setSelectedTime] = useState(bookings[0].wodClasses[0].time)


    const dateTabs = bookings.map(booking => booking.date)
    .map(date => {
        const day = dayjs(date)

        return {
            key: date,
            label: (
                <Flex vertical align="center">
                    <Text>
                        {RawLocalizedText(`days.${day.locale(LANGUAGES.GREEK).format("dddd")}`)}    
                    </Text>
                    <Text>
                        {day.format("DD-MM-YYYY")}
                    </Text>
                </Flex>
            )
        }
    })
    
    const wodClassesItems = getUniqueClassesTitles(Array.from(bookings), selectedDate)
    .map(title => ({
        label: title,
        key: title,
        children: (
            <BookingsCardsGrid bookings={getClassesByTitle(Array.from(bookings), selectedDate, title)} />
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

export default BookingPanel