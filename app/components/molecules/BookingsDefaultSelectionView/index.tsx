"use server"
import { BookingProps } from "@/app/types/bookings"
import { getClassesByTitle, getUniqueClassesTitles } from "@/app/utils/helpers/bookingFilters"
import { getLocalizedDayDate } from "@/app/utils/helpers/dateFormatters"
import { BookingsCardsGrid, Flex, Tabs, Text } from "@/app/components"

type BookingPanelProps = {
    bookings: BookingProps
}

function BookingsDefaultSelectionView({ bookings }: BookingPanelProps) {

    const classesItemsByDate = (selectedDate: string) => getUniqueClassesTitles(bookings, selectedDate)
        .map(title => ({
            label: <Text className="break-words">{title}</Text>,
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
                    <Tabs
                        tabPosition="left"
                        size="small"
                        items={classesItemsByDate(date)}
                    />
                )
            }
        })

  return (
    <Tabs
        size="small"
        type="card"
        items={dateTabs}
    />
  )
}

export default BookingsDefaultSelectionView