"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Download,
  Eye,
  EyeOff,
  FileText,
  GraduationCap,
  Search,
  Sparkles,
  User,
  X,
} from "lucide-react";

import { scientificArticles, type ScientificArticle } from "@/data/scientific-articles";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function ScientificArticlesView() {
  const [activePreviewId, setActivePreviewId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = scientificArticles.filter((article) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      article.title.toLowerCase().includes(q) ||
      article.researchers.toLowerCase().includes(q) ||
      article.institution.toLowerCase().includes(q) ||
      article.abstract.toLowerCase().includes(q) ||
      article.keywords.some((k) => k.toLowerCase().includes(q))
    );
  });

  const togglePreview = (id: string) => {
    setActivePreviewId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-primary/10 via-background to-amber-500/10 p-6 md:p-8 space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
          <BookOpen className="h-3.5 w-3.5" />
          <span>Publikasi & Riset Akademis</span>
        </div>
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Artikel Ilmiah & Jurnal Penelitian Wonolopo
        </h2>
        <p className="ds-body text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl">
          Dokumentasi publikasi hasil penelitian akademis, jurnal ilmiah, dan karya riset perguruan tinggi mengenai potensi daerah, inovasi kelurahan, dan pemberdayaan masyarakat.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Cari berdasarkan judul, penulis (misal: KKN Unisvet), institusi, atau kata kunci..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 rounded-2xl h-11 bg-background/90 text-sm focus-visible:ring-primary"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            Reset
          </button>
        )}
      </div>

      {/* Article List */}
      <div className="space-y-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => {
            const isPreviewOpen = activePreviewId === article.id;

            return (
              <Card
                key={article.id}
                className="overflow-hidden rounded-3xl border border-border/80 bg-card/90 shadow-xs transition-all hover:shadow-md"
              >
                <CardHeader className="space-y-4 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                      <Sparkles className="h-3 w-3" />
                      {article.categoryTag}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      Tahun {article.year}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold leading-snug text-foreground md:text-2xl">
                    {article.title}
                  </h3>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap gap-4 text-xs font-medium text-muted-foreground border-y border-border/50 py-3">
                    <div className="flex items-center gap-1.5">
                      <User className="h-4 w-4 text-primary shrink-0" />
                      <span>
                        Peneliti: <strong className="text-foreground">{article.researchers}</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                      <span>
                        Institusi: <strong className="text-foreground">{article.institution}</strong>
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-5">
                  {/* Abstract */}
                  <div className="space-y-1.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Abstrak / Ringkasan
                    </p>
                    <p className="ds-body text-sm leading-relaxed text-muted-foreground bg-muted/30 p-4 rounded-2xl border border-border/40">
                      {article.abstract}
                    </p>
                  </div>

                  {/* Keywords */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-xs font-medium text-muted-foreground mr-1">Kata Kunci:</span>
                    {article.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="rounded-lg bg-background border border-border/60 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>

                  {/* Card Akses Dokumen PDF */}
                  <div className="rounded-2xl border border-border/80 bg-gradient-to-r from-muted/50 via-background to-muted/30 p-4 md:p-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400">
                          <FileText className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">Unduh / Baca Full Artikel PDF</p>
                          <p className="text-xs text-muted-foreground">
                            Format PDF • {article.fileSize} • {article.pageCount} Halaman
                          </p>
                        </div>
                      </div>

                      {/* Control Buttons: Lihat (Preview Toggle) & Unduh */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant={isPreviewOpen ? "secondary" : "outline"}
                          size="sm"
                          onClick={() => togglePreview(article.id)}
                          className="rounded-xl gap-2 font-semibold text-xs transition-all"
                        >
                          {isPreviewOpen ? (
                            <>
                              <EyeOff className="h-4 w-4" />
                              <span>Sembunyikan</span>
                            </>
                          ) : (
                            <>
                              <Eye className="h-4 w-4 text-primary" />
                              <span>Lihat</span>
                            </>
                          )}
                        </Button>

                        <a
                          href={article.pdfUrl}
                          download={`Artikel_Ilmiah_${article.title.substring(0, 20)}.pdf`}
                          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-xs transition-all hover:bg-primary/90 focus-visible:outline-hidden"
                        >
                          <Download className="h-4 w-4" />
                          <span>Unduh</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Embedded PDF Viewer */}
                  <AnimatePresence>
                    {isPreviewOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden space-y-3 pt-2"
                      >
                        {/* Header Bar Viewer with Soft Red Close Button */}
                        <div className="flex items-center justify-between rounded-2xl bg-slate-900 text-slate-100 px-4 py-2.5 text-xs">
                          <div className="flex items-center gap-2 font-medium">
                            <FileText className="h-4 w-4 text-red-400" />
                            <span className="line-clamp-1">{article.title}</span>
                          </div>

                          {/* Tombol "Tutup Pratinjau" Bertema Merah Soft */}
                          <button
                            onClick={() => setActivePreviewId(null)}
                            className="inline-flex items-center gap-1.5 rounded-xl border border-rose-300/60 bg-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-200 transition-all hover:bg-rose-600 hover:text-white dark:border-rose-700 dark:bg-rose-950/80 dark:text-rose-300"
                          >
                            <X className="h-3.5 w-3.5" />
                            <span>Tutup Pratinjau</span>
                          </button>
                        </div>

                        {/* Responsive PDF Iframe */}
                        <div className="relative w-full overflow-hidden rounded-2xl border border-border shadow-inner bg-slate-100 dark:bg-slate-900">
                          <iframe
                            src={`${article.pdfUrl}#toolbar=1`}
                            className="w-full h-[550px] md:h-[650px] border-0 rounded-2xl"
                            title={`Pratinjau PDF: ${article.title}`}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <div className="rounded-3xl border border-dashed p-12 text-center text-muted-foreground">
            <BookOpen className="h-10 w-10 mx-auto text-muted-foreground/60 mb-3" />
            <p className="font-semibold text-foreground">Artikel tidak ditemukan</p>
            <p className="text-sm mt-1">Tidak ada hasil pencarian untuk kata kunci &quot;{searchQuery}&quot;.</p>
          </div>
        )}
      </div>
    </div>
  );
}
