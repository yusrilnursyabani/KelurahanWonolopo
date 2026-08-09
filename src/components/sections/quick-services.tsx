import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { serviceCatalog } from "@/data";

import { Container, FeatureCard, Section, SectionTitle } from "@/components/common";
import { Button } from "@/components/ui/button";

export function QuickServicesSection() {
  // Select top 6 high-demand internal & external services
  const highlightedServices = [
    serviceCatalog.find((s) => s.id === "srv-domisili"),
    serviceCatalog.find((s) => s.id === "srv-epbb"),
    serviceCatalog.find((s) => s.id === "srv-puskesmas"),
    serviceCatalog.find((s) => s.id === "srv-disdukcapil"),
    serviceCatalog.find((s) => s.id === "srv-pengaduan"),
    serviceCatalog.find((s) => s.id === "srv-portalsemarang"),
  ].filter(Boolean) as typeof serviceCatalog;

  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle
          title="Layanan Cepat Warga & Portal Kota"
          subtitle="Akses langsung ke layanan kependudukan kelurahan, pembayaran PBB, kesehatan, serta portal resmi Kota Semarang."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {highlightedServices.map((service) => (
            <FeatureCard key={service.id} item={service} />
          ))}
        </div>

        <div className="flex justify-start pt-2">
          <Button variant="outline" size="lg" className="rounded-2xl gap-2 shadow-2xs hover:bg-muted" render={<Link href="/layanan" />}>
            <span>Lihat Seluruh 19 Layanan</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
