"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SparklesIcon,
  BookOpenIcon,
  UsersIcon,
  UserCheckIcon,
  ListOrderedIcon,
  Building2Icon,
  CheckCircle2Icon,
  ShieldCheckIcon,
  HeartHandshakeIcon,
  AwardIcon,
  LandmarkIcon,
} from "lucide-react";

// 6 Fungsi LPMK Verbatim
const FUNGSI_LPMK = [
  "penampungan dan penyaluran aspirasi masyarakat dalam pembangunan;",
  "penanaman dan pemupukan rasa persatuan dan kesatuan masyarakat dalam kerangka memperkokoh Negara Kesatuan Republik Indonesia;",
  "peningkatan kualitas dan percepatan pelayanan pemerintah kepada masyarakat.",
  "penyusunan rencana, pelaksanaan, pelestarian dan pengembangan hasil-hasil pembangunan secara partisipatif;",
  "penumbuhkembangan dan penggerak prakarsa, partisipasi, serta swadaya gotong royong masyarakat; dan",
  "penggali, pendayagunaan dan pengembangan potensi sumber daya alam serta keserasian lingkungan hidup.",
];

// Bidang Pengurus Verbatim
const BIDANG_PENGURUS = [
  "Bidang Agama",
  "Bidang Pendidikan",
  "Bidang Informasi dan Komunikasi Masyarakat",
  "Bidang Kesehatan, Kependudukan dan Keluarga Berencana",
  "Bidang Pemuda Olah Raga dan Kesenian",
  "Bidang Pembangunan",
  "Bidang Kebersihan dan Keindahan",
  "Bidang Perekonomian, Koperasi dan Kesejahteraan Sosial",
  "Bidang Keamanan, Ketentraman dan Ketertiban (dapat ditambah sesuai dengan kebutuhan masyarakat dan wilayah.)",
];

// 9 Persyaratan Pengurus Verbatim
const PERSYARATAN_PENGURUS = [
  "bertaqwa kepada Tuhan Yang Maha Esa;",
  "setia dan taat kepada Pancasila dan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 dan kepada Negara Kesatuan Republik Indonesia;",
  "berdomisili di wilayah setempat.",
  "berpendidikan paling rendah tamatan Sekolah Lanjutan Tingkat Pertama dan/atau sederajat;",
  "berusia paling rendah 21 (dua puluh satu) tahun atau pernah kawin;",
  "berkelakuan baik, jujur dan adil;",
  "sehat jasmani dan rokhani;",
  "tidak dicabut hak pilihnya sesuai dengan putusan pengadilan yang mempunyai kekuatan hukum tetap;",
  "tidak merangkap sebagai pengurus dalam lembaga kemasyarakatan sesuai Peraturan Daerah ini.",
];

// 4 Tahapan Pemilihan Verbatim
const TAHAPAN_PEMILIHAN = [
  "Persiapan Pemilihan meliputi kegiatan sosialisasi, pembentukan panitia pemilihan, penerimaan nama calon pengurus;",
  "Pelaksanaan Musyawarah Pemilihan;",
  "Pelaporan Pemilihan Meliputi Berita Acara Hasil Musyawarah Pemilihan Pengurus LPMK dan Daftar hadir peserta musyawarah",
  "Ketua LPMK dipilih warga dengan membentuk panitia pemilihan Ketua LPMK",
];

export function LpmkView() {
  return (
    <div className="space-y-10">
      {/* HEADER BANNER CARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-emerald-500/10 p-6 md:p-8 shadow-sm"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary font-semibold">
              <SparklesIcon className="mr-1.5 size-3.5" />
              Lembaga Kemasyarakatan Kelurahan
            </Badge>
            <Badge variant="outline" className="border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold text-xs">
              Perda Kota Semarang No. 4 Thn 2009 (Pasal 10)
            </Badge>
          </div>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            LPMK
          </h1>

          <div className="rounded-xl border border-primary/20 bg-card/80 p-5 shadow-sm backdrop-blur-xs">
            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
              <AwardIcon className="size-4" />
              Tugas LPMK
            </p>
            <blockquote className="font-heading text-sm md:text-base font-medium leading-relaxed text-foreground italic">
              &ldquo;Berdasarkan Peraturan Daerah Kota Semarang Nomor 4 Tahun 2009 tentang Pembentukan Lembaga Kemasyarakatan di Kelurahan Pasal 10, LPMK mempunyai tugas menyusun rencana pembangunan secara partisipatif, menggerakkan swadaya gotong royong masyarakat masyarakat, melaksanakan dan mengendalikan pembangunan.&rdquo;
            </blockquote>
          </div>
        </div>
      </motion.div>

      {/* FUNGSI LPMK GRID CARDS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary mb-1">
              Fungsi Utama
            </Badge>
            <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">
              Fungsi LPMK
            </h2>
          </div>
          <span className="text-xs text-muted-foreground hidden sm:block">
            6 Poin Fungsi Berdasarkan Perda
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FUNGSI_LPMK.map((fungsi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <Card className="h-full border border-border/80 bg-gradient-to-br from-card via-card to-primary/5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <span className="flex size-8 items-center justify-center rounded-xl bg-primary/10 font-heading text-xs font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      0{idx + 1}
                    </span>
                    <CheckCircle2Icon className="size-4 text-primary/70 transition-transform group-hover:scale-110" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs leading-relaxed font-medium text-foreground">
                    {fungsi}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PEMBENTUKAN, SUSUNAN PENGURUS & PEMILIHAN PENGURUS LPMK */}
      <div className="space-y-6">
        <div>
          <Badge variant="outline" className="border-primary/30 bg-primary/5 text-primary mb-1">
            Tata Kelola & Organisasi
          </Badge>
          <h2 className="font-heading text-xl font-bold text-foreground md:text-2xl">
            Pembentukan, Susunan Pengurus dan Pemilihan Pengurus LPMK
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* CARD 1: PEMBENTUKAN LPMK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
          >
            <Card className="h-full border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
              <CardHeader className="p-0 pb-4">
                <div className="flex items-center gap-2 text-primary font-bold text-base">
                  <Building2Icon className="size-5" />
                  <CardTitle className="text-lg font-bold">Pembentukan LPMK</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-xs leading-relaxed font-medium text-foreground bg-muted/30 p-4 rounded-xl border border-border/50">
                  LPMK dibentuk atas prakarsa masyarakat dan / atau prakarsa masyarakat yang difasilitasi Pemerintah Kelurahan melalui musyawarah dan mufakat
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* CARD 2: SUSUNAN PENGURUS LPMK */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Card className="h-full border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
              <CardHeader className="p-0 pb-4">
                <div className="flex items-center gap-2 text-primary font-bold text-base">
                  <UsersIcon className="size-5" />
                  <CardTitle className="text-lg font-bold">Susunan Pengurus LPMK</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <p className="text-xs font-semibold text-muted-foreground">
                  Kepengurusan LPMK ditentukan dalam musyawarah, dengan susunan pengurus paling sedikit terdiri atas
                </p>
                <div className="space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-2.5 font-semibold text-foreground">
                      1. Ketua
                    </div>
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-2.5 font-semibold text-foreground">
                      2. Wakil Ketua
                    </div>
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-2.5 font-semibold text-foreground">
                      3. Sekretaris
                    </div>
                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-2.5 font-semibold text-foreground">
                      4. Bendahara
                    </div>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-muted/20 p-3 space-y-2">
                    <span className="font-bold text-primary block">
                      5. Ketua bidang yang terdiri dari :
                    </span>
                    <ul className="grid gap-1.5 text-[11px] text-foreground">
                      {BIDANG_PENGURUS.map((bidang, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-primary font-bold">•</span>
                          <span>{bidang}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CARD 3: PEMILIHAN KETUA LPMK (STRUCTURED GRID + 9 PERSYARATAN) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <Card className="border border-border/80 bg-card p-6 shadow-sm">
            <CardHeader className="p-0 pb-4">
              <div className="flex items-center gap-2 text-primary font-bold text-base">
                <UserCheckIcon className="size-5" />
                <CardTitle className="text-lg font-bold">Pemilihan Ketua LPMK</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0 space-y-5">
              <div className="grid gap-3 sm:grid-cols-2 text-xs">
                <div className="rounded-xl border border-border/60 bg-muted/20 p-4 leading-relaxed font-medium text-foreground">
                  • Pengurus LPMK dipilih melalui musyawarah yang difasilitasi dan disaksikan oleh Lurah.
                </div>
                <div className="rounded-xl border border-border/60 bg-muted/20 p-4 leading-relaxed font-medium text-foreground">
                  • Peserta Musyawarah terdiri dari unsur Pengurus RT, Pengurus RW, Pengurus PKK, Pengurus Karang Taruna, Pengurus Lembaga Sosial Kemasyarakatan lainnya dan Tokoh Masyarakat yang memenuhi keterwakilan masyarakat dengan memperhatikan keadilan dan kesetaraan gender
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-heading text-sm font-bold text-foreground">
                  Untuk dapat menjadi pengurus LPMK harus memenuhi persyaratan sebagai berikut:
                </h4>
                <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {PERSYARATAN_PENGURUS.map((syarat, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-background p-3 text-xs text-foreground transition-all hover:border-primary/30 hover:bg-muted/10"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-[10px]">
                        {sIdx + 1}
                      </span>
                      <p className="leading-relaxed font-medium">{syarat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CARD 4: TAHAPAN PEMILIHAN PENGURUS LPMK (TIMELINE / STEPPER GRID LAYOUT) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card className="border border-border/80 bg-card p-6 shadow-sm">
            <CardHeader className="p-0 pb-4">
              <div className="flex items-center gap-2 text-primary font-bold text-base">
                <ListOrderedIcon className="size-5" />
                <CardTitle className="text-lg font-bold">Tahapan Pemilihan Pengurus LPMK</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {TAHAPAN_PEMILIHAN.map((tahap, tIdx) => (
                  <div
                    key={tIdx}
                    className="relative flex flex-col justify-between rounded-xl border border-primary/20 bg-gradient-to-b from-primary/5 via-card to-card p-4 transition-all hover:border-primary/40 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <span className="flex size-7 items-center justify-center rounded-lg bg-primary font-heading text-xs font-bold text-primary-foreground">
                        {tIdx + 1}
                      </span>
                      <p className="text-xs font-medium text-foreground leading-relaxed">
                        {tahap}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
