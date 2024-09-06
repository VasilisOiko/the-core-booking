"use client"

import { Dropdown, Button, Avatar, Menu, Drawer, Text, Skeleton, PersonalDetailsDescriptions, SkeletonAvatar, PersonalDetailsDescriptionsSkeleton } from "@/app/components"
import { MenuProps } from "antd"
import { LoadingOutlined, UserOutlined } from "@ant-design/icons"
import { RawLocalizedText } from "@/app/locales"
import { USER_MENU_ITEM_KEYS } from "@/app/utils/constants/identifiers"
import { logout } from "@/app/actions/authentication"
import { getAthlete } from "@/app/actions/athlete"
import { AthleteProps } from "@/app/types/athlete"
import { Suspense, useEffect, useState } from "react"

// TODO: implement drawer
// TODO: implement change password

function UserProfileMenu() {

    const [athlete, setAthlete] = useState<AthleteProps>()
    const [personalDetailsDrawerVisibility, setPersonalDetailsDrawerVisibility] = useState(false)

    type MenuItem = Required<MenuProps>["items"][number]
    const items: MenuItem[] = [
        {
            key: USER_MENU_ITEM_KEYS.PERSONAL_DETAILS,
            label: (<Text>{RawLocalizedText("userProfileMenu.PersonalDetails.label")}</Text>),
        },
        {
            key: USER_MENU_ITEM_KEYS.CHANGE_PASSWORD,
            label: (<Text>{RawLocalizedText("userProfileMenu.changePassword.label")}</Text>),
        },
        {
            type: "divider",
        },
        {
            key: USER_MENU_ITEM_KEYS.LOG_OUT,
            label: (<Text>{RawLocalizedText("userProfileMenu.logOut.label")}</Text>),
        }
    ]

    const showPersonalDetailsDrawer = () => {
        setPersonalDetailsDrawerVisibility(true)
    }
    
    const closePersonalDetailsDrawer = () => {
        setPersonalDetailsDrawerVisibility(false)
    }

    const handleItemClick = async ({ key }: {key: string}) => {
        console.log("item clicked: ", key)

        switch (key) {
            case USER_MENU_ITEM_KEYS.PERSONAL_DETAILS:
                showPersonalDetailsDrawer()
                break

            case USER_MENU_ITEM_KEYS.CHANGE_PASSWORD:
                
                break

            case USER_MENU_ITEM_KEYS.LOG_OUT:
                await logout()
                break
        }
    }

    const setStateValues = async () => {
        try {
            const data = await getAthlete()
            setAthlete(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        setStateValues()
    
        return () => {
          setAthlete(undefined)
        }
    }, [])

    const menuComponent = () => (   
        <Menu
            className="w-40"
            items={items}
            onClick={handleItemClick}
        />
    )

    return (
        <>
            <Dropdown arrow dropdownRender={menuComponent} trigger={["click"]} placement="bottomLeft">
                <Button
                    ghost
                    shape="circle"
                    icon={
                        !athlete ?
                        <LoadingOutlined />
                        :
                        <Avatar size="large">{`${athlete.lastName.charAt(0)}${athlete.firstName.charAt(0)}`}</Avatar>
                    }
                >
                </Button>
            
            </Dropdown>
 
            <Drawer placement="top" onClose={closePersonalDetailsDrawer} open={personalDetailsDrawerVisibility}>
                {
                    !athlete ?
                    <PersonalDetailsDescriptionsSkeleton/>
                    :
                    <PersonalDetailsDescriptions athlete={athlete} />

                }
            </Drawer> 
        </>
    )
}

export default UserProfileMenu 