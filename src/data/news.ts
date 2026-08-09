import type { NewsItem, NewsDetail } from "@/types/content";

export const latestNews: NewsItem[] = [];

// ─── Detail Articles ──────────────────────────────────────────────────────────

export const newsDetails: NewsDetail[] = [];

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function getNewsDetailBySlug(slug: string): NewsDetail | undefined {
  return newsDetails.find((item) => item.slug === slug);
}
