"use client"
import { Button, List, ListItem, Text, Title } from "@/app/components"
import { BOOKINGS } from "@/app/utils/constants/dummy/bookings"
import { WodClassesProps } from "@/app/types/bookings"


type WodListProps = {
    list: WodClassesProps[]
}

const WodList = ({ list }: WodListProps) => {

    const wodClass = list[0].title
    
    const renderWod = (item: WodClassesProps) => (
        <>
            <ListItem>
                <Text>
                    {item.time}
                </Text>
                <Button>
                    Make booking
                </Button>
            </ListItem>
        </>
    )


  return (
    <>
        <Title level={2} >
            {wodClass}
        </Title>
        <List
            dataSource={list}
            renderItem={renderWod}
        >
        </List>
    </>

  )
}

export default WodList