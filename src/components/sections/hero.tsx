import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { SITE_CONFIG } from "@/constants"

import { Container, Section } from "@/components/common"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <Section className="overflow-hidden bg-[linear-gradient(155deg,oklch(0.99_0.002_247)_0%,oklch(0.96_0.01_258)_55%,oklch(0.93_0.024_24)_100%)]">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6 motion-slide-up">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Portal Resmi Pemerintah Kelurahan
          </span>
          <h1 className="font-heading text-4xl leading-tight font-semibold text-foreground md:text-5xl">
            Pelayanan Publik untuk Warga {SITE_CONFIG.shortName}
          </h1>
          <p className="ds-body max-w-2xl text-base md:text-lg">
            Akses informasi profil wilayah, layanan administratif, berita kegiatan, dan kanal pengaduan masyarakat dalam satu portal terintegrasi.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" render={<Link href="/layanan" />}>
              Lihat Layanan
              <ArrowRightIcon className="icon-sm" />
            </Button>
            <Button variant="outline" size="lg" render={<Link href="/profil" />}>
              Profil Wilayah
            </Button>
          </div>
        </div>

        <div className="ds-surface ds-elevated relative min-h-72 overflow-hidden p-6">
          <div className="absolute -right-24 -top-20 h-60 w-60 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Informasi Cepat</p>
            <h2 className="font-heading text-2xl font-semibold">Layanan Prioritas Warga</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Surat Keterangan Domisili</li>
              <li>Mekanisme Pengaduan Masyarakat</li>
              <li>Informasi Layanan PBB</li>
              <li>Program Pencegahan Stunting</li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
