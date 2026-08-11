import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, signAdminToken } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    const defaultPassword = process.env.ADMIN_DEFAULT_PASSWORD || "KelwonolopoAdmin123";

    if (!password || password !== defaultPassword) {
      return NextResponse.json(
        { success: false, message: "Password admin yang Anda masukkan salah!" },
        { status: 401 }
      );
    }

    const token = await signAdminToken();

    const response = NextResponse.json({
      success: true,
      message: "Login berhasil! Selamat datang Admin Kelurahan Wonolopo.",
    });

    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 hari
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan server saat login.", error: String(error) },
      { status: 500 }
    );
  }
}
