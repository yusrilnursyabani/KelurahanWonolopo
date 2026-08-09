"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SparklesIcon,
  ShieldCheckIcon,
  AwardIcon,
  CheckCircle2Icon,
} from "lucide-react";

// 7 Fungsi BKM Verbatim
const FUNGSI_BKM = [
  "Pusat penggerak dan penumbuhan kembali nilai-nilai kemanusiaan, nilai-nilai kemasyarakatan dan nilai-nilai demokrasi dalam kehidupan nyata masyarakat setempat.",
  "Pusat Pengembangan aturan",
  "Pusat pengambilan keputusan yang adil dan demokratis kegiatan penanggulangan kemiskinan serta pembangunan",
  "Pusat pengendalian dan kontrol sosial terhadap proses pembangunan, utamanya penanggulangan kemiskinan",
  "Pusat pembangkit dan mediasi aspirasi dan partisipasi masyarakat",
  "Pusat informasi dan komunikasi bagi warga masyarakat desa",
  "Pusat advokasi integrasi kebutuhan dan program masyarakat dengan kebijakan dan program pemerintah ataupun pihak ketiga (chanelling).",
];

export function BkmView() {
  return (
    <div className="space-y-10">
      {/* HEADER & PERAN BKM HERO CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-blue-500/10 p-6 md:p-8 shadow-sm"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary font-semibold">
              <SparklesIcon className="mr-1.5 size-3.5" />
              Lembaga Pemberdayaan Masyarakat
            </Badge>
            <Badge variant="outline" className="border-blue-500/40 bg-blue-500/10 text-blue-700 dark:text-blue-300 font-semibold text-xs">
              <ShieldCheckIcon className="mr-1 size-3.5" />
              Penanggulangan Kemiskinan
            </Badge>
          </div>

          <h1 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-4xl">
            BKM (BADAN KESWADAYAAN MASYARAKAT (BKM))
          </h1>

          <div className="rounded-xl border border-primary/20 bg-card/80 p-5 shadow-sm backdrop-blur-xs">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
              <AwardIcon className="size-4" />
              Peran BKM
            </p>
            <blockquote className="font-heading text-sm md:text-base font-medium leading-relaxed text-foreground italic">
              &ldquo;Peran BKM adalah mewadahi aspirasi masyarakat dengan cara melibatkan masyarakat agar pro aktif dalam proses pengambilan keputusan dalam program pemberdayaan masyarakat dalam penanggulangan kemiskinan di wilayahnya dan memperjuangkan di penuhinya kebutuhan dasar, sosial, ekonomi dan sarana prasarana dasar lingkungan bagi masyarakat miskin.&rdquo;
            </blockquote>
          </div>
        </div>
      </motion.div>

      {/* FUNGSI BKM GRID CARDS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary mb-1">
              Fungsi Strategis
            </Badge>
            <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">
              FUNGSI BKM
            </h2>
          </div>
          <span className="text-xs text-muted-foreground hidden sm:block">
            7 Poin Fungsi BKM
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FUNGSI_BKM.map((fungsi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group cursor-pointer ${idx === 6 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <Card className="h-full border border-border/80 bg-gradient-to-br from-card via-card to-blue-500/5 p-5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg">
                <CardHeader className="p-0 pb-3">
                  <div className="flex items-center justify-between">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 font-heading text-sm font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {idx + 1}
                    </span>
                    <CheckCircle2Icon className="size-4 text-primary/70 transition-transform group-hover:scale-110" />
                  </div>
                </CardHeader>
                <CardContent className="p-0 pt-1">
                  <p className="text-xs leading-relaxed font-medium text-foreground">
                    {fungsi}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
