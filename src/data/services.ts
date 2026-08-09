import type { ServiceCategoryKey, ServiceItem } from "@/types/content";

export interface ServiceCategoryInfo {
  id: Exclude<ServiceCategoryKey, "all">;
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
  colorScheme: {
    badge: string;
    iconBg: string;
    border: string;
    accentBg: string;
  };
}

export const serviceCategories: ServiceCategoryInfo[] = [
  {
    id: "administrasi-kependudukan",
    title: "Administrasi & Kependudukan",
    shortTitle: "Kependudukan",
    description: "Pengurusan surat domisili, KTP, KK, KIA, serta koordinasi layanan kependudukan Dispendukcapil.",
    iconName: "FileText",
    colorScheme: {
      badge: "bg-blue-100/90 text-blue-800 border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800/60",
      iconBg: "bg-blue-500/12 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300",
      border: "hover:border-blue-400/60 dark:hover:border-blue-500/60",
      accentBg: "bg-blue-50/50 dark:bg-blue-950/20",
    },
  },
  {
    id: "perpajakan-perizinan",
    title: "Perpajakan & Perizinan",
    shortTitle: "Pajak & Perizinan",
    description: "Layanan PBB Kelurahan, E-PBB, E-SPPT, Kalkulator BPHTB, DPMPTSP, SIMBG, hingga OSS Nasional.",
    iconName: "Receipt",
    colorScheme: {
      badge: "bg-amber-100/90 text-amber-800 border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800/60",
      iconBg: "bg-amber-500/12 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300",
      border: "hover:border-amber-400/60 dark:hover:border-amber-500/60",
      accentBg: "bg-amber-50/50 dark:bg-amber-950/20",
    },
  },
  {
    id: "kesehatan-sosial",
    title: "Kesehatan & Sosial",
    shortTitle: "Kesehatan & Sosial",
    description: "Pendaftaran antrean Puskesmas (E-Puskesmas), pemantauan stunting kota, serta pemberdayaan UMI-JM.",
    iconName: "Hospital",
    colorScheme: {
      badge: "bg-emerald-100/90 text-emerald-800 border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800/60",
      iconBg: "bg-emerald-500/12 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300",
      border: "hover:border-emerald-400/60 dark:hover:border-emerald-500/60",
      accentBg: "bg-emerald-50/50 dark:bg-emerald-950/20",
    },
  },
  {
    id: "pengaduan-informasi",
    title: "Pengaduan & Informasi Publik",
    shortTitle: "Pengaduan & Info",
    description: "Mekanisme pengaduan warga kelurahan, Artikel & Jurnal Ilmiah, portal PPID, JDIH, dan Saber Pungli.",
    iconName: "Megaphone",
    colorScheme: {
      badge: "bg-rose-100/90 text-rose-800 border-rose-200 dark:bg-rose-950/70 dark:text-rose-300 dark:border-rose-800/60",
      iconBg: "bg-rose-500/12 text-rose-600 dark:bg-rose-500/20 dark:text-rose-300",
      border: "hover:border-rose-400/60 dark:hover:border-rose-500/60",
      accentBg: "bg-rose-50/50 dark:bg-rose-950/20",
    },
  },
  {
    id: "portal-smartcity",
    title: "Portal Kota & Smart City",
    shortTitle: "Portal & Smart City",
    description: "Akses langsung ke Portal Resmi Pemerintah Kota Semarang dan Smart City Dashboard terpadu.",
    iconName: "Globe",
    colorScheme: {
      badge: "bg-indigo-100/90 text-indigo-800 border-indigo-200 dark:bg-indigo-950/70 dark:text-indigo-300 dark:border-indigo-800/60",
      iconBg: "bg-indigo-500/12 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300",
      border: "hover:border-indigo-400/60 dark:hover:border-indigo-500/60",
      accentBg: "bg-indigo-50/50 dark:bg-indigo-950/20",
    },
  },
];

export const serviceCatalog: ServiceItem[] = [
  // Kategori 1: Administrasi & Kependudukan
  {
    id: "srv-domisili",
    title: "Permohonan Pembuatan Domisili Tempat Tinggal",
    slug: "domisili",
    description: "Pengajuan permohonan pembuatan surat keterangan domisili tempat tinggal bagi warga Kelurahan Wonolopo.",
    category: "administrasi-kependudukan",
    isExternal: false,
    iconName: "Home",
    badgeText: "Kelurahan",
  },
  {
    id: "srv-disdukcapil",
    title: "Layanan Dispendukcapil",
    slug: "disdukcapil",
    description: "Pendampingan dan koordinasi pengurusan dokumen kependudukan seperti KTP, KK, dan akta sipil.",
    category: "administrasi-kependudukan",
    isExternal: false,
    iconName: "Users",
    badgeText: "Kelurahan",
  },
  {
    id: "srv-kia",
    title: "Kartu Identitas Anak (KIA)",
    slug: "kia",
    description: "Kartu Identitas Anak (KIA) merupakan identitas resmi bagi anak berusia 0 hingga 17 tahun belum menikah.",
    category: "administrasi-kependudukan",
    isExternal: false,
    iconName: "Baby",
    badgeText: "Kelurahan",
  },

  // Kategori 2: Perpajakan & Perizinan (Internal & Eksternal Semarang)
  {
    id: "srv-pbb",
    title: "Layanan PBB",
    slug: "pbb",
    description: "Informasi, pemutakhiran data, dan konsultasi pembayaran Pajak Bumi dan Bangunan (PBB) di loket kelurahan.",
    category: "perpajakan-perizinan",
    isExternal: false,
    iconName: "Receipt",
    badgeText: "Kelurahan",
  },
  {
    id: "srv-epbb",
    title: "E-PBB Kota Semarang",
    url: "https://e-pbb.semarangkota.go.id/",
    description: "Portal pelayanan dan pengecekan tagihan Pajak Bumi dan Bangunan (PBB-P2) Kota Semarang secara online.",
    category: "perpajakan-perizinan",
    isExternal: true,
    iconName: "CreditCard",
    badgeText: "Eksternal Semarang",
  },
  {
    id: "srv-esppt",
    title: "E-SPPT PBB Kota Semarang",
    url: "https://e-spptpbb.semarangkota.go.id/",
    description: "Cetak dokumen SPPT PBB-P2 secara mandiri dan verifikasi keabsahan lembar pajak elektronik.",
    category: "perpajakan-perizinan",
    isExternal: true,
    iconName: "FileCheck2",
    badgeText: "Eksternal Semarang",
  },
  {
    id: "srv-bphtb",
    title: "Kalkulator BPHTB",
    url: "https://ebphtb.semarangkota.go.id/kalkulators",
    description: "Simulasi dan perhitungan estimasi Bea Perolehan Hak atas Tanah dan Bangunan Kota Semarang.",
    category: "perpajakan-perizinan",
    isExternal: true,
    iconName: "Calculator",
    badgeText: "Eksternal Semarang",
  },
  {
    id: "srv-dpmptsp",
    title: "DPMPTSP Kota Semarang",
    url: "https://perizinan.semarangkota.go.id/",
    description: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu untuk pengurusan izin usaha & rekomendasi.",
    category: "perpajakan-perizinan",
    isExternal: true,
    iconName: "Building",
    badgeText: "Eksternal Semarang",
  },
  {
    id: "srv-simbg",
    title: "SIMBG Bangunan",
    url: "https://perizinan.semarangkota.go.id/halaman/sistem-perizinan-bangunan-gedung-simbg",
    description: "Sistem Informasi Manajemen Bangunan Gedung untuk permohonan PBG dan Sertifikat Laik Fungsi (SLF).",
    category: "perpajakan-perizinan",
    isExternal: true,
    iconName: "HardHat",
    badgeText: "Eksternal Semarang",
  },
  {
    id: "srv-oss",
    title: "OSS Nasional",
    url: "https://oss.go.id/id",
    description: "Online Single Submission - Sistem perizinan berusaha terintegrasi secara elektronik bagi pelaku usaha.",
    category: "perpajakan-perizinan",
    isExternal: true,
    iconName: "Briefcase",
    badgeText: "Portal Nasional",
  },

  // Kategori 3: Kesehatan & Sosial (Eksternal & Internal)
  {
    id: "srv-puskesmas",
    title: "Antrean Puskesmas",
    url: "https://epuskesmas.semarangkota.go.id/",
    description: "Akses resmi pendaftaran antrean pelayanan kesehatan online dan fasilitas Puskesmas Kota Semarang.",
    category: "kesehatan-sosial",
    isExternal: true,
    iconName: "Hospital",
    badgeText: "Eksternal Semarang",
  },
  {
    id: "srv-stunting",
    title: "Data Stunting",
    url: "https://stunting.semarangkota.go.id/",
    description: "Portal resmi monitoring data, program penanganan, dan pencegahan stunting Kota Semarang.",
    category: "kesehatan-sosial",
    isExternal: true,
    iconName: "HeartPulse",
    badgeText: "Eksternal Semarang",
  },
  {
    id: "srv-umi-jm",
    title: "Pelayanan UMI-JM",
    slug: "umi-jm",
    description: "Program pembinaan usaha mikro warga, inovasi produk lokal Wonolopo, dan fasilitasi jejaring pemasaran.",
    category: "kesehatan-sosial",
    isExternal: false,
    iconName: "Store",
    badgeText: "Kelurahan",
  },

  // Kategori 4: Pengaduan & Informasi Publik (Internal & Eksternal)
  {
    id: "srv-pengaduan",
    title: "Mekanisme Pengaduan",
    slug: "pengaduan",
    description: "Kanal resmi penyampaian aspirasi, saran, dan pengaduan layanan publik warga Kelurahan Wonolopo.",
    category: "pengaduan-informasi",
    isExternal: false,
    iconName: "Megaphone",
    badgeText: "Kelurahan",
  },
  {
    id: "srv-artikel-ilmiah",
    title: "Artikel Ilmiah & Jurnal Penelitian",
    slug: "artikel-ilmiah",
    description: "Kumpulan publikasi karya ilmiah, jurnal penelitian, dan kajian akademis mengenai Kelurahan Wonolopo.",
    category: "pengaduan-informasi",
    isExternal: false,
    iconName: "BookOpen",
    badgeText: "Kelurahan",
  },
  {
    id: "srv-ppid",
    title: "PPID Kota Semarang",
    url: "https://ppid.semarangkota.go.id/",
    description: "Pejabat Pengelola Informasi dan Dokumentasi Kota Semarang untuk transparansi dan keterbukaan informasi.",
    category: "pengaduan-informasi",
    isExternal: true,
    iconName: "Info",
    badgeText: "Eksternal Semarang",
  },
  {
    id: "srv-jdih",
    title: "JDIH Kota Semarang",
    url: "https://jdih.semarangkota.go.id/",
    description: "Jaringan Dokumentasi dan Informasi Hukum untuk pencarian Perda, Perwal, dan produk hukum kota.",
    category: "pengaduan-informasi",
    isExternal: true,
    iconName: "Scale",
    badgeText: "Eksternal Semarang",
  },
  {
    id: "srv-saberpungli",
    title: "Saber Pungli Kota Semarang",
    url: "https://saberpungli.semarangkota.go.id/",
    description: "Portal pelaporan dan pemantauan pencegahan Satuan Tugas Saber Pungli Kota Semarang.",
    category: "pengaduan-informasi",
    isExternal: true,
    iconName: "ShieldAlert",
    badgeText: "Eksternal Semarang",
  },

  // Kategori 5: Portal Kota & Smart City (Eksternal)
  {
    id: "srv-portalsemarang",
    title: "Portal Kota Semarang",
    url: "https://semarangkota.go.id/id",
    description: "Portal utama Pemkot Semarang menyajikan berita resmi, agenda kota, dan layanan publik lintas sektor.",
    category: "portal-smartcity",
    isExternal: true,
    iconName: "Globe",
    badgeText: "Eksternal Semarang",
  },
  {
    id: "srv-smartcity",
    title: "Smart City Dashboard",
    url: "https://smartcity.semarangkota.go.id/web/dashboard",
    description: "Dashboard terpadu integrasi data kota, pemantauan wilayah, dan indikator Semarang Smart City.",
    category: "portal-smartcity",
    isExternal: true,
    iconName: "LayoutDashboard",
    badgeText: "Eksternal Semarang",
  },
];
