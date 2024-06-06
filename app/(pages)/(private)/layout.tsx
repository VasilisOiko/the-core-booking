import React from "react";
import { Affix, Card, Flex, Layout, Sider, Content, NavigationBar } from "@/app/components"

function layout({children}: {children: React.ReactNode}) {


  return (
    <>
      <Layout className="h-rest-screen">
        <Sider width={200}>
          <NavigationBar/>
        </Sider>
        <Content className="m-6">
          <Card>
            {children}
          </Card>
        </Content>
      </Layout>
    </>
  )
}

export default layout