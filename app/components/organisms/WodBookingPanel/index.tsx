import {
    Card,
    Flex,
    Tabs,
    Title,
    WodFilterTags,
    Text,
    WodTable
} from "@/app/components"
import { RawLocalizedText } from "@/app/locales"
import { BOOKINGS } from "@/app/utils/constants/dummy/bookings"
import dayjs from "dayjs"
import WodTimeTabs from "../../molecules/WodTimeTabs"

const WODBookingPanel = () => {

    const dateTabs = BOOKINGS.map(booking => booking.date)
    .map(date => {
        const day = dayjs(date)

        return {
            key: date,
            label: (
                <Flex vertical>
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

    const wodClasses = BOOKINGS
    .filter(booking => booking.date === "2024-06-19T09:00:00Z")
    .flatMap(booking => booking.wodClasses)


    const wodTitles = Array.from(new Set(
        BOOKINGS.flatMap(booking => booking.wodClasses.map(wodClass => wodClass.title))
      ))

    return (
        <Card
            type="inner"
            tabList={dateTabs}
        >
            <Flex vertical>
                <WodTimeTabs/>
                <WodTable/>
            </Flex>
        </Card>
    )
}

export default WODBookingPanel