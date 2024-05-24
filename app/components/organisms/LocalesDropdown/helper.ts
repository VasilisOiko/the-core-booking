"use client"
import { MenuProps } from "antd";
import i18n from "../../../locales/init";

export const handleSelect: MenuProps["onClick"] = ({ key }) => {
    changeLanguage(key)
};

const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
};