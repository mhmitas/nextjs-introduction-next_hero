import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const token = cookies(request).get('next-auth.session-token')

    if (!token) {
        // redirect is not working
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard',]
}