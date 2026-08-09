"use client";

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

  const content = (
    <Card
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden transition-all duration-300",
        "border border-border/80 bg-card/90 backdrop-blur-xs",
        "hover:-translate-y-1.5 hover:shadow-md md:hover:shadow-lg",
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
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
                colorScheme.iconBg
              )}
            >
              <IconComponent className="h-6 w-6" />
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
            {service.title}
          </h3>
        </CardHeader>

        <CardContent className="pb-4">
          <p className="ds-body text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {service.description}
          </p>
        </CardContent>
      </div>

      {/* Card Footer CTA */}
      <div className="border-t border-border/50 bg-muted/20 px-6 py-3.5 transition-colors group-hover:bg-muted/40">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 transition-colors",
              isExternal ? "text-amber-700 dark:text-amber-400 group-hover:text-amber-600" : "text-primary group-hover:text-primary/90"
            )}
          >
            {isExternal ? "Buka Portal Resmi" : "Lihat Detail Layanan"}
          </span>

          <span
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-full bg-background/80 shadow-2xs transition-all duration-300",
              isExternal
                ? "text-amber-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-amber-500 group-hover:text-white"
                : "text-primary group-hover:translate-x-1 group-hover:bg-primary group-hover:text-primary-foreground"
            )}
          >
            {isExternal ? <ExternalLink className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
          </span>
        </div>
      </div>
    </Card>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="block h-full focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl"
    >
      {content}
    </Link>
  );
}
