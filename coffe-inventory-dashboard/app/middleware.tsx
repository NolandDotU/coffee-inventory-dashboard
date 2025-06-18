import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ['/', '/dashboard'];

export function middleware(request: NextRequest) {
    const isLoggedIn = request.cookies.get('authToken');
    const isProtected = protectedRoutes.includes(request.nextUrl.pathname);

    if (isProtected && !isLoggedIn) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/dashboard']
};