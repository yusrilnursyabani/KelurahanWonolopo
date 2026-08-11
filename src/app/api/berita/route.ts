import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";
import { getInMemoryBerita } from "@/lib/mock-store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const query = searchParams.get("q");

  try {
    let queryBuilder = supabase.from("berita").select("*").order("event_date", { ascending: false });

    if (category && category !== "Semua") {
      queryBuilder = queryBuilder.eq("category", category);
    }

    if (query) {
      queryBuilder = queryBuilder.ilike("title", `%${query}%`);
    }

    const { data, error } = await queryBuilder;

    if (!error && data && data.length > 0) {
      return NextResponse.json({ success: true, data });
    }
  } catch {
    // Fallback to memory
  }

  let list = getInMemoryBerita();
  if (category && category !== "Semua") {
    list = list.filter((item) => item.category.toLowerCase() === category.toLowerCase());
  }
  if (query) {
    list = list.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.content.toLowerCase().includes(query.toLowerCase())
    );
  }

  return NextResponse.json({ success: true, data: list });
}
