"use client";

import { geographyDemographics } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPinIcon,
  Maximize2Icon,
  Building2Icon,
  UsersIcon,
  UserIcon,
  UserCheckIcon,
  HomeIcon,
  BriefcaseIcon,
  HandHeartIcon,
  CompassIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "lucide-react";

export function GeographyDemographicsView() {
  const { overview, demographics, economy, boundaries } = geographyDemographics;

  // Calculate percentages for gender split
  const malePercentage = ((demographics.lakiLakiNum / demographics.totalPendudukNum) * 100).toFixed(1);
  const femalePercentage = ((demographics.perempuanNum / demographics.totalPendudukNum) * 100).toFixed(1);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/30 p-6 md:p-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <SparklesIcon className="size-3.5" />
              Dashboard Geografis & Demografi
            </div>
            <Badge variant="outline" className="border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold">
              Data per 31 Desember 2024
            </Badge>
          </div>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Kondisi Geografis & Kependudukan
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Gambaran komprehensif mengenai tata letak wilayah, demografi penduduk, profil ekonomi, dan batas administrasi Kelurahan Wonolopo.
          </p>
        </div>
      </div>

      {/* Bento Box Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* BENTO CARD 1: OVERVIEW & LUAS WILAYAH */}
        <Card className="group relative overflow-hidden border-border/80 bg-card shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md lg:col-span-1">
          <div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity group-hover:opacity-20">
            <MapPinIcon className="size-24 text-primary" />
          </div>
          <CardHeader className="pb-2">
            <Badge variant="outline" className="w-fit border-primary/30 bg-primary/10 text-primary">
              Administrasi & Wilayah
            </Badge>
            <CardTitle className="pt-2 text-xl font-bold">
              Lokasi & Luas Wilayah
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Luas Wilayah Total
              </span>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-heading text-3xl font-bold text-primary">
                  {overview.luasWilayah}
                </span>
                <Maximize2Icon className="size-4 text-primary/70" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Building2Icon className="size-3.5 text-primary" />
                  Kecamatan
                </div>
                <p className="mt-1 font-heading text-base font-bold text-foreground">
                  {overview.kecamatan}
                </p>
              </div>

              <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPinIcon className="size-3.5 text-primary" />
                  Kota & Provinsi
                </div>
                <p className="mt-1 font-heading text-base font-bold text-foreground">
                  {overview.kota}
                </p>
                <p className="text-[11px] text-muted-foreground">{overview.provinsi}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* BENTO CARD 2: DEMOGRAFI & GENDER SPLIT */}
        <Card className="group relative overflow-hidden border-border/80 bg-card shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md lg:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300">
                Demografi Penduduk
              </Badge>
              <UsersIcon className="size-5 text-blue-500" />
            </div>
            <CardTitle className="pt-2 text-xl font-bold">
              Kependudukan & Komposisi Gender
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Top Stat Highlights */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-4 rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <UsersIcon className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Total Penduduk
                  </p>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {demographics.totalPenduduk} <span className="text-sm font-normal text-muted-foreground">jiwa</span>
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <HomeIcon className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Jumlah Kepala Keluarga
                  </p>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {demographics.jumlahKK} <span className="text-sm font-normal text-muted-foreground">KK</span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Gender Progress Bar Breakdown */}
            <div className="space-y-2 rounded-xl border border-border/60 bg-background p-4">
              <div className="flex items-center justify-between text-xs font-semibold">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                  <UserIcon className="size-4" />
                  <span>Laki-Laki: {demographics.lakiLaki} jiwa ({malePercentage}%)</span>
                </div>
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                  <UserIcon className="size-4" />
                  <span>Perempuan: {demographics.perempuan} jiwa ({femalePercentage}%)</span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="flex h-3.5 w-full overflow-hidden rounded-full bg-muted p-0.5">
                <div
                  className="h-full rounded-l-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${malePercentage}%` }}
                />
                <div
                  className="h-full rounded-r-full bg-rose-500 transition-all duration-500"
                  style={{ width: `${femalePercentage}%` }}
                />
              </div>
            </div>

            {/* Wajib KTP & Rekam Data Metric Box */}
            <div className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3.5 text-xs">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-semibold">
                <UserCheckIcon className="size-4 text-emerald-600" />
                <span>Wajib KTP: <strong>{demographics.wajibKTP}</strong> jiwa</span>
              </div>
              <span className="font-semibold text-foreground">
                Rekam Data: <strong className="text-emerald-600">{demographics.rekamWajibKTP}</strong> (98.2%)
              </span>
            </div>
          </CardContent>
        </Card>

        {/* BENTO CARD 3: EKONOMI & MATA PENCAHARIAN */}
        <Card className="group relative overflow-hidden border-border/80 bg-card shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md md:col-span-1 lg:col-span-1">
          <CardHeader className="pb-2">
            <Badge variant="outline" className="w-fit border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
              Profil Socio-Ekonomi
            </Badge>
            <CardTitle className="pt-2 text-xl font-bold">
              Mata Pencaharian & Kesejahteraan
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <BriefcaseIcon className="size-4" />
                Mata Pencaharian Mayoritas
              </div>
              <p className="mt-2 font-heading text-xl font-bold text-foreground">
                {economy.mataPencaharianMayoritas}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Dominan bekerja di industri swasta, perdagangan, dan jasa.
              </p>
            </div>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400">
                <HandHeartIcon className="size-4" />
                Data Warga Terdata Miskin
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-heading text-2xl font-bold text-foreground">
                  {economy.wargaMiskinKK}
                </span>
                <span className="text-xs font-medium text-muted-foreground">Kepala Keluarga</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Menerima bantuan sosial & program pemberdayaan ekonomi.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* BENTO CARD 4: COMPASS WIDGET - BATAS WILAYAH */}
        <Card className="group relative overflow-hidden border-border/80 bg-card shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md md:col-span-2 lg:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300">
                Batas Administrasi
              </Badge>
              <CompassIcon className="size-5 text-amber-500" />
            </div>
            <CardTitle className="pt-2 text-xl font-bold">
              Batas Wilayah Kelurahan
            </CardTitle>
          </CardHeader>

          <CardContent className="pt-2">
            {/* Visual 4-Direction Compass Layout */}
            <div className="relative mx-auto max-w-xl p-4">
              {/* Central Circle */}
              <div className="relative grid grid-cols-3 grid-rows-3 gap-3 text-center">
                {/* NORTH (UTARA) */}
                <div className="col-start-2 row-start-1 flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-b from-primary/10 to-background p-3 transition-all hover:border-primary hover:shadow-md">
                  <div className="mb-1 flex items-center gap-1 text-xs font-bold text-primary">
                    <ArrowUpIcon className="size-3.5" />
                    <span>UTARA</span>
                  </div>
                  <p className="font-heading text-sm font-semibold text-foreground">
                    {boundaries.utara}
                  </p>
                </div>

                {/* WEST (BARAT) */}
                <div className="col-start-1 row-start-2 flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-background p-3 transition-all hover:border-primary hover:shadow-md">
                  <div className="mb-1 flex items-center gap-1 text-xs font-bold text-primary">
                    <ArrowLeftIcon className="size-3.5" />
                    <span>BARAT</span>
                  </div>
                  <p className="font-heading text-sm font-semibold text-foreground">
                    {boundaries.barat}
                  </p>
                </div>

                {/* CENTER HUB */}
                <div className="col-start-2 row-start-2 flex flex-col items-center justify-center rounded-full border-2 border-primary bg-primary/10 p-4 shadow-inner ring-4 ring-primary/20">
                  <CompassIcon className="size-6 text-primary animate-pulse" />
                  <span className="mt-1 font-heading text-xs font-bold uppercase text-primary">
                    Wonolopo
                  </span>
                </div>

                {/* EAST (TIMUR) */}
                <div className="col-start-3 row-start-2 flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-l from-primary/10 to-background p-3 transition-all hover:border-primary hover:shadow-md">
                  <div className="mb-1 flex items-center gap-1 text-xs font-bold text-primary">
                    <span>TIMUR</span>
                    <ArrowRightIcon className="size-3.5" />
                  </div>
                  <p className="font-heading text-sm font-semibold text-foreground">
                    {boundaries.timur}
                  </p>
                </div>

                {/* SOUTH (SELATAN) */}
                <div className="col-start-2 row-start-3 flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-gradient-to-t from-primary/10 to-background p-3 transition-all hover:border-primary hover:shadow-md">
                  <p className="font-heading text-sm font-semibold text-foreground">
                    {boundaries.selatan}
                  </p>
                  <div className="mt-1 flex items-center gap-1 text-xs font-bold text-primary">
                    <ArrowDownIcon className="size-3.5" />
                    <span>SELATAN</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA BANNER TO INFOGRAPHICS PAGE */}
      <div className="flex flex-col gap-3 rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-background to-emerald-500/5 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <Badge variant="outline" className="border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold">
            Data Terupdate per 31 Desember 2024
          </Badge>
          <h4 className="font-heading text-lg font-bold text-foreground">
            Ingin melihat statistik demografi penduduk yang lebih rinci?
          </h4>
          <p className="text-xs text-muted-foreground">
            Lihat infografis kelompok usia, tingkat pendidikan, agama, golongan darah, dan status perkawinan.
          </p>
        </div>
        <a
          href="/profil/infografis"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
        >
          Lihat Infografis Demografi Lengkap
          <ArrowRightIcon className="size-4" />
        </a>
      </div>
    </div>
  );
}
