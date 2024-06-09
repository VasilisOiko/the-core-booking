
import { Flex, Spin } from "./components"

const Loading = () => {
  return (
    <Flex
      className="h-screen"
      justify="center"
      align="center"
    >
      <Spin fullscreen/> 
    </Flex>
  )
}

export default Loading