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

  // 5 Layanan Administrasi Kependudukan Baru (Portal Apel Surga Semarang)
  {
    slug: "akta-kelahiran",
    summary:
      "Layanan pencatatan kelahiran warga negara Indonesia (WNI) dan Orang Asing (OA) dalam wilayah NKRI serta pengurusan penerbitan kutipan Akta Kelahiran melalui Portal Apel Surga Kota Semarang.",
    onlineUrl: "https://apelsurga.semarangkota.go.id/doLogin/",
    downloads: [
      {
        label: "Formulir SPTJM Kebenaran Data Kelahiran (PDF)",
        url: "/documents/kelahiran/SPTJM KEBENARAN DATA KELAHIRAN - Apabila tidak memiliki surat keterangan lahir.pdf",
        description: "Format resmi SPTJM Kebenaran Data Kelahiran apabila tidak memiliki surat keterangan lahir dari RS/faskes/dokter/bidan.",
      },
      {
        label: "Surat Pernyataan Anak Ibu (Luar Nikah) (PDF)",
        url: "/documents/kelahiran/sp ANAK IBU - Apabila di luar nikah.pdf",
        description: "Format Surat Pernyataan Anak Ibu untuk pencatatan kelahiran anak di luar pernikahan resmi.",
      },
    ],
    requirementSections: [
      {
        id: "wni",
        title: "Pencatatan Kelahiran WNI Dalam Wilayah NKRI",
        items: [
          "Surat keterangan kelahiran dari RS / Puskesmas / faskes / dokter / bidan, nakhoda kapal laut / kapten pesawat, atau dari Kepala Desa / Lurah jika lahir di rumah / tempat lain (kebun, sawah, angkutan umum).",
          "Buku nikah / kutipan akta perkawinan / bukti lain yang sah.",
          "Kartu Keluarga (KK) tempat penduduk terdaftar atau akan didabtarkan sebagai anggota keluarga.",
          "Berita acara dari kepolisian bagi anak yang tidak diketahui asal-usulnya / keberadaan orang tuanya.",
        ],
        notes: [
          "Penduduk dapat membuat SPTJM kebenaran data kelahiran dengan 2 orang saksi jika tidak memenuhi surat keterangan faskes.",
          "Penduduk dapat membuat SPTJM kebenaran pasangan suami istri dengan 2 orang saksi jika tidak memenuhi buku nikah.",
        ],
      },
      {
        id: "oa",
        title: "Pencatatan Kelahiran Orang Asing (OA)",
        items: [
          "Surat keterangan kelahiran dari faskes / dokter / bidan / nakhoda / Lurah.",
          "Buku nikah / kutipan akta perkawinan / bukti sah.",
          "Dokumen Perjalanan resmi.",
          "KTP-el orang tua / KITAP / KITAS / Visa kunjungan.",
        ],
        notes: [
          "Dapat membuat SPTJM kebenaran data kelahiran dan/atau SPTJM kebenaran pasutri dengan 2 orang saksi.",
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: "Penyiapan Berkas Asli",
        description: "Menyiapkan seluruh dokumen persyaratan fisik asli (bukan fotokopi) untuk discan/difoto dengan jelas.",
      },
      {
        step: 2,
        title: "Pengajuan Daring via Apel Surga",
        description: "Buka Portal Apel Surga Semarang (apelsurga.semarangkota.go.id), login akun warga, dan pilih Layanan Akta Kelahiran.",
      },
      {
        step: 3,
        title: "Verifikasi Berkas Disdukcapil",
        description: "Petugas Dispendukcapil memverifikasi keabsahan dokumen dan mengesahkan pencatatan kelahiran.",
      },
      {
        step: 4,
        title: "Penerbitan Kutipan Akta",
        description: "Kutipan Akta Kelahiran diterbitkan secara digital/elektronik ber-QR Code resmi.",
      },
    ],
    duration: "1 - 3 hari kerja",
    cost: "Gratis",
    location: "Daring (Portal Apel Surga) / Loket Administrasi Kelurahan",
    notes: ["Untuk pelayanan daring/online, seluruh dokumen persyaratan yang discan/difoto untuk diunggah HARUS DOKUMEN ASLI."],
  },

  {
    slug: "akta-kematian",
    summary:
      "Layanan pencatatan pelaporan kematian penduduk dalam wilayah NKRI untuk penerbitan Akta Kematian dan pemutakhiran Kartu Keluarga.",
    onlineUrl: "https://apelsurga.semarangkota.go.id/doLogin/",
    downloads: [
      {
        label: "Unduh Form Berkas SPTJM Kematian (PDF)",
        url: "https://sidnok.semarangkota.go.id/get-berkas/1720769569",
        description: "Format resmi SPTJM Kematian dari Dispendukcapil Kota Semarang dengan 2 orang saksi.",
      },
    ],
    requirementSections: [
      {
        id: "persyaratan-kematian",
        title: "Pencatatan Kematian Dalam Wilayah NKRI",
        items: [
          "Surat Kematian dari Dokter (jika meninggal di RS/faskes) / Kelurahan (jika meninggal di rumah) / Surat Kepolisian (identitas tidak jelas) / Salinan Penetapan Pengadilan (hilang/tidak ditemukan jenazah) / Surat Maskapai Penerbangan / Surat Keterangan Kematian dari Perwakilan RI (meninggal di luar NKRI).",
          "Dokumen Perjalanan RI (bagi WNI bukan Penduduk) atau Dokumen Perjalanan bagi Orang Asing.",
          "KK dan KTP-el almarhum/almarhumah yang meninggal dunia.",
          "KK dan KTP-el Pelapor.",
        ],
      },
      {
        id: "kriteria-pelapor",
        title: "Kriteria & Persyaratan Pelapor",
        items: [
          "Ahli Waris (suami/istri, anak) / Keluarga lainnya / Ketua RT setempat.",
          "Berusia minimal 21 tahun atau sudah menikah.",
          "Cakap hukum.",
        ],
      },
      {
        id: "tanpa-database",
        title: "Ketentuan Kematian Tanpa Database KK",
        items: [
          "Dilakukan melalui Penetapan Pengadilan, ATAU",
          "Tanpa Penetapan Pengadilan sepanjang ada dokumen pendukung (Buku Nikah / Akta Perkawinan / KK lama / KTP lama / Ijazah / Paspor) dikuatkan dengan Surat Kematian dari Kelurahan dan SPTJM dengan 2 orang saksi.",
        ],
        downloadUrl: "https://sidnok.semarangkota.go.id/get-berkas/1720769569",
        downloadLabel: "Download Format Berkas SPTJM Kematian (PDF)",
      },
    ],
    steps: [
      {
        step: 1,
        title: "Penyiapan Berkas Kematian",
        description: "Mengurus surat keterangan kematian dari RS/Kelurahan dan melengkapi KK & KTP almarhum serta pelapor.",
      },
      {
        step: 2,
        title: "Unggah Dokumen via Apel Surga",
        description: "Masuk ke portal Apel Surga, pilih layanan Pencatatan Akta Kematian, dan upload dokumen asli.",
      },
      {
        step: 3,
        title: "Verifikasi & Update Status KK",
        description: "Petugas Dispendukcapil memproses penerbitan Akta Kematian dan memperbarui Kartu Keluarga pelapor.",
      },
    ],
    duration: "1 - 3 hari kerja",
    cost: "Gratis",
    location: "Daring (Portal Apel Surga) / Loket Administrasi Kelurahan",
    notes: ["Untuk pelayanan daring/online, dokumen yang diunggah harus dokumen ASLI."],
  },

  {
    slug: "perkawinan-perceraian",
    summary:
      "Layanan pencatatan sipil perkawinan dan perceraian bagi penduduk Non-Muslim WNI dan Orang Asing (OA) di wilayah NKRI untuk penerbitan Akta Perkawinan atau Akta Perceraian resmi.",
    onlineUrl: "https://apelsurga.semarangkota.go.id/doLogin/",
    downloads: [
      {
        label: "Surat Pernyataan Akta Perkawinan Dikuasai Pihak Lain (PDF)",
        url: "/documents/perkawinan-perceraian/SP AKTA KAWIN DIKUASAI PIHAK LAIN - Apabila akta di kuasai pihak lain.pdf",
        description: "Format Surat Pernyataan apabila fisik Kutipan Akta Perkawinan dikuasai oleh pihak lain / mantan pasangan.",
      },
    ],
    requirementSections: [
      {
        id: "perkawinan-wni",
        title: "Pencatatan Perkawinan WNI Dalam Wilayah NKRI",
        items: [
          "Surat keterangan terjadinya perkawinan dari pemuka agama atau penghayat kepercayaan terhadap Tuhan YME.",
          "Kutipan Akta Kelahiran / Surat Kenal Lahir calon mempelai.",
          "Pas foto berdampingan ukuran 4x6 berwarna (background bebas).",
          "KTP-el asli dan Kartu Keluarga (KK) asli.",
          "Bagi janda/duda cerai mati: melampirkan kutipan Akta Kematian pasangan.",
          "Bagi janda/duda cerai hidup: melampirkan Akta Perceraian asli.",
        ],
      },
      {
        id: "perkawinan-oa",
        title: "Pencatatan Perkawinan Orang Asing (OA) di NKRI",
        items: [
          "Surat keterangan perkawinan dari pemuka agama / penghayat kepercayaan.",
          "Pas foto berdampingan ukuran 4x6 berwarna (background bebas).",
          "Dokumen Perjalanan (Paspor) & Surat Keterangan Tempat Tinggal (SKTT) bagi pemegang izin tinggal terbatas.",
          "Izin perkawinan resmi dari negara asal / perwakilan kedutaan negaranya.",
          "Akta Kelahiran terjemahan Bahasa Indonesia tersumpah (Asli), KTP-el Asli, dan KK Asli.",
        ],
      },
      {
        id: "perceraian",
        title: "Pencatatan Perceraian",
        items: [
          "Salinan putusan pengadilan yang telah berkekuatan hukum tetap (BHT).",
          "Kutipan Akta Perkawinan asli, KTP-el asli, dan KK asli.",
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: "Registrasi & Upload Berkas",
        description: "Mengunggah berkas perkawinan/perceraian fisik asli melalui Portal Apel Surga Kota Semarang.",
      },
      {
        step: 2,
        title: "Verifikasi Keabsahan",
        description: "Petugas Dispendukcapil menelaah keabsahan pemberkatan agama / putusan pengadilan BHT.",
      },
      {
        step: 3,
        title: "Penerbitan Akta Sipil",
        description: "Akta Perkawinan / Perceraian disahkan dan diterbitkan beserta pembaruan KTP-el & KK.",
      },
    ],
    duration: "1 - 3 hari kerja",
    cost: "Gratis",
    location: "Daring (Portal Apel Surga) / Loket Administrasi Kelurahan",
    notes: ["Dokumen yang discan/difoto untuk layanan online HARUS DOKUMEN ASLI."],
  },

  {
    slug: "perubahan-biodata-kk",
    summary:
      "Layanan pembaruan data Kartu Keluarga (KK) meliputi pembentukan keluarga baru, penggantian kepala keluarga, pisah KK 1 alamat, perubahan elemen biodata, serta penerbitan ulang KK hilang/rusak.",
    onlineUrl: "https://apelsurga.semarangkota.go.id/doLogin/",
    downloads: [
      {
        label: "Formulir SPTJM Perkawinan/Perceraian Belum Tercatat (F-1.05) (PDF)",
        url: "/documents/kk/SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK BELUM TERCATAT.pdf",
        description: "Surat Pernyataan Tanggung Jawab Mutlak Pasangan Suami Istri/Perceraian belum tercatat (Form F-1.05).",
      },
      {
        label: "SPTJM Penghayat Kepercayaan Terhadap Tuhan YME (PDF)",
        url: "/documents/kk/SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK (SPTJM) SEBAGAI PENGHAYAT KEPERCAYAAN.pdf",
        description: "Formulir SPTJM khusus pembaruan data elemen kependudukan bagi Penghayat Kepercayaan.",
      },
    ],
    requirementSections: [
      {
        id: "keluarga-baru",
        title: "Membentuk Keluarga Baru",
        items: [
          "Kartu Keluarga (KK) lama.",
          "Buku nikah / Akta Perkawinan / Akta Perceraian.",
          "SPTJM perkawinan/perceraian belum tercatat (Form F-1.05) jika belum ada akta resmi.",
          "Surat persetujuan dari istri sebelumnya (apabila suami memiliki istri lebih dari 1).",
        ],
      },
      {
        id: "ganti-kepala-keluarga",
        title: "Penggantian Kepala Keluarga (Kematian)",
        items: [
          "Kutipan Akta Kematian kepala keluarga lama.",
          "Kartu Keluarga (KK) lama.",
        ],
      },
      {
        id: "pisah-kk",
        title: "Pisah KK Dalam 1 Alamat",
        items: [
          "Kartu Keluarga (KK) lama.",
          "Pemohon berusia minimal 17 tahun atau sudah/pernah kawin (dibuktikan dengan KTP-el).",
        ],
      },
      {
        id: "perubahan-data",
        title: "Perubahan Data Elemen Kependudukan",
        items: [
          "Kartu Keluarga (KK) lama.",
          "Surat keterangan / bukti pendukung perubahan peristiwa kependudukan (seperti Paspor, SKPWNI, Ijazah, dll.) atau peristiwa penting.",
        ],
      },
      {
        id: "kk-hilang-rusak",
        title: "KK Hilang / Rusak",
        items: [
          "Surat keterangan kehilangan dari Kepolisian (jika KK hilang), ATAU fisik Kartu Keluarga yang rusak.",
          "KTP-el pemohon.",
          "KITAP (khusus bagi WNA).",
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: "Pilih Jenis Permohonan KK",
        description: "Login ke Portal Apel Surga dan pilih jenis perubahan Kartu Keluarga yang sesuai.",
      },
      {
        step: 2,
        title: "Upload Berkas Asli",
        description: "Upload dokumen persyaratan asli sesuai dengan sub-kategori perubahan data KK.",
      },
      {
        step: 3,
        title: "Penerbitan KK Baru",
        description: "Kartu Keluarga baru ber-QR Code diterbitkan secara elektronik.",
      },
    ],
    duration: "1 - 2 hari kerja",
    cost: "Gratis",
    location: "Daring (Portal Apel Surga) / Loket Administrasi Kelurahan",
    notes: ["Dokumen yang diunggah untuk layanan online harus dokumen ASLI."],
  },

  {
    slug: "surat-pindah-datang",
    summary:
      "Layanan pencatatan kependudukan bagi warga yang pindah datang dari luar daerah/kota/provinsi masuk menjadi penduduk Kelurahan Wonolopo, Kota Semarang.",
    onlineUrl: "https://apelsurga.semarangkota.go.id/doLogin/",
    requirementSections: [
      {
        id: "persyaratan-kedatangan",
        title: "Persyaratan Surat Keterangan Pindah Datang",
        items: [
          "SKPWNI dari daerah asal serta membawa fisik KTP-el dan/atau KIA untuk diganti baru.",
          "Surat Nikah / Surat Cerai (apabila status perkawinan sudah menikah/cerai).",
          "Surat Pernyataan Perubahan Elemen Data Kependudukan (jika terdapat perubahan elemen data).",
          "Surat Pernyataan Alamat Digunakan dalam Administrasi Kependudukan (apabila mengontrak/menyewa rumah).",
          "Surat Pernyataan Tidak Keberatan Numpang KK (apabila menumpang di KK induk pemilik rumah).",
        ],
      },
    ],
    steps: [
      {
        step: 1,
        title: "Penerbitan SKPWNI Asal",
        description: "Memastikan Surat Keterangan Pindah WNI (SKPWNI) dari daerah/kota asal sudah terbit resmi.",
      },
      {
        step: 2,
        title: "Pengajuan Daring Apel Surga",
        description: "Masuk ke portal Apel Surga Kota Semarang, pilih layanan Kedatangan dan ungggah berkas persyaratannya.",
      },
      {
        step: 3,
        title: "Penerbitan KK & KTP Semarang",
        description: "Petugas memproses penerbitan Kartu Keluarga Kota Semarang baru dan pencetakan KTP-el domisili Wonolopo.",
      },
    ],
    duration: "1 - 2 hari kerja",
    cost: "Gratis",
    location: "Daring (Portal Apel Surga) / Loket Administrasi Kelurahan",
    notes: ["Dokumen yang diunggah untuk layanan online HARUS DOKUMEN ASLI."],
  },
];

export function getServiceDetailBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((item) => item.slug === slug);
}
