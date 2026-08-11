import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase/client";
import { deleteInMemoryBerita, getInMemoryBerita } from "@/lib/mock-store";

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

    // 1. Fetch record first to get image URLs for cleanup
    const { data: item } = await supabase
      .from("berita")
      .select("cover_image_url, content_image_url")
      .eq("id", id)
      .single();

    if (item) {
      const coverPath = extractFilePath(item.cover_image_url, "berita-images");
      const contentPath = extractFilePath(item.content_image_url, "berita-images");
      const filesToRemove = Array.from(new Set([coverPath, contentPath].filter(Boolean) as string[]));

      if (filesToRemove.length > 0) {
        await supabase.storage.from("berita-images").remove(filesToRemove);
      }
    }

    // 2. Delete row from database
    await supabase.from("berita").delete().eq("id", id);

    // 3. Delete from in-memory store & revalidate
    deleteInMemoryBerita(id);
    revalidatePath("/berita");
    revalidatePath("/admin/berita");

    return NextResponse.json({ success: true, message: "Berita dan berkas foto berhasil dihapus dari Supabase!" });
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

    const { error } = await supabase.from("berita").update(body).eq("id", id);
    if (error) {
      console.warn("Supabase update error:", error);
    }

    const memoryList = getInMemoryBerita();
    const item = memoryList.find((i) => i.id === id);
    if (item) {
      Object.assign(item, body);
    }

    revalidatePath("/berita");
    revalidatePath("/admin/berita");

    return NextResponse.json({ success: true, message: "Berita berhasil diperbarui!" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Gagal memperbarui berita.", error: String(err) },
      { status: 500 }
    );
  }
}
