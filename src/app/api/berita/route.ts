import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";
import { getInMemoryBerita } from "@/lib/mock-store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const query = searchParams.get("q");
  
  const rawPage = parseInt(searchParams.get("page") || "1", 10);
  const rawLimit = parseInt(searchParams.get("limit") || "6", 10);

  const page = Math.max(1, isNaN(rawPage) ? 1 : rawPage);
  const limit = Math.max(1, isNaN(rawLimit) ? 6 : rawLimit);
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  try {
    let queryBuilder = supabase
      .from("berita")
      .select("*", { count: "exact" })
      .order("event_date", { ascending: false });

    if (category && category !== "Semua") {
      queryBuilder = queryBuilder.eq("category", category);
    }

    if (query) {
      queryBuilder = queryBuilder.ilike("title", `%${query}%`);
    }

    queryBuilder = queryBuilder.range(from, to);

    const { data, count, error } = await queryBuilder;

    if (error) {
      console.error("Supabase GET /api/berita Error:", error.message || error);
    } else if (data && data.length > 0) {
      const total = count ?? data.length;
      const totalPages = Math.ceil(total / limit) || 1;

      return NextResponse.json({
        success: true,
        data,
        page,
        limit,
        total,
        totalPages,
      });
    }
  } catch (err) {
    console.error("GET /api/berita Exception:", err);
  }

  // Failsafe Fallback to Memory Store
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

  const total = list.length;
  const paginatedList = list.slice(from, from + limit);
  const totalPages = Math.ceil(total / limit) || 1;

  return NextResponse.json({
    success: true,
    data: paginatedList,
    page,
    limit,
    total,
    totalPages,
  });
}
