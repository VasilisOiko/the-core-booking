import React from "react"
import { Layout, Row, Col, Space, Flex, Affix } from "@/app/components"
import { Header as AntdHeader } from "antd/lib/layout/layout";

function Header(props?: any) {

    return (
        <Layout>
            <Affix>
                <AntdHeader>
                    <Flex justify="space-between" align="center">
                        {props.logo}
                        {props.children}
                    </Flex>
                </AntdHeader>
            </Affix>
        </Layout>
    )
}

export default Header