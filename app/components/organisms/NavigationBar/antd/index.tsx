import React from "react"
import type { MenuProps } from "antd"
import { Menu } from "@/app/components"
import { RawLocalizedText } from "@/app/locales"
import { PAGES } from "@/app/utils/constants/pages"

function NavigationBar() {
    type MenuItem = Required<MenuProps>["items"][number];

    const navItems: MenuItem[] = [
        {
            label: RawLocalizedText("dashboard.page.label"),
            key: PAGES.DASHBOARD.KEY,
        },
        {
            label: RawLocalizedText("bookings.page.label"),
            key: PAGES.BOOKINGS.KEY,
        },
        {
            label: RawLocalizedText("information.page.label"),
            key: PAGES.INFORMATION.KEY,
        }
    ]

    return (
        <Menu
            theme="dark"
            mode="inline"
            items={navItems}
            className="rounded-r-lg h-full"
        />
    )
}

export default NavigationBar