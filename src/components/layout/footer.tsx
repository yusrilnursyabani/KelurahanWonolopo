import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { SITE_CONFIG } from "@/constants";
import { mainNavigation } from "@/data";
import { Container } from "@/components/common";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.89 2.892 2.896 2.896 0 0 1-2.892-2.892 2.896 2.896 0 0 1 2.892-2.89 2.84 2.84 0 0 1 1.144.242V9.52a6.3 6.3 0 0 0-1.144-.106 6.335 6.335 0 0 0-6.333 6.333 6.335 6.335 0 0 0 6.333 6.333 6.335 6.335 0 0 0 6.333-6.333V9.066a8.21 8.21 0 0 0 4.772 1.517V7.138a4.83 4.83 0 0 1-1.000-.452z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/80 bg-card/95 text-card-foreground">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Section 1: Branding & Contact Info with Official Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={SITE_CONFIG.logo.shield}
                alt="Logo Kelurahan Wonolopo"
                width={48}
                height={48}
                className="h-12 w-auto object-contain shrink-0"
              />
              <div className="space-y-0.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">
                  Pemerintah Kota Semarang
                </span>
                <h2 className="font-heading text-xl font-bold tracking-tight text-foreground">
                  {SITE_CONFIG.name}
                </h2>
              </div>
            </div>

            <p className="ds-body max-w-sm text-sm text-muted-foreground leading-relaxed">
              Portal resmi pelayanan publik, informasi kependudukan, dan komunikasi warga Kelurahan Wonolopo, {SITE_CONFIG.city}.
            </p>

            <div className="space-y-2 pt-2 text-sm">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
              <a
                href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>Layanan Aduan: {SITE_CONFIG.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Section 2: Tautan Navigasi Cepat */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-bold text-foreground">Navigasi Utama</h3>
            <nav aria-label="Tautan cepat" className="grid gap-2 text-sm">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/layanan/artikel-ilmiah"
                className="text-muted-foreground transition-colors hover:text-primary font-medium"
              >
                Artikel Ilmiah & Jurnal
              </Link>
            </nav>
          </div>

          {/* Section 3: Media Sosial Resmi */}
          <div className="space-y-4">
            <h3 className="font-heading text-base font-bold text-foreground">Kanal Resmi Kelurahan</h3>
            <p className="text-sm text-muted-foreground">
              Ikuti kabar terbaru, dokumentasi kegiatan, dan pengumuman resmi melalui media sosial kami.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Kelurahan Wonolopo"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/80 bg-background/80 text-muted-foreground transition-all hover:-translate-y-1 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-600 dark:hover:text-pink-400"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>

              <a
                href={SITE_CONFIG.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Kelurahan Wonolopo"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/80 bg-background/80 text-muted-foreground transition-all hover:-translate-y-1 hover:border-slate-700/50 hover:bg-slate-500/10 hover:text-foreground"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>

              <a
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Kelurahan Wonolopo"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/80 bg-background/80 text-muted-foreground transition-all hover:-translate-y-1 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400"
              >
                <YouTubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright with Official Logo Badge */}
        <div className="mt-12 border-t border-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>{SITE_CONFIG.copyright}</p>
          <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
            <Image
              src={SITE_CONFIG.logo.shield}
              alt="Wonolopo Logo"
              width={16}
              height={16}
              className="h-4 w-auto object-contain"
            />
            <span>Pemerintah Kelurahan Wonolopo, Semarang</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
