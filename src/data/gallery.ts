import type { GalleryItem } from "@/types/content";

export const activityGallery: GalleryItem[] = [];

export const galleryCategories = [
  "Semua",
  "Kelembagaan",
  "Layanan Umum",
  "Kesehatan",
  "Lingkungan",
  "Ekonomi",
  "Perencanaan",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];
