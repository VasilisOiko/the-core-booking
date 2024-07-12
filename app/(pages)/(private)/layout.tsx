import React, { Suspense } from "react"
import { Layout, Content, Image, Header, Flex, LocalesDropdown, UserProfileMenu, DefaultSiderMenu, MobileSiderMenu, SkeletonAvatar } from "@/app/components"
import { getAthlete } from "@/app/actions/athlete"
import Loading from "./loading"


async function layout({children}: {children: React.ReactNode}) {

  return (
    <>
      <Layout hasSider className="h-screen">

        <DefaultSiderMenu className="hidden sm:block"/>

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