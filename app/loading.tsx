
import { Flex, Spinner } from "./components"

const Loading = () => {
  return (
    <Flex
      className="h-screen"
      justify="center"
      align="center"
    >
      <h1>loading</h1>
      <Spinner/>
    </Flex>
  )
}

export default Loading