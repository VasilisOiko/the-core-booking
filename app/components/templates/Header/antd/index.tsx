import React from "react"
import { Affix } from "@/app/components"
import { Header as AntdHeader } from "antd/lib/layout/layout"


function Header(props?: any) {

    return (
        <Affix>
            <AntdHeader className="min-w-96 !bg-[#1C2B3A]">
                {props.children}
            </AntdHeader>
        </Affix>
    )
}

export default Header