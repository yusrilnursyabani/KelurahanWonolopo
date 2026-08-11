import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";
import { addInMemoryGaleri, getInMemoryGaleri, type GaleriItem } from "@/lib/mock-store";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("galeri")
      .select("*")
      .order("event_date", { ascending: false });

    if (!error && data && data.length > 0) {
      return NextResponse.json({ success: true, data });
    }
  } catch {
    // Fallback to memory
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

    const newItem: GaleriItem = {
      id: "g-" + Date.now(),
      title: title || "Dokumentasi Kegiatan Wonolopo",
      image_url,
      category: category || "Kegiatan Kelurahan",
      event_date: event_date || new Date().toISOString().split("T")[0],
      created_at: new Date().toISOString(),
    };

    try {
      const { data, error } = await supabase
        .from("galeri")
        .insert([newItem])
        .select()
        .single();

      if (!error && data) {
        addInMemoryGaleri(data);
        return NextResponse.json({ success: true, data, message: "Foto galeri berhasil ditambahkan!" });
      }
    } catch {
      // Supabase insert fallback
    }

    addInMemoryGaleri(newItem);
    return NextResponse.json({ success: true, data: newItem, message: "Foto galeri berhasil ditambahkan!" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Gagal menambahkan galeri.", error: String(err) },
      { status: 500 }
    );
  }
}
