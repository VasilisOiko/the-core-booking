"use server"

import { cookies } from "next/headers"
import LANGUAGES from "../utils/constants/languages"

const hasLanguageCookie = () => {
    const cookieStore = cookies()
    return cookieStore.has("language")
}

const setLanguage = async (language: string) => {
    cookies().set("language", language, { secure: true, sameSite: "strict" })
}

const getLanguage = ():string => {
    const cookieStore = cookies()
    return cookieStore.get("language")?.value || LANGUAGES.GREEK
}

export { getLanguage, hasLanguageCookie, setLanguage }
