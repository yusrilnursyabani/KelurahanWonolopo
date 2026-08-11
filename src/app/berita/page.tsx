"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Newspaper, Search, Sparkles } from "lucide-react";

import type { BeritaItem } from "@/lib/mock-store";
import { Container, Section } from "@/components/common";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function PublicBeritaListPage() {
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Semua", "UMKM", "Kebersihan", "Pemberdayaan", "Kesehatan", "Giat Kelurahan"];

  useEffect(() => {
    async function loadBerita() {
      setIsLoading(true);
      try {
        const res = await fetch("/api/berita");
        const json = await res.json();
        if (json.success && json.data) {
          setBeritaList(json.data);
        }
      } catch {
        // Fallback handled by API
      } finally {
        setIsLoading(false);
      }
    }
    loadBerita();
  }, []);

  const filteredBerita = beritaList.filter((item) => {
    const matchesCategory =
      selectedCategory === "Semua" || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Section>
      <Container className="space-y-8">
        {/* Header */}
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
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-2xl h-11 bg-background/80 text-sm focus-visible:ring-primary"
              />
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span>Menampilkan <strong>{filteredBerita.length}</strong> Artikel Berita</span>
            </div>
          </div>

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
        </div>

        {/* Berita Card Grid */}
        {isLoading ? (
          <div className="p-12 text-center text-muted-foreground">Memuat warta berita...</div>
        ) : filteredBerita.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredBerita.map((item) => (
              <Link
                key={item.id}
                href={`/berita/${item.slug}`}
                className="group block h-full focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-3xl"
              >
                <Card className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
                  <div>
                    {/* Cover Photo */}
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <img
                        src={item.cover_image_url || "/Asset/Image/Berita1.png"}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute top-3.5 right-3.5 rounded-full bg-background/90 backdrop-blur-xs px-3 py-1 text-xs font-bold text-primary border border-border/60 shadow-xs">
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
          <div className="rounded-3xl border border-dashed p-12 text-center text-muted-foreground">
            Tidak ada berita yang sesuai dengan kategori atau pencarian.
          </div>
        )}
      </Container>
    </Section>
  );
}
