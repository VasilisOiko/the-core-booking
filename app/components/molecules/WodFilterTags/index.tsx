import { BOOKINGS } from "@/app/utils/constants/dummy/bookings"
import { CheckableTag, Flex } from "@/app/components"
import { ReactNode } from "react"

const WodFilterTags = () => {

    const wodTitles = Array.from(new Set(
        BOOKINGS.flatMap(booking => booking.wodClasses.map(wodClass => wodClass.title))
      ))

    return (
        <Flex>
            {
                wodTitles.map<ReactNode>((title, index) => (
                    <CheckableTag
                        key={index}
                        checked={false}
                    >
                        {title}
                    </CheckableTag>
                ))
            }
        </Flex>
    )
}

export default WodFilterTags