import Link from "next/link";

import { activityGallery } from "@/data";

import { Container, GalleryCard, Section, SectionTitle } from "@/components/common";
import { Button } from "@/components/ui/button";

export function GallerySection() {
  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle
          title="Galeri Aktivitas Warga"
          subtitle="Dokumentasi kegiatan pelayanan, kelembagaan, dan pemberdayaan masyarakat di Kelurahan Wonolopo."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {activityGallery.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

        <div className="flex justify-start">
          <Button variant="outline" size="lg" render={<Link href="/galeri" />}>
            Lihat Galeri Lengkap
          </Button>
        </div>
      </Container>
    </Section>
  );
}
