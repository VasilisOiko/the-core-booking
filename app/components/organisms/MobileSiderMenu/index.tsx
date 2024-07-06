"use client"
import { Button, NavigationBar, Drawer, Image, Flex } from "@/app/components"
import crossfitLogo from "public/THE+CORE+logo+final.png"
import { ArrowLeftOutlined, MenuOutlined } from "@ant-design/icons"
import { useState } from "react"
import { ConfigProvider, theme } from "antd"

type Props = {
  classNames?: string
}

function MobileSiderMenu({ classNames }: Props) {
  
  const { token } = theme.useToken();
  
  const [showMenu, setShowMenu] = useState(false)
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
    <ConfigProvider
      theme={{
        token: {
          colorBgElevated: token.Layout?.siderBg,
          colorIcon: token.colorPrimary,
          colorIconHover: token.colorPrimaryHover,
        },
      }}
    >

      <Flex justify="center" hidden>
        <Button icon={<MenuOutlined />}
          shape="default"
          onClick={() => setShowMenu(!showMenu)}
          className={classNames}
        />
      </Flex>

      <Drawer
        placement="left"
        width={250}
        closeIcon={<ArrowLeftOutlined  />}
        title={<Logo/>}
        open={showMenu}
        onClose={() => setShowMenu(false)}
      >
          <NavigationBar onSelect={() => setShowMenu(false)}/>
      </Drawer>
    </ConfigProvider>
  )
}

export default MobileSiderMenu