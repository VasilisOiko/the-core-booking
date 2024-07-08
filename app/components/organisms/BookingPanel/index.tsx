
import {
    Flex,
    Tabs,
    Text
} from "@/app/components"

import { getUniqueClassesTitles, getClassesByTitle } from "@/app/utils/helpers/bookingFilters"
import { BookingProps } from "@/app/types/bookings"
import BookingsCardsGrid from "../../molecules/BookingsCardsGrid"
import { getLocalizedDayDate } from "@/app/utils/helpers/dateFormatters"

type BookingPanelProps = {
    bookings: BookingProps
}

function BookingPanel({ bookings }: BookingPanelProps) {

    const classesItemsByDate = (selectedDate: string) => getUniqueClassesTitles(bookings, selectedDate)
        .map(title => ({
            label: title,
            key: title,
            children: (<BookingsCardsGrid bookings={getClassesByTitle(bookings, selectedDate, title)}/>)
        }))

    const dateTabs = bookings?.map(booking => booking.date)
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
                ),
                children: (
                    <Flex vertical> 
                        <Tabs
                            tabPosition="left"
                            items={classesItemsByDate(date)}
                        />
                    </Flex>
                )
            }
        })

    return (
        <Tabs
            type="card"
            items={dateTabs}
        >

        </Tabs>
    )
}

export default BookingPanel