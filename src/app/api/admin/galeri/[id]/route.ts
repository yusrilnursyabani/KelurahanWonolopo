import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase/client";
import { deleteInMemoryGaleri, getInMemoryGaleri } from "@/lib/mock-store";

function extractFilePath(url: string | null | undefined, bucketName: string): string | null {
  if (!url) return null;
  const marker = `/storage/v1/object/public/${bucketName}/`;
  if (url.includes(marker)) {
    return url.split(marker)[1];
  }
  if (!url.startsWith("http://") && !url.startsWith("https://") && !url.startsWith("/")) {
    return url;
  }
  return null;
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 1. Fetch item to get image_url for physical storage file deletion
    const { data: item } = await supabase
      .from("galeri")
      .select("image_url")
      .eq("id", id)
      .single();

    if (item) {
      const filePath = extractFilePath(item.image_url, "galeri-images");
      if (filePath) {
        await supabase.storage.from("galeri-images").remove([filePath]);
      }
    }

    // 2. Delete row from database
    await supabase.from("galeri").delete().eq("id", id);

    // 3. Delete from in-memory store & revalidate UI
    deleteInMemoryGaleri(id);
    revalidatePath("/galeri");
    revalidatePath("/admin/galeri");

    return NextResponse.json({ success: true, message: "Foto galeri dan file storage berhasil dihapus!" });
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

    const { error } = await supabase.from("galeri").update(body).eq("id", id);
    if (error) {
      console.warn("Supabase update error:", error);
    }

    const memoryList = getInMemoryGaleri();
    const item = memoryList.find((i) => i.id === id);
    if (item) {
      Object.assign(item, body);
    }

    revalidatePath("/galeri");
    revalidatePath("/admin/galeri");

    return NextResponse.json({ success: true, message: "Foto galeri berhasil diperbarui!" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Gagal memperbarui foto galeri.", error: String(err) },
      { status: 500 }
    );
  }
}
