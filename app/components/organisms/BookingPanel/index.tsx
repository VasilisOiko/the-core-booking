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
import { BookingProps } from "@/app/types/bookings"
import BookingsCardsGrid from "../../molecules/BookingsCardsGrid"
import LANGUAGES from "@/app/utils/constants/languages"
import { getLocalizedDayDate } from "@/app/utils/helpers/dateFormatters"


type BookingPanelProps = {
    bookings: BookingProps
}

const BookingPanel = ({ bookings }: BookingPanelProps) => {


    const [selectedDate, setSelectedDate] = useState<string>(bookings[0].date)


    const dateTabs = bookings.map(booking => booking.date)
    .map(date => {
        const { dayOfWeek, formattedDate } = getLocalizedDayDate(date)

        return {
            key: date,
            label: (
                <Flex vertical align="center">
                    <Text>
                        {dayOfWeek}    
                    </Text>
                    <Text>
                        {formattedDate}
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