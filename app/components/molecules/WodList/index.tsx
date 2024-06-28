"use client"
import { Button, List, ListItem, Text } from "@/app/components"
import { BOOKINGS } from "@/app/utils/constants/dummy/bookings"
import { WodClassesProps } from "@/app/utils/types/bookings";


type WodListProps = {
    list: WodClassesProps[]
}

const WodList = ({ list }: WodListProps) => {
    
    const wods = BOOKINGS
    .filter(booking => booking.date === "2024-06-19T09:00:00Z")
    .flatMap(booking => booking.wodClasses)
    .filter(wod => wod.time === "10:00")

    const renderWod = (item: WodClassesProps) => (
        <>
            <ListItem>
                <Text>
                    {item.time}
                </Text>
                <Text>
                    {item.title}
                </Text>
                <Button>
                    Make booking
                </Button>
            </ListItem>
        </>
    )


  return (

    <List
        dataSource={list}
        renderItem={renderWod}
    >
    </List>
  )
}

export default WodList