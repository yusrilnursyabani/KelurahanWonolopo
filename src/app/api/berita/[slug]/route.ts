import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";
import { getInMemoryBerita, getInMemoryComments } from "@/lib/mock-store";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const { data: beritaData, error: beritaError } = await supabase
      .from("berita")
      .select("*")
      .eq("slug", slug)
      .single();

    if (!beritaError && beritaData) {
      const { data: commentsData } = await supabase
        .from("comments")
        .select("*")
        .eq("berita_id", beritaData.id)
        .order("created_at", { ascending: false });

      return NextResponse.json({
        success: true,
        data: beritaData,
        comments: commentsData || [],
      });
    }
  } catch {
    // Fallback to memory
  }

  const memoryList = getInMemoryBerita();
  const berita = memoryList.find((b) => b.slug === slug);

  if (!berita) {
    return NextResponse.json(
      { success: false, message: "Berita tidak ditemukan." },
      { status: 404 }
    );
  }

  const comments = getInMemoryComments().filter((c) => c.berita_id === berita.id);

  return NextResponse.json({
    success: true,
    data: berita,
    comments,
  });
}
