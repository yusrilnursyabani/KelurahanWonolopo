import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase/client";
import { getInMemoryGaleri } from "@/lib/mock-store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const sort = searchParams.get("sort") || "latest"; // 'latest' | 'oldest'
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const limitParam = parseInt(searchParams.get("limit") || "6", 10);

  const page = Math.max(1, isNaN(pageParam) ? 1 : pageParam);
  const limit = Math.max(1, isNaN(limitParam) ? 6 : limitParam);
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  try {
    let queryBuilder = supabase
      .from("galeri")
      .select("*", { count: "exact" })
      .order("event_date", { ascending: sort === "oldest" });

    if (category && category !== "Semua") {
      queryBuilder = queryBuilder.eq("category", category);
    }

    queryBuilder = queryBuilder.range(from, to);

    const { data, count, error } = await queryBuilder;

    if (!error && data) {
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
