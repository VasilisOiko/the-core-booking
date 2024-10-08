"use server"
import {getRequestConfig} from "next-intl/server"
import LANGUAGES from "../utils/constants/languages"
import { getLanguage, hasLanguageCookie, setLanguage } from "../actions/localization"

 
export default getRequestConfig(async () => {

  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.

  let locale: string
  
  if (!hasLanguageCookie()) {
    locale = LANGUAGES.GREEK

    // setLanguage(LANGUAGES.GREEK)
  }
  else {
    locale = getLanguage()
  }


 
  return {
    locale,
    messages: (await import(`./${locale}.json`)).default
  }
})