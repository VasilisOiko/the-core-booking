"use client"
// TODO: change file name
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
import { BookingProps } from "@/app/utils/types/bookings"

import { getLanguage } from "@/app/actions/localization"
import Loading from "@/app/loading"

type WODBookingPanelProps = {
    bookings: BookingProps
}

const WodBookingPanel = ({ bookings }: WODBookingPanelProps) => {


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
                        {RawLocalizedText(`days.${day.locale("gr-GR").format("dddd")}`)}    
                    </Text>
                    <Text>
                        {day.format("DD-MM-YYYY")}
                    </Text>
                </Flex>
            )
        }
    })
    
    const wodClassesItems = getUniqueWodTitles(Array.from(bookings), selectedDate)
    .map(title => ({
        label: title,
        key: title,
        children: (
            <WodList list={getWodClassesByTitle(Array.from(bookings), selectedDate, title)}/>
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

export default WodBookingPanel