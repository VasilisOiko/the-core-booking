"use client"

import { Dropdown, Button, Avatar, Menu, Text } from "@/app/components"
import { MenuProps } from "antd"
import { UserOutlined } from "@ant-design/icons"
import { RawLocalizedText } from "@/app/locales"
import { MENU_ITEM_KEYS } from "@/app/utils/constants/identifiers"
import { logout } from "@/app/actions/authentication"
import { getAthlete } from "@/app/actions/athlete"
import { AthleteProps } from "@/app/types/athlete"
import Loading from "@/app/(pages)/loading"
import { useEffect, useState } from "react"

function UserProfileMenu(props:any) {

    const [athlete, setAthlete] = useState<AthleteProps>()

    type MenuItem = Required<MenuProps>["items"][number]
    const items: MenuItem[] = [
        {
            key: MENU_ITEM_KEYS.PERSONAL_DETAILS,
            label: (<Text>{RawLocalizedText("userProfileMenu.PersonalDetails.label")}</Text>),
        },
        {
            key: MENU_ITEM_KEYS.CHANGE_PASSWORD,
            label: (<Text>{RawLocalizedText("userProfileMenu.changePassword.label")}</Text>),
        },
        {
            type: "divider",
        },
        {
            key: MENU_ITEM_KEYS.LOG_OUT,
            label: (<Text>{RawLocalizedText("userProfileMenu.logOut.label")}</Text>),
        }
    ]

    const handleItemClick = ({key}: {key: string}) => {
        console.log("item clicked: ", key)

        switch (key) {
            case MENU_ITEM_KEYS.PERSONAL_DETAILS:
                
                break;

            case MENU_ITEM_KEYS.CHANGE_PASSWORD:
                
                break;

            case MENU_ITEM_KEYS.LOG_OUT:
                logout()
                break;
        }
    }

    useEffect(() => {
        getAthlete().then((data) => {
            setAthlete(data)
        })
    
      return () => {
        setAthlete(undefined)
      }
    }, [])

    const menuComponent = (menu:any) => (   
        <>
            <Menu
                className="w-44"
                items={items}
                onClick={handleItemClick}
            />
        </>
    )


    return (
        <Dropdown dropdownRender={menuComponent} trigger={["click"]} placement="bottom">
            <Button
                ghost
                shape="circle"
                icon={<Avatar size="large">{`${athlete?.lastName.charAt(0)}${athlete?.firstName.charAt(0)}`}</Avatar>}
            >

            </Button>
        </Dropdown>
    )
}

export default UserProfileMenu 