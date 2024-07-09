import { Sider, NavigationBar, Image } from "@/app/components"
import crossfitLogo from "public/THE+CORE+logo+final.png"

type Props = {
    className?: string
}
function DefaultSiderMenu({ className }: Props) {

    const Logo = () =>{
        return (
            <Image
                src={crossfitLogo.src}
                alt="crossfit logo"
                preview={false}
                height={57}
                width={160}
            />
        )
      }

  return (
    <>
        <Sider
            breakpoint="lg"
            width={200}
            className={className}
          >
              <Logo/>
              <NavigationBar/>
        </Sider>
    </>
  )
}

export default DefaultSiderMenu