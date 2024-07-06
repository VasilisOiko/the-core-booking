import React from "react"
import { Layout, Content, Image, Header, Flex, LocalesDropdown, UserProfileMenu, DefaultSiderMenu, MobileSiderMenu } from "@/app/components"


function layout({children}: {children: React.ReactNode}) {


  return (
    <>
      <Layout className="h-screen">

        <DefaultSiderMenu classNames="hidden sm:block"/>

        <Layout>
          <Header>
            <Flex justify="space-between" className="h-full">

              <Flex justify="center" align="center">
                <MobileSiderMenu classNames="sm:invisible"/>
              </Flex >

              <Flex className="h-full" justify="center" align="center" gap="middle">
                  <LocalesDropdown />
                  <UserProfileMenu/>
              </Flex>

            </Flex>
          </Header>
          <Content className="m-6">
            {children}
          </Content>
        </Layout>
        
      </Layout>
    </>
  )
}

export default layout