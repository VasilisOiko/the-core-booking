import React from 'react'
import type { MenuProps } from 'antd'
import { LocalesDropdown, Menu } from '../../../index'
import LANGUAGES from "../../../../utils/constants/languages";
import { MdLanguage } from 'react-icons/md';

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
            mode="vertical"
            items={navItems}
        />
    )
}

export default NavigationBar