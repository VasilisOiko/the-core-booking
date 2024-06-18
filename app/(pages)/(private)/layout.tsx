import React from "react"
import { Layout, Sider, Content, NavigationBar } from "@/app/components"
import { getClient } from "@/app/actions/client"

function layout({children}: {children: React.ReactNode}) {

  // getClient().then((client) => {
  //   // console.log("client: ", client)
  // })
  const client = getClient()

  // console.log("++++++++++++++++++++++++++++++++++++++++client: ", client)
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