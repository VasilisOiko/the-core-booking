import { NextRequest, NextResponse } from "next/server"
import { isAuthenticated } from "./app/actions/authentication"
import { hasLanguageCookie, setLanguage } from "./app/actions/localization"
import LANGUAGES from "./app/utils/constants/languages"

export function middleware(request: NextRequest) {

    if (!hasLanguageCookie()) {
        // Set the default language
        setLanguage(LANGUAGES.GREEK)
    }
    
    if (!isAuthenticated() && !request.nextUrl.pathname.match(("/login"))) {

        // Redirect user to login if not authenticated
        return NextResponse.redirect(new URL("/login", request.url))

    } else if (isAuthenticated() && request.nextUrl.pathname.match(("/login|/$"))) {

        // Redirect authenticated user away from login page
        return NextResponse.redirect(new URL("/overview", request.url))
    }

    return NextResponse.next()

}

export const config = {
    matcher: ["/", "/login", "/overview", "/bookings", "/information"],
  }
  