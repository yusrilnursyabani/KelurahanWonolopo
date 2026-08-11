import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase/client";
import { addInMemoryBerita, getInMemoryBerita, type BeritaItem } from "@/lib/mock-store";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("berita")
      .select("*")
      .order("event_date", { ascending: false });

    if (!error && data) {
      return NextResponse.json({ success: true, data });
    }
  } catch {
    // Fallback
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

    const payload = {
      title: title.trim(),
      slug,
      cover_image_url: cover_image_url || "/Asset/Image/Berita1.png",
      content_image_url: content_image_url || cover_image_url || "/Asset/Image/Berita1.png",
      content: content.trim(),
      category: category || "Giat Kelurahan",
      event_date: event_date || new Date().toISOString().split("T")[0],
    };

    const { data, error } = await supabase
      .from("berita")
      .insert([payload])
      .select()
      .single();

    if (!error && data) {
      addInMemoryBerita(data);
      revalidatePath("/berita");
      revalidatePath("/admin/berita");
      return NextResponse.json({ success: true, data, message: "Berita berhasil dipublikasikan ke Supabase!" });
    }

    // Fallback
    const newItem: BeritaItem = {
      id: "b-" + Date.now(),
      ...payload,
      created_at: new Date().toISOString(),
    };
    addInMemoryBerita(newItem);
    revalidatePath("/berita");
    revalidatePath("/admin/berita");
    return NextResponse.json({ success: true, data: newItem, message: "Berita berhasil ditambahkan!" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Gagal menambahkan berita.", error: String(err) },
      { status: 500 }
    );
  }
}
