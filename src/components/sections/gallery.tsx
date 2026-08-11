"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Eye } from "lucide-react";

import type { GaleriItem } from "@/lib/mock-store";
import { Container, Section, SectionTitle } from "@/components/common";
import { Button } from "@/components/ui/button";

export function GallerySection() {
  const [galeriList, setGaleriList] = useState<GaleriItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestGaleri() {
      try {
        const res = await fetch("/api/galeri?limit=5");
        const json = await res.json();
        if (json.success && json.data) {
          setGaleriList(json.data.slice(0, 5));
        }
      } catch {
        // Fallback
      } finally {
        setIsLoading(false);
      }
    }
    fetchLatestGaleri();
  }, []);

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
        <SectionTitle
          title="Galeri Aktivitas Warga"
          subtitle="Dokumentasi kegiatan pelayanan, kelembagaan, dan pemberdayaan masyarakat di Kelurahan Wonolopo."
        />

        {isLoading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="h-64 rounded-3xl bg-muted/40 p-4" />
            ))}
          </div>
        ) : galeriList.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galeriList.map((item) => (
              <Link
                key={item.id}
                href="/galeri"
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-border/80 bg-card/90 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="relative h-56 w-full overflow-hidden bg-muted">
                  <Image
                    src={item.image_url}
                    alt={item.title || "Dokumentasi Wonolopo"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <span className="absolute top-3.5 right-3.5 rounded-full bg-background/90 backdrop-blur-xs px-3 py-1 text-xs font-bold text-amber-700 dark:text-amber-300 border border-border/60 shadow-xs z-10">
                    {item.category}
                  </span>

                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center z-10">
                    <span className="inline-flex items-center gap-2 rounded-2xl bg-white/90 text-slate-900 px-4 py-2 text-xs font-bold shadow-md">
                      <Eye className="h-4 w-4" /> Lihat Galeri
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-1 bg-card">
                  <h3 className="font-heading text-sm font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                    {item.title || "Dokumentasi Kegiatan Kelurahan"}
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {formatIndonesianDate(item.event_date)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed p-8 text-center text-xs text-muted-foreground">
            Belum ada foto galeri terbaru yang diterbitkan.
          </div>
        )}

        <div className="flex justify-center pt-2">
          <Button
            size="lg"
            className="rounded-2xl gap-2 font-bold shadow-md px-6"
            render={<Link href="/galeri" />}
          >
            <span>Lihat Selengkapnya</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
