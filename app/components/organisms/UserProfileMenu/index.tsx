"use client"

import { Dropdown, Button, Avatar, Menu, Text } from "@/app/components"
import { MenuProps } from "antd"
import { UserOutlined } from "@ant-design/icons"
import { RawLocalizedText } from "@/app/locales"

// TODO: create constants for menu items keys

function UserProfileMenu(props:any) {

    type MenuItem = Required<MenuProps>["items"][number]
    const items: MenuItem[] = [
        {
            key: 1,
            label: (<Text>{RawLocalizedText("userProfileMenu.PersonalDetails.label")}</Text>),
        },
        {
            key: 2,
            label: (<Text>{RawLocalizedText("userProfileMenu.changePassword.label")}</Text>),
        },
        {
            type: "divider",
        },
        {
            key: 3,
            label: (<Text>{RawLocalizedText("userProfileMenu.logOut.label")}</Text>),
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