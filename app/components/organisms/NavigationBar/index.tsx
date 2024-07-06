"use client"

import React from "react"
import type { MenuProps } from "antd"
import { Menu } from "@/app/components"
import { RawLocalizedText } from "@/app/locales"
import { PAGES } from "@/app/utils/constants/pages"
import { useRouter, usePathname  } from "next/navigation"
import { BookFilled, HomeFilled, InfoCircleFilled } from "@ant-design/icons"

type Props = {
    onSelect?: () => void
}

function NavigationBar({ onSelect }: Props) {
    type MenuItem = Required<MenuProps>["items"][number];

    const router = useRouter()

    const navItems: MenuItem[] = [
        {
            key: PAGES.OVERVIEW.ROUTE,
            icon: <HomeFilled />,
            label: RawLocalizedText("overview.page.label"),
            onClick: () => router.push(PAGES.OVERVIEW.ROUTE),
        },
        {
            key: PAGES.BOOKINGS.ROUTE,
            icon: <BookFilled />,
            label: RawLocalizedText("bookings.page.label"),
            onClick: () => router.push(PAGES.BOOKINGS.ROUTE),
        },
        {
            key: PAGES.INFORMATION.ROUTE,
            icon: <InfoCircleFilled />,
            label: RawLocalizedText("information.page.label"),
            onClick: () => router.push(PAGES.INFORMATION.ROUTE),
        }
    ]

    return (
        <Menu
            theme="dark"
            mode="inline"
            items={navItems}
            defaultSelectedKeys={[usePathname()]}
            onSelect={onSelect}
        />
    )
}

export default NavigationBar