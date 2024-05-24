import React from "react";
import { Flex, Layout, NavigationBar, Space } from "../../components";
// import Sider from 'antd/lib/layout/layout';
import ProtectedRoute from "../../auth/protectedRoute";


function layout() {

  return (
    <Flex vertical={true} justify="flex-start" align="flex-start" className="h-screen w-1/6">
      <Layout>
          <NavigationBar/>
      </Layout>
    </Flex>
  )
}

export default layout