import dynamic from "next/dynamic"
import { Flex } from "../../../components"
import Loading from "@/app/loading"

// TODO: change loginForm path
const LoginForm = dynamic(() => import("@/app/components/organisms/LoginForm"), {
  ssr: false,
  loading: () =>  <Loading/>})

const page = () => {

  return (
    <Flex
      className="h-screen"
      justify="center"
      align="center"
    >
        <LoginForm/>
    </Flex>
  )
}

export default page
