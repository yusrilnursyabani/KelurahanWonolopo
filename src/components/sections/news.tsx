import Link from "next/link";

import { latestNews } from "@/data";

import { Container, NewsCard, Section, SectionTitle } from "@/components/common";
import { Button } from "@/components/ui/button";

export function NewsSection() {
  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle
          title="Berita dan Kegiatan Terbaru"
          subtitle="Informasi terbaru kegiatan warga, program kelurahan, dan agenda pelayanan publik."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {latestNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-start">
          <Button variant="outline" size="lg" render={<Link href="/berita" />}>
            Lihat Semua Berita
          </Button>
        </div>
      </Container>
    </Section>
  );
}
