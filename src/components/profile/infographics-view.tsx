"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { infographicsData } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  UsersIcon,
  UserCheckIcon,
  HomeIcon,
  ActivityIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  HeartIcon,
  CalendarIcon,
  SparklesIcon,
  TrendingUpIcon,
  PieChartIcon,
  BarChart3Icon,
} from "lucide-react";

export function InfographicsView() {
  const {
    headerNote,
    summary,
    religion,
    maritalStatus,
    ageGroups,
    education,
    bloodType,
    occupations,
    populationGrowth,
    schoolAgeCategories,
  } = infographicsData;

  const [activeTab, setActiveTab] = useState<"ringkasan" | "agama" | "pendidikan">("ringkasan");

  // Max value calculation for bar chart proportions
  const maxAgeCount = Math.max(...ageGroups.map((a) => a.count));
  const maxEduCount = Math.max(...education.map((e) => e.count));
  const maxOccCount = Math.max(...occupations.map((o) => o.count));

  return (
    <div className="space-y-8">
      {/* Mandatory Header Note */}
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-secondary/30 p-6 md:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="default" className="bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                <SparklesIcon className="mr-1 size-3.5" />
                Infografis Demografi Penduduk
              </Badge>
              {/* Mandatory Date Label */}
              <Badge variant="outline" className="border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold">
                <CalendarIcon className="mr-1 size-3.5 text-emerald-600" />
                {headerNote}
              </Badge>
            </div>
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Statistik Kependudukan Kelurahan Wonolopo
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
              Visualisasi komprehensif demografi penduduk, distribusi agama, kelompok usia, tingkat pendidikan, dan profil pekerjaan.
            </p>
          </div>
        </div>
      </div>

      {/* FILTER / TAB NAVIGATION SYSTEM */}
      <div className="flex items-center justify-center sm:justify-start">
        <div className="inline-flex w-full flex-col gap-1 rounded-2xl border border-border bg-muted/50 p-1.5 sm:w-auto sm:flex-row">
          <button
            onClick={() => setActiveTab("ringkasan")}
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
              activeTab === "ringkasan"
                ? "bg-card text-primary shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <UsersIcon className="size-4" />
            Demografi & Dinamika
          </button>
          <button
            onClick={() => setActiveTab("agama")}
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
              activeTab === "agama"
                ? "bg-card text-primary shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <PieChartIcon className="size-4" />
            Agama & Golongan Darah
          </button>
          <button
            onClick={() => setActiveTab("pendidikan")}
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
              activeTab === "pendidikan"
                ? "bg-card text-primary shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <BarChart3Icon className="size-4" />
            Usia, Pendidikan & Pekerjaan
          </button>
        </div>
      </div>

      {/* ================= TAB 1: DEMOGRAFI & DINAMIKA ================= */}
      {activeTab === "ringkasan" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {/* STAT CARDS DASHBOARD */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Total Penduduk Card */}
            <Card className="border-border/80 bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Total Penduduk
                </span>
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <UsersIcon className="size-5" />
                </div>
              </div>
              <h3 className="mt-3 font-heading text-3xl font-bold text-foreground">
                {summary.totalPenduduk} <span className="text-sm font-normal text-muted-foreground">jiwa</span>
              </h3>
              <p className="mt-1 text-xs font-medium text-blue-600 dark:text-blue-400">
                Laki: {summary.lakiLaki} | Perem: {summary.perempuan}
              </p>
            </Card>

            {/* Kepala Keluarga Card */}
            <Card className="border-border/80 bg-card p-5 shadow-sm transition-all hover:border-purple-500/40 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Kepala Keluarga (KK)
                </span>
                <div className="flex size-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                  <HomeIcon className="size-5" />
                </div>
              </div>
              <h3 className="mt-3 font-heading text-3xl font-bold text-foreground">
                {summary.jumlahKK} <span className="text-sm font-normal text-muted-foreground">KK</span>
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Kepala Keluarga terdaftar
              </p>
            </Card>

            {/* Wajib KTP Card */}
            <Card className="border-border/80 bg-card p-5 shadow-sm transition-all hover:border-emerald-500/40 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Wajib KTP
                </span>
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <UserCheckIcon className="size-5" />
                </div>
              </div>
              <h3 className="mt-3 font-heading text-3xl font-bold text-foreground">
                {summary.wajibKTP} <span className="text-sm font-normal text-muted-foreground">jiwa</span>
              </h3>
              <p className="mt-1 text-xs text-emerald-600 font-medium">
                Perekaman: {summary.rekamWajibKTP} (98.2%)
              </p>
            </Card>

            {/* Dinamika Penduduk Card */}
            <Card className="border-border/80 bg-card p-5 shadow-sm transition-all hover:border-amber-500/40 hover:shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Dinamika Penduduk
                </span>
                <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                  <ActivityIcon className="size-5" />
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Perpindahan:</span>
                  <span className="font-bold text-foreground">{summary.dinamika.perpindahan} jiwa</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Meninggal:</span>
                  <span className="font-bold text-foreground">{summary.dinamika.meninggal} jiwa</span>
                </div>
              </div>
            </Card>
          </div>

          {/* PERTUMBUHAN PENDUDUK & USIA SEKOLAH */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Pertumbuhan Penduduk (2020-2024) */}
            <Card className="border-border/80 bg-card shadow-sm">
              <CardHeader className="border-b border-border/50 bg-muted/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                    <TrendingUpIcon className="size-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-bold">
                      Pertumbuhan Penduduk (2020 - 2024)
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">Persentase pertumbuhan & angka kelahiran tahunan</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {populationGrowth.map((row) => (
                    <div
                      key={row.year}
                      className="flex items-center justify-between rounded-xl border border-border/60 bg-background p-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-heading text-sm font-bold text-primary">
                          Tahun {row.year}
                        </span>
                        <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-[11px]">
                          + {row.growth}
                        </Badge>
                      </div>
                      <div className="text-xs font-semibold text-foreground">
                        Kelahiran: <span className="font-bold text-emerald-600">{row.births} bayi</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Usia Sekolah Breakdown */}
            <Card className="border-border/80 bg-card shadow-sm">
              <CardHeader className="border-b border-border/50 bg-muted/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                    <GraduationCapIcon className="size-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base font-bold">
                      Distribusi Usia Sekolah
                    </CardTitle>
                    <p className="text-xs text-muted-foreground">Jumlah anak & remaja usia pendidikan formal</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {schoolAgeCategories.map((school) => (
                    <div
                      key={school.category}
                      className="flex flex-col justify-between rounded-xl border border-border/60 bg-background p-3"
                    >
                      <span className="text-[11px] font-semibold text-muted-foreground">
                        {school.category}
                      </span>
                      <p className="mt-1 font-heading text-lg font-bold text-primary">
                        {school.count} <span className="text-xs font-normal text-muted-foreground">anak</span>
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}

      {/* ================= TAB 2: AGAMA & GOLONGAN DARAH ================= */}
      {activeTab === "agama" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {/* DISTRIBUSI AGAMA */}
            <Card className="border-border/80 bg-card shadow-sm">
              <CardHeader className="border-b border-border/50 bg-muted/20 pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold">Distribusi Agama & Kepercayaan</CardTitle>
                  <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300">
                    94.09% Islam
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                {religion.map((item) => {
                  if (item.isSubtle) return null;
                  return (
                    <div key={item.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-foreground">{item.name}</span>
                        <span className="text-muted-foreground">
                          {item.count.toLocaleString("id-ID")} jiwa ({item.percentage}%)
                        </span>
                      </div>
                      <div className="h-3.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.max(item.percentage, 1)}%`,
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* STATUS PERKAWINAN */}
            <Card className="border-border/80 bg-card shadow-sm">
              <CardHeader className="border-b border-border/50 bg-muted/20 pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold">Status Perkawinan</CardTitle>
                  <Badge variant="outline" className="border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300">
                    Total: 11.279
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  {maritalStatus.map((status) => (
                    <div
                      key={status.name}
                      className="rounded-xl border border-border/60 bg-background p-4"
                    >
                      <span className="text-xs font-semibold text-muted-foreground">
                        {status.name}
                      </span>
                      <h4 className="mt-1 font-heading text-xl font-bold text-foreground">
                        {status.count.toLocaleString("id-ID")} <span className="text-xs font-normal text-muted-foreground">jiwa</span>
                      </h4>
                      <span className="mt-1 inline-block text-xs font-bold text-primary">
                        {status.percentage}% dari total
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* GOLONGAN DARAH COMPACT GRID CARDS */}
          <Card className="border-border/80 bg-card shadow-sm">
            <CardHeader className="border-b border-border/50 bg-muted/20 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600">
                  <HeartIcon className="size-5" />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold">Golongan Darah Penduduk</CardTitle>
                  <p className="text-xs text-muted-foreground">Data rincian golongan darah & rhesus terdata</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {bloodType.map((blood) => (
                  <div
                    key={blood.type}
                    className="flex flex-col justify-between rounded-xl border border-border/70 bg-background p-4 transition-all hover:border-rose-500/40 hover:shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-2xl font-bold text-rose-600 dark:text-rose-400">
                          {blood.type}
                        </span>
                        <Badge variant="outline" className="border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300 text-[10px]">
                          Gol-Darah
                        </Badge>
                      </div>
                      <h4 className="mt-2 font-heading text-lg font-bold text-foreground">
                        {blood.count.toLocaleString("id-ID")} <span className="text-xs font-normal text-muted-foreground">jiwa</span>
                      </h4>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground">{blood.details}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* ================= TAB 3: USIA, PENDIDIKAN & PEKERJAAN ================= */}
      {activeTab === "pendidikan" && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-8"
        >
          {/* KELOMPOK USIA (HORIZONTAL AGE PYRAMID) */}
          <Card className="border-border/80 bg-card shadow-sm">
            <CardHeader className="border-b border-border/50 bg-muted/20 pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg font-bold">Kelompok Usia Penduduk</CardTitle>
                  <p className="text-xs text-muted-foreground">Distribusi 16 kelompok usia dari 0 hingga 75+ tahun</p>
                </div>
                <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
                  Puncak Usia: 40-44 th (1.033)
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
                {ageGroups.map((group) => {
                  const widthPercent = (group.count / maxAgeCount) * 100;
                  return (
                    <div
                      key={group.age}
                      className="space-y-1 rounded-xl border border-border/60 bg-background p-3"
                    >
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-primary font-bold">{group.age}</span>
                        <span className="text-foreground font-bold">{group.count} jiwa</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-500"
                          style={{ width: `${widthPercent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* PENDIDIKAN & PEKERJAAN DUAL GRID */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* PENDIDIKAN TERAKHIR */}
            <Card className="border-border/80 bg-card shadow-sm">
              <CardHeader className="border-b border-border/50 bg-muted/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                    <GraduationCapIcon className="size-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">Pendidikan Terakhir</CardTitle>
                    <p className="text-xs text-muted-foreground">Tingkat pendidikan masyarakat terdaftar</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                {education.map((edu) => {
                  const percent = (edu.count / maxEduCount) * 100;
                  return (
                    <div key={edu.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-foreground">{edu.name}</span>
                        <span className="text-muted-foreground">{edu.count.toLocaleString("id-ID")} jiwa</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-blue-500 transition-all duration-500"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* PEKERJAAN MAJOR */}
            <Card className="border-border/80 bg-card shadow-sm">
              <CardHeader className="border-b border-border/50 bg-muted/20 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                    <BriefcaseIcon className="size-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">Mata Pencaharian Utama</CardTitle>
                    <p className="text-xs text-muted-foreground">Kategori pekerjaan utama masyarakat</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                {occupations.map((occ) => {
                  const percent = (occ.count / maxOccCount) * 100;
                  return (
                    <div key={occ.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-foreground">{occ.name}</span>
                        <span className="text-muted-foreground">{occ.count.toLocaleString("id-ID")} jiwa</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}
    </div>
  );
}
