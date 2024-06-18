import { NextRequest, NextResponse } from "next/server"
import { isAuthenticated } from "./app/actions/authentication"

export function middleware(request: NextRequest) {

    
    if (!isAuthenticated() && !request.nextUrl.pathname.match(("/login"))) {

        // Redirect user to login if not authenticated
        return NextResponse.redirect(new URL("/login", request.url))

    } else if (isAuthenticated() && request.nextUrl.pathname.match(("/login|/$"))) {

        // Redirect authenticated user away from login page
        return NextResponse.redirect(new URL("/dashboard", request.url))
    }

}

export const config = {
    matcher: ["/", "/login", "/dashboard"],
  }
  