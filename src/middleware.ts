import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE_NAME, verifyAdminToken } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Always bypass API routes
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // 2. Handle /admin root redirect
  if (pathname === "/admin") {
    const adminToken = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
    if (adminToken && (await verifyAdminToken(adminToken))) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // 3. Handle /admin/login page: if already authenticated, redirect to /admin/dashboard
  if (pathname === "/admin/login") {
    const adminToken = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
    if (adminToken && (await verifyAdminToken(adminToken))) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
    return NextResponse.next();
  }

  // 4. Protect all other /admin/* pages (e.g. /admin/dashboard, /admin/berita, /admin/galeri)
  if (pathname.startsWith("/admin/")) {
    const adminToken = request.cookies.get(ADMIN_COOKIE_NAME)?.value;

    if (!adminToken) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    const isValid = await verifyAdminToken(adminToken);
    if (!isValid) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      const response = NextResponse.redirect(loginUrl);
      response.cookies.delete(ADMIN_COOKIE_NAME);
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
