import Link from "next/link"

import { Container, Section, SectionTitle } from "@/components/common"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <Section>
      <Container>
        <div className="ds-surface ds-elevated rounded-3xl bg-[linear-gradient(125deg,oklch(0.54_0.2_24)_0%,oklch(0.61_0.16_30)_60%,oklch(0.42_0.08_24)_100%)] p-8 text-primary-foreground md:p-12">
          <SectionTitle
            title="Butuh Bantuan atau Ingin Menyampaikan Pengaduan?"
            subtitle="Tim Kelurahan Wonolopo siap menindaklanjuti laporan warga melalui kanal resmi layanan pengaduan."
            className="mb-6 max-w-3xl"
          />
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
              render={<Link href="/layanan/pengaduan" />}
            >
              Sampaikan Pengaduan
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10"
              render={<Link href="/layanan" />}
            >
              Lihat Semua Layanan
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
