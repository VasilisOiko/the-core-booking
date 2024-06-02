"use client"

import React from "react"
import { Dropdown, Button, Avatar, Menu } from "../../index"
import { MenuProps } from "antd"
import { UserOutlined } from "@ant-design/icons"
import useAuth from "@/app/hooks/useAuth"

function UserProfileMenu(props:any) {

    type MenuItem = Required<MenuProps>["items"][number]
    const items: MenuItem[] = [
        {
            key: 1,
            // TODO: set locale
            label: (<div>Personal Details</div>),
        },
        {
            key: 2,
            // TODO: set locale
            label: (<div>Change Password</div>),
        },
        {
            type: "divider",
        },
        {
            key: 3,
            // TODO: set locale
            label: (<div>Log out</div>),
        }
      ]

    const dropdownContainer = (menu:any) => <><Menu className="w-44" items={items}/></>

    return (
        <Dropdown dropdownRender={dropdownContainer}
            placement="bottom"
        >
            <Avatar
                icon={<UserOutlined/>}
                size="large"
            />
        </Dropdown>
    )
}

export default UserProfileMenu