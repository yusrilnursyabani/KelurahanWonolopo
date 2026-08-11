import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";
import { deleteInMemoryGaleri, getInMemoryGaleri } from "@/lib/mock-store";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    try {
      await supabase.from("galeri").delete().eq("id", id);
    } catch {
      // Ignore Supabase error if offline
    }

    deleteInMemoryGaleri(id);
    return NextResponse.json({ success: true, message: "Foto galeri berhasil dihapus!" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Gagal menghapus foto galeri.", error: String(err) },
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
      await supabase.from("galeri").update(body).eq("id", id);
    } catch {
      // Ignore Supabase error if offline
    }

    const memoryList = getInMemoryGaleri();
    const item = memoryList.find((i) => i.id === id);
    if (item) {
      Object.assign(item, body);
    }

    return NextResponse.json({ success: true, message: "Foto galeri berhasil diperbarui!" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Gagal memperbarui foto galeri.", error: String(err) },
      { status: 500 }
    );
  }
}
