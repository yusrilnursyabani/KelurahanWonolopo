"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertCircleIcon,
  ArrowLeftIcon,
  CheckCircle2Icon,
  Clock3Icon,
  DownloadIcon,
  ExternalLinkIcon,
  FileCheck2Icon,
  FileTextIcon,
  LandmarkIcon,
  MapPinIcon,
  ShieldCheckIcon,
} from "lucide-react";

import { getServiceDetailBySlug, serviceCatalog, serviceCategories } from "@/data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ScientificArticlesView = dynamic(
  () => import("./scientific-articles-view").then((mod) => mod.ScientificArticlesView),
  {
    loading: () => (
      <div className="rounded-3xl border border-border/80 bg-card p-12 text-center text-sm font-medium text-muted-foreground animate-pulse">
        Memuat viewer artikel ilmiah...
      </div>
    ),
  }
);

interface ServiceDetailContentProps {
  slug: string;
}

export function ServiceDetailContent({ slug }: ServiceDetailContentProps) {
  const service = serviceCatalog.find((item) => item.slug === slug);
  const detail = getServiceDetailBySlug(slug);

  if (!service || !detail) {
    notFound();
  }

  const categoryInfo = serviceCategories.find((cat) => cat.id === service.category);
  const onlineUrl = detail.onlineUrl || service.onlineUrl;
  const requirementSections = detail.requirementSections || [];
  const [activeTabId, setActiveTabId] = useState<string>(
    requirementSections.length > 0 ? requirementSections[0].id : ""
  );

  if (slug === "artikel-ilmiah") {
    return (
      <section className="space-y-6">
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground"
            render={<Link href="/layanan" />}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Kembali ke Katalog Layanan
          </Button>
        </div>

        <ScientificArticlesView />
      </section>
    );
  }

  return (
    <section className="space-y-6">
      {/* Top Back Navigation Button */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground"
          render={<Link href="/layanan" />}
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Kembali ke Katalog Layanan
        </Button>
      </div>

      {/* Main Header Bento Card */}
      <article className="ds-surface space-y-5 p-6 md:p-8 rounded-3xl shadow-xs border border-border/80 relative overflow-hidden">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            {categoryInfo?.title || "Layanan Warga"}
          </span>
          <span className="rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 px-2.5 py-0.5 text-xs font-semibold">
            {service.badgeText || "Kelurahan Wonolopo"}
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            {service.title}
          </h1>
          <p className="ds-body text-sm md:text-base leading-relaxed">{detail.summary}</p>
        </div>

        {/* Online Filing Banner Accent (if online link exists) */}
        {onlineUrl && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-4 md:p-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5 text-primary shrink-0" />
                <h4 className="text-sm font-bold text-foreground">Pengurusan Online Resmi Semarang</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Layanan ini dapat diajukan secara langsung dan mandiri melalui Portal Apel Surga Dispendukcapil Kota Semarang.
              </p>
            </div>
            <a
              href={onlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span>Ajukan Online via Apel Surga</span>
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
          </div>
        )}

        {/* Metadata Pills */}
        <div className="grid gap-3 sm:grid-cols-3 pt-1">
          <div className="rounded-2xl border border-border/80 bg-background/80 p-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <Clock3Icon className="h-4 w-4 text-primary" />
              Estimasi Waktu
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">{detail.duration}</p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-background/80 p-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <LandmarkIcon className="h-4 w-4 text-primary" />
              Biaya Layanan
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">{detail.cost}</p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-background/80 p-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <MapPinIcon className="h-4 w-4 text-primary" />
              Lokasi Pelayanan
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">{detail.location}</p>
          </div>
        </div>
      </article>

      {/* Downloads Section (if any, e.g. SPTJM files) */}
      {detail.downloads && detail.downloads.length > 0 && (
        <Card className="rounded-3xl border border-blue-200/80 bg-blue-50/30 dark:border-blue-900/60 dark:bg-blue-950/20">
          <CardHeader className="pb-3">
            <CardTitle className="inline-flex items-center gap-2 text-lg font-bold font-heading text-blue-950 dark:text-blue-200">
              <DownloadIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Unduh Formulir & Berkas Pendukung (SPTJM)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {detail.downloads.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-blue-200/60 bg-background/90 p-4 shadow-2xs"
              >
                <div className="space-y-1">
                  <p className="text-sm font-bold text-foreground">{item.label}</p>
                  {item.description && <p className="text-xs text-muted-foreground">{item.description}</p>}
                </div>
                <a
                  href={item.url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-2xs hover:bg-blue-700 transition-colors"
                >
                  <DownloadIcon className="h-4 w-4" />
                  <span>Unduh File</span>
                </a>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Requirements Card with Sub-Tabs / Accordion */}
      <Card className="rounded-3xl border border-border/80">
        <CardHeader>
          <CardTitle className="text-xl font-bold font-heading">Persyaratan Dokumen Layanan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {requirementSections.length > 0 ? (
            <div className="space-y-4">
              {/* Sub-Tabs Selector Header (if multiple sections exist) */}
              {requirementSections.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-border/50">
                  {requirementSections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => setActiveTabId(sec.id)}
                      className={cn(
                        "inline-flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-semibold transition-all duration-200",
                        activeTabId === sec.id
                          ? "bg-primary text-primary-foreground shadow-xs"
                          : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <FileTextIcon className="h-3.5 w-3.5" />
                      {sec.title}
                    </button>
                  ))}
                </div>
              )}

              {/* Requirement Section Cards / Accordion Items */}
              <div className="grid gap-4">
                {requirementSections
                  .filter((sec) => requirementSections.length === 1 || sec.id === activeTabId)
                  .map((sec) => (
                    <div
                      key={sec.id}
                      className="space-y-3 rounded-2xl border border-border/70 bg-card/60 p-4 md:p-5"
                    >
                      <div className="flex items-center justify-between border-b border-border/40 pb-2.5">
                        <h3 className="font-heading text-base font-bold text-foreground inline-flex items-center gap-2">
                          <CheckCircle2Icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          {sec.title}
                        </h3>
                        <Badge variant="outline" className="text-[11px]">
                          {sec.items.length} Berkas Persyaratan
                        </Badge>
                      </div>

                      {sec.description && (
                        <p className="text-xs text-muted-foreground">{sec.description}</p>
                      )}

                      <ul className="grid gap-2.5 pt-1">
                        {sec.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 rounded-xl border border-border/50 bg-background/80 px-4 py-3 text-sm text-foreground"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Section Notes (e.g. SPTJM details) */}
                      {sec.notes && sec.notes.length > 0 && (
                        <div className="mt-3 rounded-xl border border-amber-200/80 bg-amber-50/50 p-3.5 dark:border-amber-900/50 dark:bg-amber-950/30">
                          <p className="text-xs font-bold text-amber-900 dark:text-amber-300 mb-1">
                            Catatan SPTJM / Ketentuan Saksi:
                          </p>
                          <ul className="space-y-1">
                            {sec.notes.map((note, nIdx) => (
                              <li key={nIdx} className="text-xs text-amber-800 dark:text-amber-300 flex items-start gap-1.5">
                                <span className="text-amber-600 font-bold">•</span>
                                <span>{note}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Download button for section specific format */}
                      {sec.downloadUrl && (
                        <div className="pt-2">
                          <a
                            href={sec.downloadUrl}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-amber-500/15 border border-amber-400/40 px-3.5 py-2 text-xs font-semibold text-amber-900 dark:text-amber-300 hover:bg-amber-500/25 transition-colors"
                          >
                            <DownloadIcon className="h-3.5 w-3.5 text-amber-700 dark:text-amber-400" />
                            <span>{sec.downloadLabel || "Download Berkas SPTJM"}</span>
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <ul className="grid gap-2.5">
              {detail.requirements?.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 px-4 py-3 text-sm text-foreground"
                >
                  <span className="flex h-2 w-2 rounded-full bg-primary" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* Steps & Procedure Section */}
      <Card className="rounded-3xl border border-border/80">
        <CardHeader>
          <CardTitle className="text-xl font-bold font-heading">Alur & Prosedur Pelayanan</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="grid gap-3">
            {detail.steps.map((item) => (
              <li
                key={item.step}
                className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/80 p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {item.step}
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Highlights Box for Catatan Penting */}
      {detail.notes && detail.notes.length > 0 && (
        <Card className="rounded-3xl border border-amber-300/80 bg-amber-50/60 dark:border-amber-900/80 dark:bg-amber-950/40 shadow-2xs">
          <CardHeader className="pb-3">
            <CardTitle className="inline-flex items-center gap-2 text-lg font-bold font-heading text-amber-950 dark:text-amber-200">
              <AlertCircleIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              Catatan Penting Khusus Layanan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {detail.notes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm font-medium text-amber-900 dark:text-amber-200 leading-relaxed">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
