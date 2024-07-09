import { Flex, Segmented, Space, Text } from "@/app/components"
import { RawLocalizedText } from "@/app/locales"
import { BOOKINGS } from "@/app/utils/constants/dummy/bookings"
import dayjs from "dayjs"

type Props = {
  dates: string[]
}

const DateSegment = ({ dates }: Props) => {
    
  const bookingsDates = BOOKINGS.map(booking => booking.date)

  const options = dates.map(date => {
      const day = dayjs(date)

    return {
      label: (
        <Flex vertical>
            <Text>
                {RawLocalizedText(`days.${day.locale("gr-GR").format("dddd")}`)}    
            </Text>
            <Text>
                {day.format("DD-MM-YYYY")}
            </Text>
        </Flex>
      ),
      value: date,
    }
  })

  return (
    <Segmented
      size="middle"
      options={options}
    />
  )
}

export default DateSegment