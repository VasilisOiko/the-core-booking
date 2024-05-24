import { NextRequest, NextResponse } from "next/server";

import useAuth from "./app/hooks/useAuth"

export function middleware(request: NextRequest) {
    const { isAuthenticated } = useAuth()
    
    console.log("middleware: ", isAuthenticated)

    if (!isAuthenticated() && !request.nextUrl.pathname.match(("/login"))) {

        console.log("redirect to login")

        // Redirect user to login if not authenticated
        return NextResponse.redirect(new URL('/login', request.url))

    } else if (isAuthenticated() && request.nextUrl.pathname.match(("/login"))) {

        console.log("from login page redirect to dashboard")

        // Redirect authenticated user away from login page
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

}

export const config = {
    matcher: ['/login', '/dashboard'],
  }
  