import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container, Section, SectionTitle } from "@/components/common";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const quickLaunchServices = [
  {
    id: "kelahiran",
    title: "Akta Kelahiran",
    fullTitle: "Surat Keterangan Kelahiran / Akta Kelahiran",
    href: "/layanan/akta-kelahiran",
    iconSrc: "/assets/icons/Surat keterangan kelahiran.png",
    accent: "group-hover:border-blue-500/50 group-hover:bg-blue-50/50 dark:group-hover:bg-blue-950/30",
  },
  {
    id: "kematian",
    title: "Akta Kematian",
    fullTitle: "Surat Keterangan Kematian / Akta Kematian",
    href: "/layanan/akta-kematian",
    iconSrc: "/assets/icons/Surat keterangan kematian.png",
    accent: "group-hover:border-rose-500/50 group-hover:bg-rose-50/50 dark:group-hover:bg-rose-950/30",
  },
  {
    id: "nikah",
    title: "Pengantar Nikah",
    fullTitle: "Pengantar Nikah (Akta Perkawinan / Perceraian)",
    href: "/layanan/perkawinan-perceraian",
    iconSrc: "/assets/icons/Surat pengatar nikah.png",
    accent: "group-hover:border-emerald-500/50 group-hover:bg-emerald-50/50 dark:group-hover:bg-emerald-950/30",
  },
  {
    id: "kk",
    title: "Biodata KK",
    fullTitle: "Perubahan Biodata Kartu Keluarga (KK)",
    href: "/layanan/perubahan-biodata-kk",
    iconSrc: "/assets/icons/Surat perubahan biodata keluarga.png",
    accent: "group-hover:border-amber-500/50 group-hover:bg-amber-50/50 dark:group-hover:bg-amber-950/30",
  },
  {
    id: "domisili",
    title: "Surat Keterangan",
    fullTitle: "Surat Pengantar / Keterangan Umum (Domisili)",
    href: "/layanan/domisili",
    iconSrc: "/assets/icons/Surat pengatar keterangan umum.png",
    accent: "group-hover:border-indigo-500/50 group-hover:bg-indigo-50/50 dark:group-hover:bg-indigo-950/30",
  },
];

export function QuickServicesSection() {
  return (
    <Section className="py-12 md:py-16 bg-muted/20">
      <Container className="space-y-10">
        <SectionTitle
          title="Layanan Cepat Kependudukan"
          subtitle="Akses cepat pengurusan akta kelahiran, akta kematian, pengantar nikah, biodata KK, dan surat keterangan domisili."
        />

        {/* 5 Icon Launcher Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 justify-center items-center">
          {quickLaunchServices.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group flex flex-col items-center text-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-3xl p-1"
            >
              {/* Soft 3D Card Container with Optimized Padding */}
              <div
                className={cn(
                  "relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-3 sm:p-4 shadow-2xs transition-all duration-300",
                  "group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-primary/10",
                  service.accent
                )}
              >
                <Image
                  src={service.iconSrc}
                  alt={service.fullTitle}
                  width={96}
                  height={96}
                  className="h-20 w-20 sm:h-24 sm:w-24 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Label Text below Icon */}
              <span className="mt-3 text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 transition-colors duration-300 group-hover:text-primary leading-snug text-center max-w-[140px]">
                {service.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Section Footer CTA */}
        <div className="flex justify-center pt-2">
          <Button
            variant="outline"
            size="lg"
            className="rounded-2xl gap-2 shadow-2xs hover:bg-muted font-semibold group"
            render={<Link href="/layanan" />}
          >
            <span>Lihat Semua Layanan Kelurahan</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
