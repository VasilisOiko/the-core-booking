"use client"
import { Button, List, ListItem, Text } from "@/app/components"
import { BOOKINGS } from "@/app/utils/constants/dummy/bookings"

const WodList = () => {
    const wodClasses = BOOKINGS
    .filter(booking => booking.date === "2024-06-19T09:00:00Z")
    .flatMap(booking => booking.wodClasses)

    const wodTimes = Array.from(new Set(
        BOOKINGS.flatMap(booking => booking.wodClasses.map(wodClass => wodClass.time))
      ))

    // const wodPerTime = Array.from(new Set(
    //     wodClasses.filter(wod => wod.time === wodTimes[0]).map(wod => wod.title))
    // )

    const wodPerTime = (time: string) => {
        return wodClasses.filter(wod => wod.time === time)
        
    }

    const dateItems = (item: any) => (
        <ListItem>
            <Text>
                {item}
            </Text>
            <List
                dataSource={wodPerTime(item)}
                renderItem={(item: any) => (
                    <>
                        <ListItem>
                            <Text>
                                {item.title}
                            </Text>
                            <Button>
                                Make a booking
                            </Button>
                        </ListItem>
                    </>
                )}
            />


        </ListItem>
    )
    const wodItems = (item: any) => (
        <ListItem>
            <Text>
                {item.title}
            </Text>
            <Text>
                {item.time}
            </Text>
        </ListItem>
    )


  return (
    <List
        dataSource={wodTimes}
        renderItem={dateItems}
    >
    </List>
  )
}

export default WodList