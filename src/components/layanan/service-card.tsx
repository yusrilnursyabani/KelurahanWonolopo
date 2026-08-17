"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Baby,
  BookOpen,
  Briefcase,
  Building,
  Building2,
  Calculator,
  Contact,
  CreditCard,
  ExternalLink,
  FileCheck2,
  FileText,
  Globe,
  HardHat,
  HeartPulse,
  Home,
  Hospital,
  IdCard,
  Info,
  LayoutDashboard,
  Megaphone,
  MessageSquareWarning,
  Receipt,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Store,
  Users,
} from "lucide-react";

import type { ServiceItem } from "@/types/content";
import { serviceCategories } from "@/data/services";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Users,
  Baby,
  Receipt,
  CreditCard,
  FileCheck2,
  Calculator,
  Building,
  HardHat,
  Briefcase,
  Hospital,
  HeartPulse,
  Store,
  Megaphone,
  Info,
  Scale,
  ShieldAlert,
  Globe,
  LayoutDashboard,
  FileText,
  IdCard,
  Contact,
  Building2,
  ShieldCheck,
  Stethoscope,
  Activity,
  MessageSquareWarning,
  BookOpen,
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  const categoryInfo = serviceCategories.find((cat) => cat.id === service.category);
  const IconComponent = (service.iconName && iconMap[service.iconName]) || FileText;

  const colorScheme = categoryInfo?.colorScheme || {
    badge: "bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-800 dark:text-slate-200",
    iconBg: "bg-slate-500/10 text-slate-600 dark:text-slate-300",
    border: "hover:border-primary/50",
    accentBg: "bg-slate-50/50 dark:bg-slate-900/30",
  };

  const isExternal = service.isExternal;
  const href = isExternal ? service.url || "#" : `/layanan/${service.slug}`;

  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden transition-all duration-300",
        "border border-border/80 bg-card/90 backdrop-blur-xs",
        "hover:-translate-y-1 hover:shadow-md md:hover:shadow-lg",
        colorScheme.border,
        isExternal && "border-dashed sm:border-solid hover:bg-slate-50/60 dark:hover:bg-slate-900/40",
        className
      )}
    >
      {/* Visual Accent Top Bar */}
      <div
        className={cn(
          "h-1.5 w-full transition-opacity duration-300 group-hover:opacity-100",
          isExternal ? "bg-gradient-to-r from-amber-400 via-rose-400 to-indigo-500 opacity-60" : "bg-primary opacity-40"
        )}
      />

      <div>
        <CardHeader className="space-y-3 pb-3">
          <div className="flex items-start justify-between gap-3">
            {/* Soft Pastel Icon Container */}
            <div
              className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 overflow-hidden",
                colorScheme.iconBg
              )}
            >
              {service.imageIcon ? (
                <Image
                  src={service.imageIcon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="h-9 w-9 object-contain"
                />
              ) : (
                <IconComponent className="h-6 w-6" />
              )}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-end gap-1.5">
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase shadow-2xs transition-colors",
                  colorScheme.badge
                )}
              >
                {categoryInfo?.shortTitle}
              </span>

              {isExternal ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/80 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-800 dark:border-amber-700/50 dark:bg-amber-950/60 dark:text-amber-300">
                  <ExternalLink className="h-3 w-3" />
                  {service.badgeText || "Eksternal"}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/80 bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-800 dark:border-emerald-700/50 dark:bg-emerald-950/60 dark:text-emerald-300">
                  {service.badgeText || "Kelurahan"}
                </span>
              )}
            </div>
          </div>

          <h3 className="font-heading text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-xl">
            {isExternal ? (
              <a
                href={service.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline focus-visible:outline-hidden"
              >
                {service.title}
              </a>
            ) : (
              <Link href={`/layanan/${service.slug}`} className="hover:underline focus-visible:outline-hidden">
                {service.title}
              </Link>
            )}
          </h3>
        </CardHeader>

        <CardContent className="pb-4">
          <p className="ds-body text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {service.description}
          </p>
        </CardContent>
      </div>

      {/* Card Footer CTAs */}
      <div className="border-t border-border/50 bg-muted/20 px-5 py-3.5 transition-colors group-hover:bg-muted/40">
        {isExternal ? (
          <a
            href={service.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-xs font-semibold text-amber-700 hover:text-amber-600 dark:text-amber-400"
          >
            <span className="inline-flex items-center gap-1.5">Buka Portal Resmi</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-white shadow-2xs transition-transform group-hover:scale-105">
              <ExternalLink className="h-3.5 w-3.5" />
            </span>
          </a>
        ) : (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href={`/layanan/${service.slug}`}
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border/80 bg-background/90 px-3.5 py-2 text-xs font-semibold text-foreground shadow-2xs transition-all hover:bg-muted hover:text-primary hover:border-primary/40 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span>Lihat Detail Persyaratan</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            {service.onlineUrl && (
              <a
                href={service.onlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span>Ajukan Online via Apel Surga</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}
