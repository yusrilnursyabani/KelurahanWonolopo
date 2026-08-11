import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";
import { addInMemoryBerita, getInMemoryBerita, type BeritaItem } from "@/lib/mock-store";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("berita")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data && data.length > 0) {
      return NextResponse.json({ success: true, data });
    }
  } catch {
    // Fallback to inMemoryBerita
  }

  return NextResponse.json({ success: true, data: getInMemoryBerita() });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, event_date, cover_image_url, content_image_url, content } = body;

    if (!title || !content) {
      return NextResponse.json(
        { success: false, message: "Judul dan isi berita tidak boleh kosong!" },
        { status: 400 }
      );
    }

    const slug =
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "") +
      "-" +
      Math.random().toString(36).substring(2, 6);

    const newItem: BeritaItem = {
      id: "b-" + Date.now(),
      title,
      slug,
      cover_image_url: cover_image_url || "/Asset/Image/Berita1.png",
      content_image_url: content_image_url || cover_image_url || "/Asset/Image/Berita1.png",
      content,
      category: category || "Giat Kelurahan",
      event_date: event_date || new Date().toISOString().split("T")[0],
      created_at: new Date().toISOString(),
    };

    try {
      const { data, error } = await supabase
        .from("berita")
        .insert([newItem])
        .select()
        .single();

      if (!error && data) {
        addInMemoryBerita(data);
        return NextResponse.json({ success: true, data, message: "Berita berhasil ditambahkan!" });
      }
    } catch {
      // Supabase insert fallback
    }

    addInMemoryBerita(newItem);
    return NextResponse.json({ success: true, data: newItem, message: "Berita berhasil ditambahkan!" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Gagal menambahkan berita.", error: String(err) },
      { status: 500 }
    );
  }
}
