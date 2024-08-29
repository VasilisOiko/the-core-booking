import { Flex, Card, Row, Col, SkeletonInput, SkeletonButton, Spin, Space, Skeleton } from "@/app/components"

function Loading() {
  return (
        <Flex
            justify="center"
            align="center"
            className="w-80 h-80"
        >
            <Spin size="large"/>
        </Flex>
  )
}

export default Loading