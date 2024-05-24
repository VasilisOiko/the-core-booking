

import React from "react"
import { Layout, Row, Col, Space, Flex } from "../../../index"
import { Header as AntdHeader } from "antd/lib/layout/layout";




function Header(props?: any) {

    return (
        <Layout>
            <AntdHeader>
                <Flex justify="space-between" align="center">

                    <Space>
                        {props.logo}
                    </Space>
                    <Space align="center" size="large">
                        {props.children}
                    </Space>
                </Flex>
            </AntdHeader>
        </Layout>
    )
}

export default Header