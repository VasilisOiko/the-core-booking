import React from "react"
import { Layout, Row, Col, Space, Flex, Affix } from "@/app/components"
import { Header as AntdHeader } from "antd/lib/layout/layout";

function Header(props?: any) {

    return (
        <Affix>
            <AntdHeader>
                {props.children}
            </AntdHeader>
        </Affix>
    )
}

export default Header