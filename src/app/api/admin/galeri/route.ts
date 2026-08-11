import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase/client";
import { addInMemoryGaleri, getInMemoryGaleri, type GaleriItem } from "@/lib/mock-store";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("galeri")
      .select("*")
      .order("event_date", { ascending: false });

    if (!error && data) {
      return NextResponse.json({ success: true, data });
    }
  } catch {
    // Fallback
  }

  return NextResponse.json({ success: true, data: getInMemoryGaleri() });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, image_url, category, event_date } = body;

    if (!image_url) {
      return NextResponse.json(
        { success: false, message: "Foto galeri harus diunggah!" },
        { status: 400 }
      );
    }

    const payload = {
      title: title || "Dokumentasi Kegiatan Wonolopo",
      image_url,
      category: category || "Kegiatan Kelurahan",
      event_date: event_date || new Date().toISOString().split("T")[0],
    };

    const { data, error } = await supabase
      .from("galeri")
      .insert([payload])
      .select()
      .single();

    if (!error && data) {
      addInMemoryGaleri(data);
      revalidatePath("/galeri");
      revalidatePath("/admin/galeri");
      return NextResponse.json({ success: true, data, message: "Foto galeri berhasil ditambahkan ke Supabase!" });
    }

    const newItem: GaleriItem = {
      id: "g-" + Date.now(),
      ...payload,
      created_at: new Date().toISOString(),
    };
    addInMemoryGaleri(newItem);
    revalidatePath("/galeri");
    revalidatePath("/admin/galeri");
    return NextResponse.json({ success: true, data: newItem, message: "Foto galeri berhasil ditambahkan!" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Gagal menambahkan galeri.", error: String(err) },
      { status: 500 }
    );
  }
}
