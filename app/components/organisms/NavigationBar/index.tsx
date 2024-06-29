"use client"

import React from "react"
import type { MenuProps } from "antd"
import { Menu } from "@/app/components"
import { RawLocalizedText } from "@/app/locales"
import { PAGES } from "@/app/utils/constants/pages"
import { useRouter, usePathname  } from "next/navigation"

function NavigationBar() {
    type MenuItem = Required<MenuProps>["items"][number];

    const router = useRouter()

    const navItems: MenuItem[] = [
        {
            label: RawLocalizedText("overview.page.label"),
            key: PAGES.OVERVIEW.ROUTE,
            onClick: () => router.push(PAGES.OVERVIEW.ROUTE),
        },
        {
            label: RawLocalizedText("bookings.page.label"),
            key: PAGES.BOOKINGS.ROUTE,
            onClick: () => router.push(PAGES.BOOKINGS.ROUTE),
        },
        {
            label: RawLocalizedText("information.page.label"),
            key: PAGES.INFORMATION.ROUTE,
            onClick: () => router.push(PAGES.INFORMATION.ROUTE),
        }
    ]

    return (
        <Menu
            className="h-full"
            theme="dark"
            mode="inline"
            items={navItems}
            defaultSelectedKeys={[usePathname()]}
        />
    )
}

export default NavigationBar