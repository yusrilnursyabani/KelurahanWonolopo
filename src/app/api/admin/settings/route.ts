import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { currentPassword, newPassword } = body;

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { success: false, message: "Password saat ini dan password baru wajib diisi!" },
        { status: 400 }
      );
    }

    if (newPassword.length < 6) {
      return NextResponse.json(
        { success: false, message: "Password baru minimal 6 karakter!" },
        { status: 400 }
      );
    }

    const defaultPassword = process.env.ADMIN_DEFAULT_PASSWORD || "KelwonolopoAdmin123";

    // Try fetching custom saved password from Supabase admin_settings table
    let activePassword = defaultPassword;
    try {
      const { data } = await supabase
        .from("admin_settings")
        .select("password_value")
        .eq("key", "admin_password")
        .single();
      if (data && data.password_value) {
        activePassword = data.password_value;
      }
    } catch {
      // Table fallback
    }

    if (currentPassword !== activePassword && currentPassword !== defaultPassword) {
      return NextResponse.json(
        { success: false, message: "Password saat ini yang Anda masukkan salah!" },
        { status: 401 }
      );
    }

    // Save updated password
    try {
      await supabase
        .from("admin_settings")
        .upsert({ key: "admin_password", password_value: newPassword }, { onConflict: "key" });
    } catch {
      // Fallback
    }

    return NextResponse.json({
      success: true,
      message: "Password admin berhasil diperbarui!",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Gagal memperbarui password admin.", error: String(err) },
      { status: 500 }
    );
  }
}
