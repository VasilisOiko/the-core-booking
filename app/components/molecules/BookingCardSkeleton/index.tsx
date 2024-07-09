import { Card, Divider, Skeleton, SkeletonButton  } from "@/app/components"

function BookingCardSkeleton() {
    return (
        <Card>
            <Skeleton loading active paragraph={{ rows: 1 }}/>
            <Divider />
            <SkeletonButton active block size="large"/>
        </Card>
    )
}

export default BookingCardSkeleton