"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import type { BeritaItem } from "@/lib/mock-store";
import { Container, Section, SectionTitle } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function NewsSection() {
  const [beritaList, setBeritaList] = useState<BeritaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLatestNews() {
      try {
        const res = await fetch("/api/berita?limit=5");
        const json = await res.json();
        if (json.success && json.data) {
          setBeritaList(json.data.slice(0, 5));
        }
      } catch {
        // Fallback
      } finally {
        setIsLoading(false);
      }
    }
    fetchLatestNews();
  }, []);

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle
          title="Berita dan Kegiatan Terbaru"
          subtitle="Informasi terbaru kegiatan warga, program kelurahan, dan agenda pelayanan publik."
        />

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-pulse">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="h-80 rounded-3xl bg-muted/40 p-4 space-y-4" />
            ))}
          </div>
        ) : beritaList.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beritaList.map((item) => (
              <Link
                key={item.id}
                href={`/berita/${item.slug}`}
                className="group block h-full focus-visible:outline-hidden rounded-3xl"
              >
                <Card className="flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/90 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
                  <div>
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

                    <CardHeader className="space-y-2 pb-2">
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

                      <h3 className="font-heading text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary line-clamp-2">
                        {item.title}
                      </h3>
                    </CardHeader>

                    <CardContent className="pb-4">
                      <p className="ds-body text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {item.content}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed p-8 text-center text-xs text-muted-foreground">
            Belum ada berita kegiatan terbaru yang diterbitkan.
          </div>
        )}

        <div className="flex justify-center pt-2">
          <Button
            size="lg"
            className="rounded-2xl gap-2 font-bold shadow-md px-6"
            render={<Link href="/berita" />}
          >
            <span>Lihat Selengkapnya</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
