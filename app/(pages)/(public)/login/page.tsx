import dynamic from "next/dynamic"
import { Flex } from "@/app/components"
import Loading from "@/app/(pages)/loading"

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
