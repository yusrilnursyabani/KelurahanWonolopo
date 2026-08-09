import type { ServiceDetail } from "@/types/content";

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "domisili",
    summary:
      "Layanan penerbitan surat keterangan domisili untuk kebutuhan administrasi pendidikan, pekerjaan, dan layanan publik lainnya.",
    requirements: [
      { id: "dom-1", label: "Fotokopi KTP pemohon" },
      { id: "dom-2", label: "Fotokopi Kartu Keluarga" },
      { id: "dom-3", label: "Pengantar RT/RW" },
    ],
    steps: [
      { step: 1, title: "Pengajuan berkas", description: "Warga menyerahkan berkas persyaratan ke loket pelayanan." },
      { step: 2, title: "Verifikasi data", description: "Petugas memverifikasi kesesuaian data kependudukan." },
      { step: 3, title: "Penerbitan surat", description: "Surat domisili diterbitkan dan ditandatangani pejabat berwenang." },
    ],
    duration: "1 hari kerja",
    cost: "Gratis",
    location: "Loket Pelayanan Kelurahan Wonolopo",
    notes: ["Berkas lengkap mempercepat proses layanan."],
  },
  {
    slug: "pengaduan",
    summary:
      "Layanan pengaduan masyarakat untuk menyampaikan keluhan, aspirasi, atau laporan terkait layanan publik dan lingkungan.",
    requirements: [
      { id: "ad-1", label: "Identitas pelapor (KTP/KK)" },
      { id: "ad-2", label: "Uraian kronologis pengaduan" },
      { id: "ad-3", label: "Dokumentasi pendukung (jika ada)" },
    ],
    steps: [
      { step: 1, title: "Registrasi laporan", description: "Pelapor mengisi formulir pengaduan di kelurahan atau kanal resmi." },
      { step: 2, title: "Klasifikasi aduan", description: "Aduan ditelaah dan diklasifikasikan sesuai jenis permasalahan." },
      { step: 3, title: "Tindak lanjut", description: "Kelurahan berkoordinasi dengan pihak terkait untuk penyelesaian." },
      { step: 4, title: "Umpan balik", description: "Pelapor menerima informasi status penanganan aduan." },
    ],
    duration: "2-5 hari kerja (tergantung kasus)",
    cost: "Gratis",
    location: "Meja Pengaduan / Kanal Resmi Kelurahan",
  },
  {
    slug: "pbb",
    summary:
      "Layanan informasi dan konsultasi pembayaran Pajak Bumi dan Bangunan (PBB) untuk warga kelurahan.",
    requirements: [
      { id: "pbb-1", label: "SPPT PBB tahun berjalan" },
      { id: "pbb-2", label: "Data objek pajak" },
    ],
    steps: [
      { step: 1, title: "Konsultasi awal", description: "Warga berkonsultasi terkait nominal, jatuh tempo, atau kendala pembayaran." },
      { step: 2, title: "Validasi data", description: "Petugas mencocokkan data objek pajak dengan dokumen." },
      { step: 3, title: "Arahan pembayaran", description: "Warga diarahkan ke kanal pembayaran resmi yang tersedia." },
    ],
    duration: "30-60 menit",
    cost: "Gratis (di luar kewajiban pajak)",
    location: "Loket Pelayanan PBB Kelurahan",
  },
  {
    slug: "disdukcapil",
    summary:
      "Layanan pendampingan administrasi kependudukan seperti KTP, KK, akta, dan dokumen sipil lainnya melalui koordinasi Disdukcapil.",
    requirements: [
      { id: "duk-1", label: "Dokumen sesuai jenis pengajuan" },
      { id: "duk-2", label: "KTP/KK pemohon" },
      { id: "duk-3", label: "Formulir layanan kependudukan" },
    ],
    steps: [
      { step: 1, title: "Konsultasi layanan", description: "Warga menentukan jenis layanan kependudukan yang dibutuhkan." },
      { step: 2, title: "Pemeriksaan berkas", description: "Petugas memeriksa kelengkapan dokumen administrasi." },
      { step: 3, title: "Pengajuan ke Disdukcapil", description: "Berkas diteruskan melalui mekanisme koordinasi resmi." },
      { step: 4, title: "Informasi hasil", description: "Warga diinformasikan saat dokumen telah selesai diproses." },
    ],
    duration: "Mengikuti SLA Disdukcapil",
    cost: "Gratis",
    location: "Loket Administrasi Kelurahan",
  },
  {
    slug: "kia",
    summary:
      "Layanan pengurusan Kartu Identitas Anak (KIA) untuk mendukung administrasi anak usia 0-17 tahun belum menikah.",
    requirements: [
      { id: "kia-1", label: "Fotokopi Akta Kelahiran anak" },
      { id: "kia-2", label: "Fotokopi KK orang tua" },
      { id: "kia-3", label: "Pas foto anak (jika diperlukan)" },
    ],
    steps: [
      { step: 1, title: "Penyerahan berkas", description: "Orang tua/wali menyerahkan berkas persyaratan ke kelurahan." },
      { step: 2, title: "Verifikasi", description: "Data anak diverifikasi sesuai dokumen kependudukan." },
      { step: 3, title: "Proses penerbitan", description: "Berkas diteruskan untuk proses penerbitan KIA." },
    ],
    duration: "3-7 hari kerja",
    cost: "Gratis",
    location: "Loket Layanan Kependudukan",
  },
  {
    slug: "umi-jm",
    summary:
      "Program layanan pemberdayaan ekonomi masyarakat melalui pendampingan usaha mikro, inovasi produk, dan jejaring pemasaran.",
    requirements: [
      { id: "umj-1", label: "Data pelaku usaha / calon peserta" },
      { id: "umj-2", label: "Deskripsi usaha atau rencana usaha" },
    ],
    steps: [
      { step: 1, title: "Pendaftaran peserta", description: "Peserta mendaftar melalui kelurahan sesuai jadwal program." },
      { step: 2, title: "Asesmen kebutuhan", description: "Tim melakukan pemetaan kebutuhan pembinaan usaha." },
      { step: 3, title: "Pendampingan", description: "Peserta mengikuti pelatihan dan mentoring berkala." },
    ],
    duration: "Program berkala",
    cost: "Gratis",
    location: "Balai Kelurahan / Lokasi Pelatihan",
  },
  {
    slug: "artikel-ilmiah",
    summary:
      "Publikasi karya ilmiah, jurnal penelitian, dan kajian akademis mengenai potensi wilayah, inovasi masyarakat, dan pembangunan Kelurahan Wonolopo.",
    requirements: [
      { id: "art-1", label: "Akses terbuka (Open Access) untuk seluruh warga & akademisi" },
      { id: "art-2", label: "Format publikasi dokumen PDF interaktif" },
    ],
    steps: [
      { step: 1, title: "Pilih Artikel", description: "Cari dan pilih judul artikel atau jurnal riset yang diinginkan." },
      { step: 2, title: "Pratinjau PDF", description: "Klik tombol 'Lihat' untuk membaca full dokumen PDF langsung di halaman web." },
      { step: 3, title: "Unduh Dokumen", description: "Klik tombol 'Unduh' untuk menyimpan salinan PDF ke perangkat Anda." },
    ],
    duration: "Akses 24 Jam",
    cost: "Gratis (Publikasi Terbuka)",
    location: "Portal Website Kelurahan Wonolopo",
  },
];

export function getServiceDetailBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((item) => item.slug === slug);
}
