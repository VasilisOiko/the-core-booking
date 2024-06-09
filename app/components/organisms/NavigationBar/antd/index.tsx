import React from "react"
import type { MenuProps } from "antd"
import { Menu } from "@/app/components"
import { RawLocalizedText } from "@/app/locales";
import { PAGES } from "@/app/utils/constants/pages"

function NavigationBar() {
    type MenuItem = Required<MenuProps>["items"][number];

    // const dashboardLabel = RawLocalizedText("dashboard.page.name")
    // const bookingsLabel = RawLocalizedText("bookings.page.name")
    // const informationLabel = RawLocalizedText("information.page.name")

    const dashboardLabel = "dashboard"
    const bookingsLabel = "bookings"
    const informationLabel = "information"

    const navItems: MenuItem[] = [
        {
            label:dashboardLabel,
            key: PAGES.DASHBOARD_KEY,
        },
        {
            label: bookingsLabel,
            key: PAGES.BOOKINGS_KEY,
        },
        {
            label: informationLabel,
            key: PAGES.INFORMATION_KEY,
        }
    ];

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