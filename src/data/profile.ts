import type { ProfileSection } from "@/types/content";

export const profileSections: ProfileSection[] = [
  {
    id: "visi-misi",
    title: "Visi dan Misi",
    content: [
      "Visi Kelurahan Wonolopo menyelaraskan pembangunan wilayah dengan visi Kota Semarang.",
      "Visi:",
      "\"Terwujudnya Kota Semarang yang SEMAKIN HEBAT berlandaskan PANCASILA dalam Bingkai NKRI yang Ber-Bhineka Tunggal Ika.\"",
      "Misi:",
      "1. Meningkatkan kualitas dan kapasitas sumber daya manusia yang unggul, produktif, serta berkeadilan sosial.",
      "2. Meningkatkan potensi ekonomi lokal yang berdaya saing melalui riset, inovasi, dan pembangunan industri yang berlandaskan demokrasi ekonomi Pancasila.",
      "3. Menjamin kebebasan masyarakat dalam menjalankan ibadah, pemenuhan hak dasar, perlindungan sosial, dan penghormatan terhadap hak asasi manusia secara adil.",
      "4. Mewujudkan infrastruktur yang berkualitas dan berwawasan lingkungan guna mendukung kemajuan Kota Semarang.",
      "5. Menjalankan reformasi birokrasi secara dinamis serta menyusun produk hukum yang selaras dengan nilai-nilai Pancasila dalam kerangka Negara Kesatuan Republik Indonesia."
    ],
  },
  {
    id: "geografis",
    title: "Geografis dan Penduduk",
    content: [
      "Kelurahan Wonolopo berada di wilayah Kecamatan Mijen, Kota Semarang, Provinsi Jawa Tengah dengan luas wilayah 495,35 Ha.",
      "Batas Wilayah Kelurahan Wonolopo adalah sebagai berikut:",
      "- Utara: Kelurahan Ngadirgo",
      "- Selatan: Kelurahan Wonoplumbon",
      "- Barat: Kelurahan Jatisari",
      "- Timur: Kelurahan Mijen",
      "Pada aspek kependudukan per 31 Desember 2024, Kelurahan Wonolopo memiliki total penduduk sebanyak 11.279 jiwa, yang terdiri dari 5.605 jiwa penduduk laki-laki dan 5.674 jiwa penduduk perempuan, yang tersebar di 3.686 Kepala Keluarga (KK).",
      "Pekerjaan mayoritas masyarakat Kelurahan Wonolopo adalah di sektor Swasta, dengan jumlah warga miskin tercatat sebanyak 381 KK."
    ],
  },
  {
    id: "pemerintahan",
    title: "Struktur Pemerintahan",
    content: [
      "Pelayanan publik dan administrasi di Kelurahan Wonolopo dipimpin oleh Lurah didukung oleh perangkat kelurahan, staff, serta pengurus RT/RW setempat.",
      "Struktur Pemerintahan Kelurahan Wonolopo:",
      "- Lurah: Dra. Rina Sugimurwani, S.IP., M.Si.",
      "- Sekretaris Kelurahan: Arista Andriana, S.E.",
      "- Kepala Seksi Pembangunan: Rodliyahi, S.E.",
      "- Kepala Seksi Perekonomian dan Kesejahteraan Sosial: Erna Murtiningsih, S.E.",
      "- Kepala Seksi Pemerintahan, Keamanan, dan Ketertiban: Edi Wibowo, A.Md.",
      "- Staff IT: Nur Wakhit, A.Md.Kom.",
      "- Pengelola Teknologi Informasi: Hilda Nisrina Azmi, A.Md.",
      "- Staff Pengelola Data Belanja dan Laporan Keuangan: Diana Yuliani, A.Md.",
      "- Tenaga Kebersihan: Aditya Rahman"
    ],
  },
  {
    id: "sarana-prasarana",
    title: "Sarana dan Prasarana",
    content: [
      "Belum tersedia informasi rinci mengenai sarana dan prasarana pada website resmi Kelurahan Wonolopo.",
    ],
  },
  {
    id: "maps",
    title: "Peta Wilayah",
    content: [
      "Menampilkan lokasi Kantor Kelurahan Wonolopo menggunakan Google Maps.",
    ],
  },
];

export const governmentStructure = {
  lurah: {
    id: "lurah",
    position: "LURAH WONOLOPO",
    name: "Dra. RINA SUGIMURWANI, S.IP, M.Si",
    department: "Pimpinan Utama Kelurahan",
  },
  branches: [
    {
      id: "branch-pembangunan",
      node: {
        id: "kasie-pembangunan",
        position: "KASIE PEMBANGUNAN",
        name: "RODLIYAH, S.E",
        role: "Pembangunan & Infrastruktur Wilayah",
      },
      subNode: {
        id: "kasie-kesra",
        position: "KASIE PEREKONOMIAN DAN KESEJAHTERAAN SOSIAL",
        name: "ERNA MURTININGSIH, S.E",
        role: "Perekonomian & Kesejahteraan Sosial",
        subNode: {
          id: "pengelola-ti",
          position: "PENGELOLA TEKNOLOGI INFORMASI",
          name: "HILDA NISRINA AZMI, A.md",
          role: "Pengelolaan Data & Informasi Digital",
        },
      },
    },
    {
      id: "branch-pemerintahan",
      node: {
        id: "kasie-pemerintahan",
        position: "KASIE PEMERINTAHAN KEAMANAN DAN KETERTIBAN",
        name: "EDI WIBOWO, A.Md",
        role: "Keamanan, Ketertiban & Pemerintahan",
      },
      subNode: {
        id: "tenaga-kebersihan",
        position: "TENAGA KEBERSIHAN",
        name: "ADITYA RAHMAN",
        role: "Pemeliharaan Sarana & Kebersihan Lingkungan",
      },
    },
    {
      id: "branch-sekretariat",
      node: {
        id: "sekretaris-kelurahan",
        position: "SEKRETARIS KELURAHAN",
        name: "ARISTA ANDRIANA, S.E",
        role: "Koordinator Administrasi & Operasional",
      },
      subNode: {
        id: "staff-it",
        position: "STAFF IT",
        name: "NUR WAKHIT, A.md. Kom",
        role: "Sistem Informasi & Infrastruktur Jaringan",
        subNode: {
          id: "staff-keuangan",
          position: "STAFF PENGELOLA DATA BELANJA DAN LAPORAN KEUANGAN",
          name: "DIANA YULIANI, A.md",
          role: "Pengelola Keuangan & Anggaran",
        },
      },
    },
  ],
  lembagaRT: {
    title: "Koordinasi RT/RW & Lembaga Kemasyarakatan",
    description: "Wadah penampungan sinergi pengurus RT/RW setempat serta lembaga kemasyarakatan dalam memajukan lingkungan Kelurahan Wonolopo.",
    stats: [
      { label: "Rukun Warga (RW)", count: "10 RW", desc: "Wilayah Pembina Rukun Warga" },
      { label: "Rukun Tetangga (RT)", count: "54 RT", desc: "Wilayah Unit Pelayanan Warga" },
      { label: "Lembaga Kemasyarakatan", count: "LPMK, PKK, Karang Taruna, FKK", desc: "Mitra Strategis Kelurahan" },
    ],
  },
};

export const geographyDemographics = {
  headerNote: "Data per 31 Desember 2024",
  overview: {
    luasWilayah: "495,35 Ha",
    kecamatan: "Mijen",
    kota: "Semarang",
    provinsi: "Jawa Tengah",
  },
  demographics: {
    totalPenduduk: "11.279",
    totalPendudukNum: 11279,
    lakiLaki: "5.605",
    lakiLakiNum: 5605,
    perempuan: "5.674",
    perempuanNum: 5674,
    jumlahKK: "3.686",
    jumlahKKNum: 3686,
    wajibKTP: "8.183",
    rekamWajibKTP: "8.035",
  },
  economy: {
    mataPencaharianMayoritas: "Sektor Swasta",
    wargaMiskinKK: "381",
    wargaMiskinKKNum: 381,
  },
  boundaries: {
    utara: "Kelurahan Ngadirgo",
    selatan: "Kelurahan Wonoplumbon",
    barat: "Kelurahan Jatisari",
    timur: "Kelurahan Mijen",
  },
};

export const visionMissionData = {
  vision: {
    title: "Visi Kota Semarang & Kelurahan Wonolopo",
    quote: "Terwujudnya Kota Semarang yang SEMAKIN HEBAT berlandaskan PANCASILA dalam Bingkai NKRI yang Ber-Bhinneka Tunggal Ika.",
    subtitle: "Landasan Utama Pembangunan dan Pelayanan Publik Kelurahan Wonolopo",
  },
  missions: [
    {
      id: 1,
      number: "01",
      tag: "SDM & Kesejahteraan",
      title: "Peningkatan Kualitas SDM",
      description: "Meningkatkan kualitas dan kapasitas sumber daya manusia yang unggul, produktif, serta berkeadilan sosial.",
      highlights: ["Pendidikan & Keterampilan", "Produktivitas Warga", "Pemberdayaan Sosial"],
    },
    {
      id: 2,
      number: "02",
      tag: "Ekonomi & Inovasi",
      title: "Pengembangan Ekonomi Lokal",
      description: "Meningkatkan potensi ekonomi lokal yang berdaya saing melalui riset, inovasi, dan pembangunan industri yang berlandaskan demokrasi ekonomi Pancasila.",
      highlights: ["Inovasi UMKM", "Daya Saing Lokal", "Demokrasi Ekonomi"],
    },
    {
      id: 3,
      number: "03",
      tag: "Hak Dasar & Keagamaan",
      title: "Jaminan Hak Dasar & Kebebasan Ibadah",
      description: "Menjamin kebebasan masyarakat dalam menjalankan ibadah, pemenuhan hak dasar, perlindungan sosial, dan penghormatan terhadap hak asasi manusia secara adil.",
      highlights: ["Perlindungan Sosial", "Hak Asasi Manusia", "Harmoni Warga"],
    },
    {
      id: 4,
      number: "04",
      tag: "Infrastruktur & Lingkungan",
      title: "Infrastruktur Berwawasan Lingkungan",
      description: "Mewujudkan infrastruktur yang berkualitas dan berwawasan lingkungan guna mendukung kemajuan Kota Semarang.",
      highlights: ["Sarana Publik", "Pembangunan Hijau", "Kelestarian Wilayah"],
    },
    {
      id: 5,
      number: "05",
      tag: "Reformasi & Hukum",
      title: "Reformasi Birokrasi & Tata Kelola",
      description: "Menjalankan reformasi birokrasi secara dinamis serta menyusun produk hukum yang selaras dengan nilai-nilai Pancasila dalam kerangka Negara Kesatuan Republik Indonesia.",
      highlights: ["Pelayanan Transparan", "Birokrasi Dinamis", "Nilai-Nilai Pancasila"],
    },
  ],
};

export const facilitiesData = {
  header: {
    title: "Sarana dan Prasarana Kelurahan Wonolopo",
    subtitle: "Daftar sarana fisik, prasarana umum, tempat ibadah, fasilitas pendidikan, dan pelayanan kesehatan masyarakat.",
  },
  categories: [
    {
      id: "umum",
      title: "Prasarana Umum & Kemasyarakatan",
      description: "Fasilitas olahraga, seni budaya, dan ruang pertemuan warga.",
      iconName: "Trophy",
      colorTheme: "amber",
      items: [
        { name: "Fasilitas Olahraga", count: 3, unit: "buah" },
        { name: "Kesenian & Budaya", count: 1, unit: "buah" },
        { name: "Balai Pertemuan", count: 2, unit: "buah" },
      ],
    },
    {
      id: "ibadah",
      title: "Prasarana Tempat Ibadah",
      description: "Sarana ibadah bagi seluruh umat beragama di Kelurahan Wonolopo.",
      iconName: "Landmark",
      colorTheme: "emerald",
      items: [
        { name: "Masjid", count: 11, unit: "buah" },
        { name: "Mushola", count: 21, unit: "buah" },
        { name: "Gereja", count: 4, unit: "buah" },
        { name: "Pura", count: 0, unit: "buah", isSubtle: true },
        { name: "Vihara", count: 0, unit: "buah", isSubtle: true },
        { name: "Klenteng", count: 0, unit: "buah", isSubtle: true },
      ],
    },
    {
      id: "pendidikan",
      title: "Prasarana Pendidikan",
      description: "Fasilitas pendidikan dari jenjang usia dini hingga perguruan tinggi.",
      iconName: "GraduationCap",
      colorTheme: "blue",
      items: [
        { name: "PAUD", count: 1, unit: "buah" },
        { name: "TK", count: 4, unit: "buah" },
        { name: "SD", count: 3, unit: "buah" },
        { name: "SMP", count: 6, unit: "buah" },
        { name: "SMA", count: 4, unit: "buah" },
        { name: "Perguruan Tinggi", count: 1, unit: "buah" },
      ],
    },
    {
      id: "kesehatan",
      title: "Prasarana Kesehatan",
      description: "Fasilitas pelayanan kesehatan masyarakat dan posyandu.",
      iconName: "HeartPulse",
      colorTheme: "rose",
      items: [
        { name: "Puskesmas", count: 1, unit: "buah" },
        { name: "UKBM / Posyandu", count: 15, unit: "buah" },
        { name: "Poliklinik", count: 0, unit: "buah", isSubtle: true },
      ],
    },
  ],
};

export const infographicsData = {
  headerNote: "Data per 31 Desember 2024",
  summary: {
    totalPenduduk: "11.279",
    totalPendudukNum: 11279,
    lakiLaki: "5.605",
    lakiLakiNum: 5605,
    perempuan: "5.674",
    perempuanNum: 5674,
    jumlahKK: "3.686",
    jumlahKKNum: 3686,
    wajibKTP: "8.183",
    wajibKTPNum: 8183,
    rekamWajibKTP: "8.035",
    rekamWajibKTPNum: 8035,
    dinamika: {
      perpindahan: 53,
      meninggal: 48,
      perubahanData: 8627,
    },
  },
  religion: [
    { name: "Islam", count: 10612, percentage: 94.09, color: "#10b981" },
    { name: "Kristen", count: 388, percentage: 3.44, color: "#3b82f6" },
    { name: "Katholik", count: 269, percentage: 2.38, color: "#8b5cf6" },
    { name: "Hindu", count: 6, percentage: 0.05, color: "#f59e0b" },
    { name: "Kepercayaan thd Tuhan YME", count: 4, percentage: 0.04, color: "#ec4899" },
    { name: "Budha", count: 0, percentage: 0, color: "#9ca3af", isSubtle: true },
    { name: "Konghucu", count: 0, percentage: 0, color: "#6b7280", isSubtle: true },
  ],
  maritalStatus: [
    { name: "Belum Kawin", count: 5131, percentage: 45.49, color: "#3b82f6" },
    { name: "Kawin", count: 5319, percentage: 47.16, color: "#10b981" },
    { name: "Cerai Mati", count: 506, percentage: 4.49, color: "#f59e0b" },
    { name: "Cerai Hidup", count: 323, percentage: 2.86, color: "#ef4444" },
  ],
  ageGroups: [
    { age: "0-4 th", count: 732 },
    { age: "5-9 th", count: 971 },
    { age: "10-14 th", count: 984 },
    { age: "15-19 th", count: 968 },
    { age: "20-24 th", count: 808 },
    { age: "25-29 th", count: 765 },
    { age: "30-34 th", count: 846 },
    { age: "35-39 th", count: 906 },
    { age: "40-44 th", count: 1033 },
    { age: "45-49 th", count: 864 },
    { age: "50-54 th", count: 655 },
    { age: "55-59 th", count: 565 },
    { age: "60-64 th", count: 450 },
    { age: "65-69 th", count: 361 },
    { age: "70-74 th", count: 202 },
    { age: "75+ th", count: 169 },
  ],
  education: [
    { name: "Tidak / Belum Sekolah", count: 3590 },
    { name: "Belum Tamat SD", count: 1719 },
    { name: "Tamat SD", count: 593 },
    { name: "SLTP", count: 1294 },
    { name: "SLTA", count: 2992 },
    { name: "D1-D2", count: 35 },
    { name: "D3", count: 294 },
    { name: "S1", count: 727 },
    { name: "S2", count: 32 },
    { name: "S3", count: 3 },
  ],
  bloodType: [
    { type: "A", count: 241, details: "A+: 1, A-: 3" },
    { type: "B", count: 342, details: "B+: 8, B-: 0" },
    { type: "O", count: 545, details: "O+: 4, O-: 7" },
    { type: "AB", count: 86, details: "AB+: 2, AB-: 0" },
    { type: "Tidak Diketahui", count: 10040, details: "Belum terdata rhesus" },
  ],
  occupations: [
    { name: "Belum / Tidak Bekerja", count: 3966 },
    { name: "Mengurus Rumah Tangga", count: 1351 },
    { name: "Pelajar / Mahasiswa", count: 1215 },
    { name: "Wiraswasta", count: 627 },
    { name: "Guru", count: 111 },
    { name: "Pensiunan", count: 55 },
    { name: "Perawat", count: 19 },
    { name: "Perdagangan", count: 7 },
    { name: "Nelayan", count: 2 },
  ],
  populationGrowth: [
    { year: "2020", growth: "2%", births: 172 },
    { year: "2021", growth: "2%", births: 181 },
    { year: "2022", growth: "1%", births: 150 },
    { year: "2023", growth: "1%", births: 130 },
    { year: "2024", growth: "1%", births: 99 },
  ],
  schoolAgeCategories: [
    { category: "3-4 th (PAUD/TK)", count: 353 },
    { category: "5 th (TK B)", count: 194 },
    { category: "6-11 th (SD)", count: 1178 },
    { category: "12-14 th (SMP)", count: 583 },
    { category: "15-17 th (SMA/SMK)", count: 606 },
    { category: "18-22 th (Perguruan Tinggi)", count: 886 },
  ],
};

export function getProfileSectionById(sectionId: string): ProfileSection | undefined {
  return profileSections.find((section) => section.id === sectionId);
}


