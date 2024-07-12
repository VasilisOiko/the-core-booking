import { Flex, Spin } from "@/app/components"

const Loading = () => {

  return (
    <Flex
      className="h-screen"
      justify="center"
      align="center"
    >
      <Spin/>
    </Flex>
  )
}

export default Loading