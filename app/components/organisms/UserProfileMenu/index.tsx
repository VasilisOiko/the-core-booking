"use client"

import React from "react"
import { Dropdown, Button, Avatar, Menu } from "../../index"
import { MenuProps } from "antd"
import { UserOutlined } from "@ant-design/icons"

function UserProfileMenu(props:any) {

    const userOptions: MenuProps["items"] = [
        {
            key: 1,
            label: (<div>Personal Details</div>),
        },
        {
            key: 2,
            label: (<div>Change Password</div>),
        }
    ]

    type MenuItem = Required<MenuProps>["items"][number]
    const items: MenuItem[] = [
        {
            key: 1,
            label: (<div>Personal Details</div>),
        },
        {
            key: 2,
            label: (<div>Change Password</div>),
        },
        {
            type: "divider",
        },
        {
            key: 3,
            label: (<div>Log out</div>),
        }
      ]

    const dropdownContainer = (menu:any) => <><Menu className="w-44" items={items}/></>

    return (
        <Dropdown dropdownRender={dropdownContainer} menu={{ items: userOptions}}
        // <Dropdown  menu={{ items: userOptions}}
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