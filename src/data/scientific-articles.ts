export interface ScientificArticle {
  id: string;
  title: string;
  researchers: string;
  institution: string;
  year: string;
  abstract: string;
  pdfUrl: string;
  fileSize: string;
  pageCount: number;
  categoryTag: string;
  keywords: string[];
}

export const scientificArticles: ScientificArticle[] = [
  {
    id: "art-01",
    title: "Kajian Strategis Pengembangan Kampung Tematik Jamu Wonolopo Berbasis Pemberdayaan Masyarakat",
    researchers: "KKN Tematik Kelompok 47 Unisvet",
    institution: "Universitas IVET Semarang",
    year: "2026",
    abstract:
      "Penelitian ini mengkaji strategi pengembangan potensi Kampung Tematik Jamu Wonolopo sebagai destinasi wisata agrowisata dan tanaman obat keluarga unggulan di Kota Semarang. Analisis mencakup pemetaan produk lokal unggulan, strategi branding digital melalui website resmi kelurahan, serta pendampingan kelembagaan kelompok tani dan pengrajin jamu tradisional.",
    pdfUrl: "/assets/documents/artikel-ilmiah-wonolopo.pdf",
    fileSize: "2.4 MB",
    pageCount: 14,
    categoryTag: "Pemberdayaan & Ekonomi",
    keywords: ["Kampung Tematik", "Jamu Wonolopo", "Pemberdayaan Masyarakat", "Unisvet"],
  },
  {
    id: "art-02",
    title: "Efektivitas Pendampingan Digitalisasi UMKM dan Tata Kelola Informasi Publik Kelurahan Wonolopo",
    researchers: "Tim Peneliti Fakultas Saintek Unisvet",
    institution: "Universitas IVET Semarang",
    year: "2026",
    abstract:
      "Studi ilmiah ini mengukur dampak penerapan portal informasi publik terpadu dan sistem pendampingan usaha mikro warga di Kelurahan Wonolopo. Hasil kajian menunjukkan peningkatan efisiensi akses layanan publik warga serta peningkatan jangkauan pemasaran UMKM herbal lokal.",
    pdfUrl: "/assets/documents/artikel-ilmiah-wonolopo.pdf",
    fileSize: "1.8 MB",
    pageCount: 10,
    categoryTag: "Teknologi & Tata Kelola",
    keywords: ["Digitalisasi UMKM", "Smart City", "Layanan Publik", "Semarang"],
  },
  {
    id: "art-03",
    title: "Pemetaan Tata Guna Lahan dan Konservasi Lingkungan Wilayah Kelurahan Wonolopo",
    researchers: "Tim Pengabdian Masyarakat Unisvet",
    institution: "Universitas IVET Semarang",
    year: "2025",
    abstract:
      "Dokumen kajian analisis geospasial dan lingkungan hidup mengenai potensi daerah aliran sungai, kawasan hijau, serta mitigasi kebencanaan berbasis partisipasi warga di kawasan Kelurahan Wonolopo Kecamatan Mijen.",
    pdfUrl: "/assets/documents/artikel-ilmiah-wonolopo.pdf",
    fileSize: "3.1 MB",
    pageCount: 18,
    categoryTag: "Lingkungan & Geospasial",
    keywords: ["Geospasial", "Konservasi", "Lingkungan Hidup", "Mijen"],
  },
];
