"use server"

import { cookies } from "next/headers"
import LANGUAGES from "../utils/constants/languages"

const hasLanguageCookie = () => {
    const cookieStore = cookies()
    return cookieStore.has("language")
}

const setLanguage = async (language: string) => {
    try {
        cookies().set("language", language, { secure: true, sameSite: "strict" })
    } catch (error) {
        console.error("language cookie: ", error)
    }
}

const getLanguage = (): string => {
    const cookieStore = cookies()
    return cookieStore.get("language")?.value || LANGUAGES.GREEK
}

export { getLanguage, hasLanguageCookie, setLanguage }
