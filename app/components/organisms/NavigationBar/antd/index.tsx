import React from 'react'
import type { MenuProps } from 'antd'
import { LocalesDropdown, Menu } from '../../../index'
import LANGUAGES from "../../../../utils/constants/languages";
import { MdLanguage } from 'react-icons/md';

function NavigationBar() {
    type MenuItem = Required<MenuProps>['items'][number];

const navItems: MenuItem[] = [
    {
        label: 'Navigation One',
        key: 'mail',
    },
    {
        label: (<LocalesDropdown/>),
        key: 'locales',
    },
    {
        icon: (<MdLanguage/>),
        key: 'SubMenu',
        children: [
            { label: LANGUAGES.GREEK_TEXT, key: LANGUAGES.GREEK },
            { label: LANGUAGES.ENGLISH_TEXT, key: LANGUAGES.ENGLISH },
        ],
    }
];

    return (
        <Menu
            mode="horizontal"
            items={navItems}
        />
    )
}

export default NavigationBar