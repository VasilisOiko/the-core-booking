
import { Flex, Spin } from "./components"
import { GiJumpingRope } from "react-icons/gi";

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