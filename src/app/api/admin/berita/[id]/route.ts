import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";
import { deleteInMemoryBerita, getInMemoryBerita } from "@/lib/mock-store";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    try {
      await supabase.from("berita").delete().eq("id", id);
    } catch {
      // Ignore Supabase error if offline
    }

    deleteInMemoryBerita(id);
    return NextResponse.json({ success: true, message: "Berita berhasil dihapus!" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Gagal menghapus berita.", error: String(err) },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    try {
      await supabase.from("berita").update(body).eq("id", id);
    } catch {
      // Ignore Supabase error if offline
    }

    const memoryList = getInMemoryBerita();
    const item = memoryList.find((i) => i.id === id);
    if (item) {
      Object.assign(item, body);
    }

    return NextResponse.json({ success: true, message: "Berita berhasil diperbarui!" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Gagal memperbarui berita.", error: String(err) },
      { status: 500 }
    );
  }
}
