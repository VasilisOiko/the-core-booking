"use client"

import { MenuProps } from "antd"
import { setLanguage } from "../actions/localization"

export const handleSelect: MenuProps["onClick"] = async ({ key }) => {
    await setLanguage(key)
}