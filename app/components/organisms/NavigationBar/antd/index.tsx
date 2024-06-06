import React from 'react'
import type { MenuProps } from 'antd'
import { Menu, Layout } from '@/app/components'

function NavigationBar() {
    type MenuItem = Required<MenuProps>['items'][number];

const navItems: MenuItem[] = [
    {
        label: 'Dashboard',
        key: 'Dashboard',
    },
    {
        label: 'Bookings',
        key: 'Bookings',
    },
    {
        label: 'information',
        key: 'information',
    }
];

    return (
        <Menu
            theme='dark'
            mode="inline"
            items={navItems}
            className="rounded-r-lg h-full"
        />
    )
}

export default NavigationBar