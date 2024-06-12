"use client"
//TODO: move this file to hooks

import { MenuProps } from "antd";
import { setLanguage } from "@/app/lib/useLocales";

export const handleSelect: MenuProps["onClick"] = async ({ key }) => {
    await setLanguage(key)
}