"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownUp,
  Calendar,
  Download,
  Eye,
  Filter,
  Image as ImageIcon,
  Sparkles,
  X,
} from "lucide-react";

import type { GaleriItem } from "@/lib/mock-store";
import { Container, Section } from "@/components/common";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PublicGaleriPage() {
  const [galeriList, setGaleriList] = useState<GaleriItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [sortOrder, setSortOrder] = useState<"latest" | "oldest">("latest");

  // Lightbox Modal State
  const [activePhoto, setActivePhoto] = useState<GaleriItem | null>(null);

  const categories = [
    "Semua",
    "Kegiatan Kelurahan",
    "UMKM",
    "Kebersihan & Lingkungan",
    "Pemberdayaan",
    "Keagamaan",
  ];

  useEffect(() => {
    async function loadGaleri() {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/galeri?category=${selectedCategory}&sort=${sortOrder}`);
        const json = await res.json();
        if (json.success && json.data) {
          setGaleriList(json.data);
        }
      } catch {
        // Fallback
      } finally {
        setIsLoading(false);
      }
    }
    loadGaleri();
  }, [selectedCategory, sortOrder]);

  const formatIndonesianDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <Section>
      <Container className="space-y-8">
        {/* Header Banner */}
        <header className="space-y-3 rounded-3xl border border-border/80 bg-gradient-to-br from-amber-500/10 via-background to-primary/10 p-6 md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
            <ImageIcon className="h-3.5 w-3.5" />
            <span>Dokumentasi Visual Wonolopo</span>
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Galeri Foto Kegiatan & Pembangunan
          </h1>
          <p className="ds-body max-w-2xl text-sm md:text-base leading-relaxed text-muted-foreground">
            Kumpulan potret momen kegiatan kemasyarakatan, hasil pembangunan, geliat UMKM, serta keasrian alam Kelurahan Wonolopo.
          </p>
        </header>

        {/* Filter Bar (Category Pills & Event Date Sort) */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between rounded-3xl border border-border/80 bg-card/60 p-4 backdrop-blur-xs">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2 text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Event Date Sort Control */}
          <div className="flex items-center gap-3 shrink-0 self-end md:self-auto border-t md:border-t-0 border-border/60 pt-3 md:pt-0">
            <span className="text-xs font-medium text-muted-foreground inline-flex items-center gap-1.5">
              <ArrowDownUp className="h-3.5 w-3.5 text-primary" /> Urutkan Tanggal:
            </span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "latest" | "oldest")}
              className="h-9 rounded-2xl border border-border bg-background px-3 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="latest">Terbaru Pertama</option>
              <option value="oldest">Terlama Pertama</option>
            </select>
          </div>
        </div>

        {/* Bento / Masonry Grid Display */}
        {isLoading ? (
          <div className="p-12 text-center text-muted-foreground">Memuat galeri foto...</div>
        ) : galeriList.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galeriList.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border/80 bg-card/90 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                {/* Photo Image Preview */}
                <div className="relative h-64 w-full overflow-hidden bg-muted">
                  <img
                    src={item.image_url}
                    alt={item.title || "Dokumentasi Wonolopo"}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-3.5 right-3.5 rounded-full bg-background/90 backdrop-blur-xs px-3 py-1 text-xs font-bold text-amber-700 dark:text-amber-300 border border-border/60 shadow-xs">
                    {item.category}
                  </span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 rounded-2xl bg-white/90 text-slate-900 px-4 py-2 text-xs font-bold shadow-md">
                      <Eye className="h-4 w-4" /> Lihat Ukuran Penuh
                    </span>
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="p-4 space-y-1 bg-card">
                  <h3 className="font-heading text-base font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {item.title || "Dokumentasi Kegiatan Kelurahan"}
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    Tanggal Kegiatan: <strong>{formatIndonesianDate(item.event_date)}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed p-12 text-center text-muted-foreground">
            Tidak ada foto galeri pada kategori ini.
          </div>
        )}

        {/* Interactive Lightbox / Preview Modal */}
        {activePhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fade-in">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900 text-slate-100 shadow-2xl p-6 space-y-4">
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-rose-500 hover:text-white transition-colors"
                aria-label="Tutup Preview"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Full Resolution Image */}
              <div className="overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 flex justify-center">
                <img
                  src={activePhoto.image_url}
                  alt={activePhoto.title || "Foto Galeri"}
                  className="max-h-[65vh] w-auto object-contain rounded-2xl"
                />
              </div>

              {/* Modal Metadata & Action */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-0.5 text-xs font-bold">
                      {activePhoto.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-primary" />
                      {formatIndonesianDate(activePhoto.event_date)}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {activePhoto.title || "Dokumentasi Kegiatan Kelurahan Wonolopo"}
                  </h3>
                </div>

                <a
                  href={activePhoto.image_url}
                  download={`Galeri_Wonolopo_${activePhoto.id}.jpg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-md transition-all hover:bg-primary/90 shrink-0"
                >
                  <Download className="h-4 w-4" />
                  <span>Unduh Foto</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
