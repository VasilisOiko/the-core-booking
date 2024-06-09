import React from "react";
import { Layout, Sider, Content, NavigationBar } from "@/app/components"

function layout({children}: {children: React.ReactNode}) {


  return (
    <>
      <Layout className="h-rest-screen">
          <Sider width={200}>
            <NavigationBar/>
          </Sider>
        <Layout>
          <Content className="m-6">
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default layout