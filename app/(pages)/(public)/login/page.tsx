import dynamic from "next/dynamic";
import { Flex } from "../../../components"


const LoginForm = dynamic(() => import("@/app/components/organisms/LoginForm"), { ssr: false });

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
