

import React from 'react'
import { Layout, Row, Col, Space } from "../../../index"
import { Header as AntdHeader } from 'antd/lib/layout/layout';




function Header(props?: any) {

    return (
        <Layout>
            <AntdHeader>
                <Row
                    justify="center"
                    align="middle"
                    gutter={[0, 24]}
                >
                    <Col span={4}>
                        {props.logo}
                    </Col>
                    <Col span={2} offset={18}>
                        <Space align="center" size="large">
                            {props.children}
                        </Space>
                    </Col>
                    {/* <Col span={1} offset={17}>
                        {props.locales}
                    </Col>
                    <Col span={1} offset={1}>
                        {props.user}
                    </Col> */}

                    {/* <Col offset={17}/>
                    {
                        props.children.map((child: React.ReactNode, index: number) => (
                            <Col key={index} span={2}>
                                {child}
                            </Col>
                        ))
                    } */}
                </Row>
            </AntdHeader>
        </Layout>
    )
}

export default Header