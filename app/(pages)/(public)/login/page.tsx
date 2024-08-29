import dynamic from "next/dynamic"
import { Flex, Card } from "@/app/components"
import Loading from "@/app/(pages)/(public)/login/loading"

const LoginForm = dynamic(() => import("@/app/components/organisms/LoginForm"), {
  ssr: false,
  loading: () =>  <Loading/>})

const page = () => {

  return (
    <Flex
      className="h-screen min-w-96 bg-[#3B536D]"
      justify="center"
      align="center"
    >
      <Card className="m-4">
        <LoginForm/>
      </Card>
    </Flex>
  )
}

export default page
