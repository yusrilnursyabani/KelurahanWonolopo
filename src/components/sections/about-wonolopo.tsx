"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { geographyDemographics, visionMissionData } from "@/data";
import { Container, Section, SectionTitle } from "@/components/common";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  QuoteIcon,
  SparklesIcon,
  MapPinIcon,
  Maximize2Icon,
  UsersIcon,
  HomeIcon,
  BriefcaseIcon,
  CompassIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  CheckCircle2Icon,
} from "lucide-react";

export function AboutWonolopoSection() {
  const { vision, missions } = visionMissionData;
  const { overview, demographics, economy, boundaries } = geographyDemographics;

  // Track expanded mission item for compact interactive accordion
  const [expandedMission, setExpandedMission] = useState<number | null>(null);

  const toggleMission = (id: number) => {
    setExpandedMission(expandedMission === id ? null : id);
  };

  return (
    <Section className="bg-[linear-gradient(160deg,oklch(0.99_0.002_247)_0%,oklch(0.975_0.004_258)_100%)]">
      <Container className="space-y-10">
        <SectionTitle
          title="Tentang Kelurahan Wonolopo"
          subtitle="Kelurahan Wonolopo berkomitmen memberikan pelayanan publik yang cepat, transparan, dan berorientasi pada kebutuhan warga."
        />

        {/* 2-COLUMN SPLIT LAYOUT (DESKTOP: 2-COLS, MOBILE: 1-COL) */}
        <div className="grid gap-8 lg:grid-cols-2 items-stretch">
          {/* ================= KOLOM KIRI: VISI & MISI ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between space-y-6"
          >
            {/* HERO HIGHLIGHT CARD VISI */}
            <Card className="group relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-card to-accent/20 p-6 shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-lg md:p-8">
              <QuoteIcon className="absolute top-4 right-4 size-16 text-primary/10 transition-transform group-hover:scale-110" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    <SparklesIcon className="mr-1 size-3.5" />
                    Visi Kelurahan Wonolopo
                  </Badge>
                </div>
                <blockquote className="font-heading text-xl font-bold leading-relaxed text-foreground md:text-2xl">
                  &ldquo;{vision.quote}&rdquo;
                </blockquote>
                <p className="text-xs font-medium text-muted-foreground">
                  Landasan pembangunan dan tata kelola pelayanan publik Kota Semarang & Kelurahan Wonolopo.
                </p>
              </div>
            </Card>

            {/* COMPACT INTERACTIVE MISI LIST */}
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  Misi Pembangunan Kelurahan
                </h3>
                <span className="text-xs text-muted-foreground">
                  5 Poin Kunci Misi
                </span>
              </div>

              <div className="space-y-2.5">
                {missions.map((misi) => {
                  const isExpanded = expandedMission === misi.id;
                  return (
                    <div
                      key={misi.id}
                      onClick={() => toggleMission(misi.id)}
                      className={`group cursor-pointer rounded-xl border p-3.5 transition-all duration-200 ${
                        isExpanded
                          ? "border-primary/50 bg-card shadow-md"
                          : "border-border/80 bg-card/80 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 font-heading text-xs font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {misi.number}
                          </span>
                          <div>
                            <span className="text-[11px] font-semibold text-primary block">
                              {misi.tag}
                            </span>
                            <h4 className="font-heading text-sm font-bold text-foreground">
                              {misi.title}
                            </h4>
                          </div>
                        </div>
                        <ChevronDownIcon
                          className={`size-4 text-muted-foreground transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </div>

                      {/* Expanded Details */}
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 pt-3 border-t border-border/50 text-xs text-muted-foreground space-y-2"
                        >
                          <p className="leading-relaxed">{misi.description}</p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {misi.highlights.map((h, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 rounded bg-primary/5 px-2 py-0.5 text-[11px] font-medium text-primary"
                              >
                                <CheckCircle2Icon className="size-3" />
                                {h}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ================= KOLOM KANAN: GEOGRAFIS & DEMOGRAFI ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col justify-between space-y-6"
          >
            {/* QUICK STAT BENTO DASHBOARD */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary">
                  Dashboard Wilayah & Demografi
                </Badge>
                <Badge variant="outline" className="border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px]">
                  Data per 31 Desember 2024
                </Badge>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {/* Luas Wilayah Card */}
                <Card className="group border-border/80 bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                  <CardContent className="p-0 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Luas Wilayah
                      </span>
                      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Maximize2Icon className="size-4" />
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {overview.luasWilayah}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground">Kota Semarang, Jateng</p>
                  </CardContent>
                </Card>

                {/* Total Penduduk Card */}
                <Card className="group border-border/80 bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-md">
                  <CardContent className="p-0 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Total Penduduk
                      </span>
                      <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                        <UsersIcon className="size-4" />
                      </div>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-2xl font-bold text-foreground group-hover:text-blue-600 transition-colors">
                        {demographics.totalPenduduk}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">Jiwa</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground">Terdaftar per 31 Desember 2024</p>
                  </CardContent>
                </Card>

                {/* KK & Gender Split Card */}
                <Card className="group border-border/80 bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-md">
                  <CardContent className="p-0 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Jumlah KK & Gender
                      </span>
                      <div className="flex size-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600">
                        <HomeIcon className="size-4" />
                      </div>
                    </div>
                    <div className="font-heading text-xl font-bold text-foreground">
                      {demographics.jumlahKK} <span className="text-xs font-normal text-muted-foreground">KK</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <span className="text-blue-600 dark:text-blue-400">L: {demographics.lakiLaki}</span>
                      <span className="text-muted-foreground">|</span>
                      <span className="text-rose-600 dark:text-rose-400">P: {demographics.perempuan}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Perekonomian Card */}
                <Card className="group border-border/80 bg-card p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-md">
                  <CardContent className="p-0 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Perekonomian
                      </span>
                      <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                        <BriefcaseIcon className="size-4" />
                      </div>
                    </div>
                    <div className="font-heading text-base font-bold text-foreground group-hover:text-emerald-600 transition-colors">
                      {economy.mataPencaharianMayoritas}
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      Warga Miskin: {economy.wargaMiskinKK} KK
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* WIDGET BATAS WILAYAH (MINI COMPASS GRID) */}
            <Card className="border-border/80 bg-card p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                  <CompassIcon className="size-4 text-primary animate-pulse" />
                  Batas Wilayah Kelurahan
                </div>
                <Badge variant="outline" className="text-[10px]">4 Arah Mata Angin</Badge>
              </div>

              {/* 2x2 Boundary Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5 transition-colors hover:bg-muted">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">Utara</span>
                  <span className="font-heading font-semibold text-foreground">{boundaries.utara}</span>
                </div>
                <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5 transition-colors hover:bg-muted">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">Timur</span>
                  <span className="font-heading font-semibold text-foreground">{boundaries.timur}</span>
                </div>
                <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5 transition-colors hover:bg-muted">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">Barat</span>
                  <span className="font-heading font-semibold text-foreground">{boundaries.barat}</span>
                </div>
                <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5 transition-colors hover:bg-muted">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary block">Selatan</span>
                  <span className="font-heading font-semibold text-foreground">{boundaries.selatan}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* CALL TO ACTION BUTTON (CTA) */}
        <div className="flex justify-center pt-2">
          <Link
            href="/profil"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg"
          >
            Lihat Profil Selengkapnya
            <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
