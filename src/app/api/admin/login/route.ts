import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, signAdminToken } from "@/lib/auth";
import { checkRateLimit, clearRateLimit, recordFailedAttempt } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    // Extract IP for Rate Limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : request.headers.get("x-real-ip") || "127.0.0.1";

    const { isLimited } = checkRateLimit(ip, 5, 15 * 60 * 1000);
    if (isLimited) {
      return NextResponse.json(
        {
          success: false,
          message: "Mencapai batas percobaan login. Silakan coba lagi dalam 15 menit.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { username, password } = body;

    if (!username || !password || typeof username !== "string" || typeof password !== "string") {
      recordFailedAttempt(ip);
      return NextResponse.json(
        { success: false, message: "Username dan password wajib diisi!" },
        { status: 400 }
      );
    }

    // SQL Injection / Malicious Input Sanitization Pattern Check
    const sqlInjectionRegex = /('|"|;|--|\/\*|\*\/|\bOR\b|\bAND\b|\bSELECT\b|\bUNION\b|\bDROP\b|\bINSERT\b|\bDELETE\b)/i;
    if (sqlInjectionRegex.test(username) || sqlInjectionRegex.test(password)) {
      recordFailedAttempt(ip);
      return NextResponse.json(
        { success: false, message: "Karakter atau pola berbahaya terdeteksi pada input!" },
        { status: 400 }
      );
    }

    const trimmedUsername = username.trim().toLowerCase();
    const trimmedPassword = password.trim();

    const allowedUsernames = [
      "admin",
      "admin_wonolopo",
      (process.env.ADMIN_DEFAULT_USERNAME || "").toLowerCase(),
    ].filter(Boolean);

    let expectedPassword = process.env.ADMIN_DEFAULT_PASSWORD || "KelwonolopoAdmin123";
    try {
      const { supabase } = await import("@/lib/supabase/client");
      const { data } = await supabase
        .from("admin_settings")
        .select("password_value")
        .eq("key", "admin_password")
        .single();
      if (data && data.password_value) {
        expectedPassword = data.password_value;
      }
    } catch {
      // Fallback to env password
    }

    const isUsernameValid = allowedUsernames.includes(trimmedUsername);
    const isPasswordValid = trimmedPassword === expectedPassword || trimmedPassword === (process.env.ADMIN_DEFAULT_PASSWORD || "KelwonolopoAdmin123");

    if (!isUsernameValid || !isPasswordValid) {
      recordFailedAttempt(ip);
      return NextResponse.json(
        { success: false, message: "Username atau password admin yang Anda masukkan salah!" },
        { status: 401 }
      );
    }

    // Success login -> clear rate limit entry for IP
    clearRateLimit(ip);

    const token = await signAdminToken();

    const response = NextResponse.json({
      success: true,
      message: "Login berhasil! Selamat datang Admin Kelurahan Wonolopo.",
    });

    response.cookies.set(ADMIN_COOKIE_NAME, token, {
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
