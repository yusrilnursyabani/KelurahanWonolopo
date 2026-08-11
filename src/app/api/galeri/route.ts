import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";
import { getInMemoryGaleri } from "@/lib/mock-store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const sort = searchParams.get("sort") || "latest"; // 'latest' | 'oldest'

  try {
    let queryBuilder = supabase
      .from("galeri")
      .select("*")
      .order("event_date", { ascending: sort === "oldest" });

    if (category && category !== "Semua") {
      queryBuilder = queryBuilder.eq("category", category);
    }

    const { data, error } = await queryBuilder;

    if (!error && data && data.length > 0) {
      return NextResponse.json({ success: true, data });
    }
  } catch {
    // Fallback to memory
  }

  let list = [...getInMemoryGaleri()];

  if (category && category !== "Semua") {
    list = list.filter((item) => item.category.toLowerCase() === category.toLowerCase());
  }

  list.sort((a, b) => {
    const timeA = new Date(a.event_date).getTime();
    const timeB = new Date(b.event_date).getTime();
    return sort === "oldest" ? timeA - timeB : timeB - timeA;
  });

  return NextResponse.json({ success: true, data: list });
}
