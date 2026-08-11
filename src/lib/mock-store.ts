export interface BeritaItem {
  id: string;
  title: string;
  slug: string;
  cover_image_url: string;
  content_image_url: string;
  content: string;
  category: string;
  event_date: string;
  created_at: string;
}

export interface CommentItem {
  id: string;
  berita_id: string;
  author_name: string;
  author_email: string;
  comment_text: string;
  is_anonymous: boolean;
  created_at: string;
}

export interface GaleriItem {
  id: string;
  title: string;
  image_url: string;
  category: string;
  event_date: string;
  created_at: string;
}

export const initialBeritaList: BeritaItem[] = [
  {
    id: "b-01",
    title: "Pelatihan Digitalisasi Marketing UMKM Jamu Tradisional Wonolopo",
    slug: "pelatihan-digitalisasi-marketing-umkm-jamu-wonolopo",
    cover_image_url: "/Asset/Image/Berita1.png",
    content_image_url: "/Asset/Image/Berita1.png",
    content: `Kelurahan Wonolopo mengadakan program pendampingan dan pelatihan pemasaran digital berbasis website & media sosial untuk memperkuat daya saing para pelaku UMKM olahan herbal dan jamu tradisional.

Acara yang dihadiri oleh lebih dari 35 perajin jamu lokal ini bertujuan memperluas jangkauan pasar hingga tingkat nasional. Melalui program ini, para pelaku usaha diberikan pemahaman mendalam mengenai branding produk, fotografi katalog sederhana, serta penggunaan platform pembayaran digital yang aman.

Lurah Wonolopo menyambut baik inisiatif ini dan berharap Kampung Tematik Jamu semakin dikenal luas sebagai ikon wisata edukasi kesehatan unggulan Kota Semarang.`,
    category: "UMKM",
    event_date: "2026-02-08",
    created_at: "2026-02-08T09:00:00.000Z",
  },
  {
    id: "b-02",
    title: "Kerja Bakti Massal Kebersihan Lingkungan dan Pembagian Bibit Tanaman",
    slug: "kerja-bakti-massal-kebersihan-lingkungan-wonolopo",
    cover_image_url: "/Asset/Image/Berita2.png",
    content_image_url: "/Asset/Image/Berita2.png",
    content: `Warga Kelurahan Wonolopo bersama seluruh jajaran RT, RW, dan LKMK menggelar aksi gotong royong kebersihan lingkungan pemukiman serta penanaman bibit pohon di sepanjang koridor jalan utama.

Kegiatan ini dilaksanakan secara serentak di 10 RW dengan fokus utama pembersihan saluran air drainase menghadapi musim hujan, pemilahan sampah organik dari sumber rumah tangga, serta pembagian 200 bibit tanaman toga dan buah.

Semangat kebersamaan warga Wonolopo tercermin dari tingginya antusiasme masyarakat yang bahu-membahu menjaga keasrian lingkungan desa agar tetap sehat dan bebas genangan.`,
    category: "Kebersihan",
    event_date: "2026-02-05",
    created_at: "2026-02-05T08:30:00.000Z",
  },
  {
    id: "b-03",
    title: "Sosialisasi & Edukasi Pencegahan Stunting Bagi Ibu Hamil Wonolopo",
    slug: "sosialisasi-edukasi-pencegahan-stunting-wonolopo",
    cover_image_url: "/Asset/Image/Berita3.png",
    content_image_url: "/Asset/Image/Berita3.png",
    content: `Kader Posyandu bersama Puskesmas wilayah menggelar kegiatan sosialisasi edukasi pemenuhan gizi seimbang bagi ibu hamil dan balita di Balai Kelurahan Wonolopo.

Acara mencakup pemeriksaan kesehatan gratis, demonstrasi pembuatan makanan pendamping ASI (MP-ASI) bergizi berbasis bahan pangan lokal, serta pendataan pemantauan tumbuh kembang anak secara rutin.

Melalui sinergi kader kesehatan dan Pemkot Semarang, Kelurahan Wonolopo berkomitmen menekan angka stunting menuju zero stunting.`,
    category: "Kesehatan",
    event_date: "2026-01-28",
    created_at: "2026-01-28T10:00:00.000Z",
  },
  {
    id: "b-04",
    title: "Musyawarah Perencanaan Pembangunan (Musrenbang) Kelurahan Wonolopo 2026",
    slug: "musrenbang-kelurahan-wonolopo-2026",
    cover_image_url: "/Asset/Image/Berita1.png",
    content_image_url: "/Asset/Image/Berita1.png",
    content: `Kelurahan Wonolopo menyelenggarakan Musrenbang tahunan untuk menjaring aspirasi warga terkait prioritas pembangunan fisik infrastruktur maupun pemberdayaan ekonomi masyarakat.

Pertemuan ini menghasilkan kesepakatan usulan pembangunan drainase pemukiman, penerangan jalan umum (PJU), pelatihan kewirausahaan generasi muda, serta peningkatan sarana prasarana balai warga.`,
    category: "Giat Kelurahan",
    event_date: "2026-01-20",
    created_at: "2026-01-20T13:00:00.000Z",
  },
];

export const initialCommentsList: CommentItem[] = [
  {
    id: "c-01",
    berita_id: "b-01",
    author_name: "Ahmad Santoso",
    author_email: "ahmad@gmail.com",
    comment_text: "Sangat apresiasi dengan pelatihan digital ini! Semoga UMKM jamu Wonolopo makin sukses dan merambah pasar nasional.",
    is_anonymous: false,
    created_at: "2026-02-08T11:20:00.000Z",
  },
  {
    id: "c-02",
    berita_id: "b-01",
    author_name: "Rina Wijaya",
    author_email: "rina@gmail.com",
    comment_text: "Terima kasih Pak Lurah dan tim pendamping KKN, informasinya sangat membantu usaha keluarga kami.",
    is_anonymous: true,
    created_at: "2026-02-08T14:45:00.000Z",
  },
  {
    id: "c-03",
    berita_id: "b-02",
    author_name: "Budi Pratama",
    author_email: "budi@gmail.com",
    comment_text: "Kerja bakti hari minggu kemarin meriah sekali. Gotong royong Wonolopo memang jempolan!",
    is_anonymous: false,
    created_at: "2026-02-06T07:15:00.000Z",
  },
];

export const initialGaleriList: GaleriItem[] = [
  {
    id: "g-01",
    title: "Pelatihan Digital Marketing UMKM Jamu Wonolopo",
    image_url: "/Asset/Image/Berita1.png",
    category: "UMKM",
    event_date: "2026-02-08",
    created_at: "2026-02-08T09:00:00.000Z",
  },
  {
    id: "g-02",
    title: "Aksi Kerja Bakti Kebersihan Lingkungan RW 03",
    image_url: "/Asset/Image/Berita2.png",
    category: "Kebersihan & Lingkungan",
    event_date: "2026-02-05",
    created_at: "2026-02-05T08:30:00.000Z",
  },
  {
    id: "g-03",
    title: "Pemeriksaan Kesehatan dan Edukasi Gizi Ibu Hamil",
    image_url: "/Asset/Image/Berita3.png",
    category: "Kegiatan Kelurahan",
    event_date: "2026-01-28",
    created_at: "2026-01-28T10:00:00.000Z",
  },
  {
    id: "g-04",
    title: "Musrenbang Kelurahan Wonolopo 2026",
    image_url: "/Asset/Image/Berita1.png",
    category: "Kegiatan Kelurahan",
    event_date: "2026-01-20",
    created_at: "2026-01-20T13:00:00.000Z",
  },
  {
    id: "g-05",
    title: "Pameran Produk Olahan Herbal dan Jamu Tradisional",
    image_url: "/Asset/Image/Berita2.png",
    category: "UMKM",
    event_date: "2026-01-15",
    created_at: "2026-01-15T10:00:00.000Z",
  },
  {
    id: "g-06",
    title: "Kegiatan Pemberdayaan Perempuan PKK Wonolopo",
    image_url: "/Asset/Image/Berita3.png",
    category: "Pemberdayaan",
    event_date: "2026-01-10",
    created_at: "2026-01-10T11:00:00.000Z",
  },
];

let inMemoryBeritaList: BeritaItem[] = [...initialBeritaList];
let inMemoryGaleriList: GaleriItem[] = [...initialGaleriList];
let inMemoryCommentsList: CommentItem[] = [...initialCommentsList];

export function getInMemoryBerita() {
  return inMemoryBeritaList;
}

export function addInMemoryBerita(item: BeritaItem) {
  inMemoryBeritaList.unshift(item);
}

export function deleteInMemoryBerita(id: string) {
  inMemoryBeritaList = inMemoryBeritaList.filter((item) => item.id !== id);
}

export function getInMemoryGaleri() {
  return inMemoryGaleriList;
}

export function addInMemoryGaleri(item: GaleriItem) {
  inMemoryGaleriList.unshift(item);
}

export function deleteInMemoryGaleri(id: string) {
  inMemoryGaleriList = inMemoryGaleriList.filter((item) => item.id !== id);
}

export function getInMemoryComments() {
  return inMemoryCommentsList;
}

export function addInMemoryComment(item: CommentItem) {
  inMemoryCommentsList.unshift(item);
}
