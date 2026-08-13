"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  FileQuestion,
  Newspaper,
  RefreshCw,
  Search,
  Sparkles,
} from "lucide-react";

import type { BeritaItem } from "@/lib/mock-store";
import { Container, Section } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function PublicBeritaListPage() {
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination state
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 6;

  const categories = ["Semua", "UMKM", "Kebersihan", "Pemberdayaan", "Kesehatan", "Giat Kelurahan"];

  const loadBerita = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const url = `/api/berita?category=${encodeURIComponent(
        selectedCategory
      )}&q=${encodeURIComponent(searchQuery)}&page=${page}&limit=${limit}`;

      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setBeritaList(json.data);
        setTotalPages(json.totalPages || 1);
        setTotalCount(json.total || 0);
      } else {
        setHasError(true);
      }
    } catch (err) {
      console.error("Failed to load berita:", err);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBerita();
  }, [selectedCategory, searchQuery, page]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setPage(1);
  };

  return (
    <Section>
      <Container className="space-y-8">
        {/* Header Banner */}
        <header className="space-y-3 rounded-3xl border border-border/80 bg-gradient-to-br from-primary/10 via-background to-amber-500/10 p-6 md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <Newspaper className="h-3.5 w-3.5" />
            <span>Warta & Kabar Wonolopo</span>
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Berita & Informasi Kegiatan Kelurahan
          </h1>
          <p className="ds-body max-w-2xl text-sm md:text-base leading-relaxed text-muted-foreground">
            Temukan sajian informasi terbaru, dokumentasi kegiatan kemasyarakatan, inovasi UMKM, serta pengumuman resmi warga Kelurahan Wonolopo.
          </p>
        </header>

        {/* Search & Category Filter Pills */}
        <div className="space-y-4 rounded-3xl border border-border/80 bg-card/60 p-4 backdrop-blur-xs md:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Cari kata kunci berita kegiatan..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 rounded-2xl h-11 bg-background/80 text-sm focus-visible:ring-primary"
              />
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span>Total <strong>{totalCount}</strong> Artikel Ditemukan</span>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
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
        </div>

        {/* Content Section: Loading Skeleton / Error Boundary / Empty State / Grid */}
        {isLoading ? (
          /* Skeleton Loader Grid */
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-pulse">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="h-96 rounded-3xl border border-border/60 bg-muted/40 p-4 space-y-4"
              >
                <div className="h-48 w-full rounded-2xl bg-muted/80" />
                <div className="h-4 w-1/3 rounded-lg bg-muted/80" />
                <div className="h-6 w-3/4 rounded-lg bg-muted/80" />
                <div className="h-12 w-full rounded-lg bg-muted/60" />
              </div>
            ))}
          </div>
        ) : hasError ? (
          /* Error Fallback UI */
          <div className="rounded-3xl border border-destructive/30 bg-destructive/5 p-12 text-center space-y-4">
            <h3 className="font-heading text-lg font-bold text-destructive">Gagal Memuat Data Berita</h3>
            <p className="text-xs text-muted-foreground max-w-md mx-auto">
              Terjadi kendala jaringan saat menghubungkan ke server. Silakan muat ulang halaman.
            </p>
            <Button onClick={loadBerita} variant="outline" className="rounded-2xl gap-2 font-bold">
              <RefreshCw className="h-4 w-4" /> Coba Lagi
            </Button>
          </div>
        ) : beritaList.length > 0 ? (
          /* Berita Card Grid with Next.js Image */
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beritaList.map((item) => (
              <Link
                key={item.id}
                href={`/berita/${item.slug}`}
                className="group block h-full focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-3xl"
              >
                <Card className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
                  <div>
                    {/* Cover Photo via Next.js Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <Image
                        src={item.cover_image_url || "/Asset/Image/Berita1.png"}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute top-3.5 right-3.5 rounded-full bg-background/90 backdrop-blur-xs px-3 py-1 text-xs font-bold text-primary border border-border/60 shadow-xs z-10">
                        {item.category}
                      </span>
                    </div>

                    <CardHeader className="space-y-2.5 pb-2">
                      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        <span>
                          {new Date(item.event_date).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary line-clamp-2">
                        {item.title}
                      </h3>
                    </CardHeader>

                    <CardContent className="pb-4">
                      <p className="ds-body text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                        {item.content}
                      </p>
                    </CardContent>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="border-t border-border/50 bg-muted/20 px-6 py-3.5 transition-colors group-hover:bg-muted/40 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State UI */
          <div className="rounded-3xl border border-dashed border-border p-12 text-center space-y-3">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-muted text-muted-foreground">
              <FileQuestion className="h-7 w-7" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              Belum ada berita/artikel yang diterbitkan
            </h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto">
              Tidak ada artikel berita yang cocok dengan kategori &ldquo;{selectedCategory}&rdquo; atau kata kunci pencarian Anda.
            </p>
          </div>
        )}

        {/* Pagination Controls */}
        {!isLoading && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6">
            <Button
              variant="outline"
              size="sm"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-xl h-9 text-xs font-semibold gap-1"
            >
              <ChevronLeft className="h-4 w-4" /> Sebelum
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                const isActive = pageNum === page;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`h-9 w-9 rounded-xl text-xs font-bold transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs"
                        : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="rounded-xl h-9 text-xs font-semibold gap-1"
            >
              Sesudah <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
