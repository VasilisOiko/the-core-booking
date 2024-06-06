"use client"

import { Dropdown, Button, Avatar, Menu } from "@/app/components"
import { MenuProps } from "antd"
import { UserOutlined } from "@ant-design/icons"

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
        <Dropdown dropdownRender={dropdownContainer} trigger={["click"]} placement="bottom">
            <Button
                ghost
                shape="circle"
                icon={<Avatar icon={<UserOutlined/>} size="large"/>}
            >

            </Button>
            
        </Dropdown>
    )
}

export default UserProfileMenu