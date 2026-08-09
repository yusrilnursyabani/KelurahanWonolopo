You are a Senior Frontend Engineer and Content Migration Specialist.

==========================================================
PROJECT STATUS
==========================================================

The frontend architecture is 100% complete.

All phases have been finished.

✅ Architecture
✅ Design System
✅ Components
✅ Layout
✅ Homepage
✅ Profile
✅ Services
✅ Institutions
✅ News
✅ Gallery

DO NOT redesign anything.

DO NOT change layout.

DO NOT refactor components.

DO NOT create new pages.

DO NOT change routing.

DO NOT modify animations.

DO NOT modify UI.

DO NOT modify styling.

The only remaining task is CONTENT MIGRATION.

==========================================================
OBJECTIVE
==========================================================

Replace every AI-generated placeholder content with the official content from Kelurahan Wonolopo.

The redesign must keep the exact UI while replacing only data.

==========================================================
IMPORTANT RULES
==========================================================

DO NOT generate fictional content.

DO NOT summarize official content unless explicitly requested.

DO NOT invent descriptions.

DO NOT fill missing information.

If official data is unavailable:

Use

null

or

""

or

[]

depending on the data structure.

Never create fake data.

==========================================================
WHAT YOU ARE ALLOWED TO MODIFY
==========================================================

Only modify files inside:

src/data

and

public/assets

Everything else is read-only.

Do not touch components.

Do not touch app router.

Do not touch UI.

Do not touch layout.

==========================================================
CONTENT MIGRATION ORDER
==========================================================

STEP 1

navigation.ts

Replace all navigation labels using the official website structure.

==========================================================

STEP 2

profile.ts

Replace all AI text with official content.

Include

Visi

Misi

Geografis

Penduduk

Struktur Pemerintahan

Sarana Prasarana

Maps

If some sections are unavailable, leave them empty.

==========================================================

STEP 3

statistics.ts

Replace statistics using official data.

Examples

Population

KK

RW

RT

Area

Education

Religion

Occupation

==========================================================

STEP 4

services.ts

Replace all services with official services.

Include

Domisili

KIA

PBB

Disdukcapil

Pengaduan

UMI-JM

Puskesmas

Stunting

Do not invent service descriptions.

==========================================================

STEP 5

institutions.ts

Replace

LPMK

UMKM

BKM

PKK

using official information only.

==========================================================

STEP 6

programs.ts

Replace

Education

Health

Tourism

Security

with official empowerment programs.

Leave empty if unavailable.

==========================================================

STEP 7

news.ts

Replace AI news.

Only use official news.

Keep slug structure.

Keep image path.

Keep SEO fields.

==========================================================

STEP 8

gallery.ts

Replace placeholder gallery.

Keep image path.

Keep category.

Keep date if available.

==========================================================

STEP 9

service-details.ts

Replace every service description using official information.

If no description exists,

leave empty.

==========================================================
IMAGE MIGRATION
==========================================================

After all data has been migrated,

replace placeholder image paths.

Current

/images/placeholder.jpg

↓

Official

/public/assets/images/

Do not rename folders unnecessarily.

Use descriptive filenames.

Example

/assets/images/profile/lurah.webp

/assets/images/news/musrenbang-2023.webp

/assets/images/gallery/kerja-bakti.webp

==========================================================
CODING RULES
==========================================================

Never hardcode text inside components.

Everything must come from

src/data

Maintain TypeScript typing.

Maintain interfaces.

Maintain existing object structure.

Maintain imports.

==========================================================
OUTPUT FORMAT
==========================================================

For every migrated file explain:

1.

File name

2.

Content replaced

3.

Missing data

4.

Image requirements

5.

Next file to migrate

Never migrate everything at once.

Complete one data file.

Stop.

Wait for confirmation.

Continue to the next file.

==========================================================
FINAL GOAL
==========================================================

The finished project must contain

100% original official content

0% AI placeholder content

0% fictional information

without changing any existing frontend architecture.


STRICT MODE

The frontend has already been approved.

Architecture has been finalized.

You are NOT allowed to

- change components
- rename files
- move folders
- modify Tailwind classes
- change animations
- change spacing
- change colors
- refactor code
- improve UI
- optimize layout

Only perform content migration.

If a requested change requires modifying UI or architecture, stop and explain why instead of making the change.


1. Beranda

Halaman utama yang menampilkan informasi singkat mengenai Kelurahan Wonolopo, layanan publik, berita terbaru, agenda kegiatan, statistik kependudukan, serta akses cepat menuju seluruh layanan yang tersedia.

2. Profil Kelurahan
Visi dan Misi
Visi

"Terwujudnya Kota Semarang yang SEMAKIN HEBAT berlandaskan PANCASILA dalam Bingkai NKRI yang Ber-Bhineka Tunggal Ika."

Misi
Meningkatkan kualitas dan kapasitas sumber daya manusia yang unggul, produktif, serta berkeadilan sosial.
Meningkatkan potensi ekonomi lokal yang berdaya saing melalui riset, inovasi, dan pembangunan industri yang berlandaskan demokrasi ekonomi Pancasila.
Menjamin kebebasan masyarakat dalam menjalankan ibadah, pemenuhan hak dasar, perlindungan sosial, dan penghormatan terhadap hak asasi manusia secara adil.
Mewujudkan infrastruktur yang berkualitas dan berwawasan lingkungan guna mendukung kemajuan Kota Semarang.
Menjalankan reformasi birokrasi secara dinamis serta menyusun produk hukum yang selaras dengan nilai-nilai Pancasila dalam kerangka Negara Kesatuan Republik Indonesia.
Geografis dan Penduduk
Identitas Wilayah
Informasi	Keterangan
Nama Kelurahan	Wonolopo
Kecamatan	Mijen
Kota	Semarang
Provinsi	Jawa Tengah
Kode Pos	50216
Luas Wilayah

495,35 Ha

Batas Wilayah
Arah	Wilayah
Utara	Kelurahan Ngadirgo
Selatan	Kelurahan Wonoplumbon
Barat	Kelurahan Jatisari
Timur	Kelurahan Mijen
Sarana Umum
Sarana olahraga : 3
Sarana kesenian/budaya : 1
Balai pertemuan : 2
Tempat Ibadah
Jenis	Jumlah
Masjid	11
Mushola	21
Gereja	4
Sarana Pendidikan
Jenjang	Jumlah
PAUD	1
TK	4
SD	3
SMP	6
SMA	4
Perguruan Tinggi	1
Sarana Kesehatan
Fasilitas	Jumlah
Puskesmas	1
Posyandu	15
Poliklinik	0
Data Kependudukan
Data	Jumlah
Penduduk Laki-laki	5.295 jiwa
Penduduk Perempuan	5.316 jiwa
Total Penduduk	10.654 jiwa
Kepala Keluarga	6.505 KK
Kelompok Umur
Kelompok	Jumlah
0–15 Tahun	1.037 jiwa
15–65 Tahun	10.104 jiwa
>65 Tahun	1.392 jiwa
Pendidikan Penduduk
TK : 760 orang
SD : 1.583 orang
SMP : 3.672 orang
SMA : 2.461 orang
Diploma : 812 orang
Sarjana : 1.461 orang
Pascasarjana : 236 orang
Data Sosial
Mayoritas pekerjaan : Swasta
Jumlah warga miskin : 381 KK
Aparatur Kelurahan

Lurah

Dra. Rina Sugimurwani, S.IP., M.Si.

Sekretaris Kelurahan

Sumiyatun, S.H.

Kelembagaan
Data	Jumlah
RW	10
RT	52
Pengurus LPMK	15
Kegiatan LPMK	4
Pengurus TP PKK	15
Kegiatan TP PKK/Bulan	5
Karang Taruna	1
Pengurus Karang Taruna	15
Struktur Pemerintahan
Lurah
Dra. Rina Sugimurwani, S.IP., M.Si.
Sekretaris Kelurahan
Arista Andriana, S.E.
Kepala Seksi Pembangunan
Rodliyahi, S.E.
Kepala Seksi Perekonomian dan Kesejahteraan Sosial
Erna Murtiningsih, S.E.
Kepala Seksi Pemerintahan, Keamanan, dan Ketertiban
Edi Wibowo, A.Md.
Staff IT
Nur Wakhit, A.Md.Kom.
Pengelola Teknologi Informasi
Hilda Nisrina Azmi, A.Md.
Staff Pengelola Data Belanja dan Laporan Keuangan
Diana Yuliani, A.Md.
Tenaga Kebersihan
Aditya Rahman
Sarana dan Prasarana

Belum tersedia informasi rinci mengenai sarana dan prasarana pada website resmi Kelurahan Wonolopo.

Informasi
Kartu Identitas Anak (KIA)

Kartu Identitas Anak (KIA) merupakan identitas resmi bagi anak berusia di bawah 17 tahun. KIA bertujuan meningkatkan kualitas pendataan, perlindungan, dan pelayanan publik bagi anak.

KIA terdiri dari dua jenis:

KIA usia 0–5 tahun tanpa foto.
KIA usia 5–17 tahun kurang satu hari dengan foto.
Persyaratan
Fotokopi Akta Kelahiran.
Kartu Keluarga asli.
KTP kedua orang tua atau wali.

Pengajuan KIA dilakukan melalui Dinas Kependudukan dan Pencatatan Sipil Kota Semarang.

Peta

Menampilkan lokasi Kantor Kelurahan Wonolopo menggunakan Google Maps.

3. Berita

Menampilkan berita, pengumuman, kegiatan pemerintahan, agenda kelurahan, serta informasi terbaru mengenai Kelurahan Wonolopo.

4. Layanan
Layanan PBB

Informasi mengenai pelayanan Pajak Bumi dan Bangunan (PBB).

Alur Sistem Layanan

Menampilkan alur administrasi pelayanan masyarakat di Kelurahan Wonolopo.

Permohonan Pembuatan Domisili Tempat Tinggal
Persyaratan
Surat Pengantar RT/RW.
Fotokopi Bukti Lunas SPPT PBB Tahun Berjalan.
Fotokopi KTP Daerah Asal.
Surat Keterangan Boro dari Daerah Asal.
Pas foto ukuran 3×4 berwarna.
Mengisi formulir permohonan di kantor kelurahan.
Mekanisme Pengaduan

Belum tersedia informasi resmi.

Masyarakat

Belum tersedia informasi resmi.

Layanan Dispendukcapil

Belum tersedia informasi resmi.

Layanan Online

Belum tersedia informasi resmi.

Cek E-KTP

Belum tersedia informasi resmi.

Kesejahteraan Sosial

Belum tersedia informasi resmi.

Antrean Puskesmas

Layanan antrean Puskesmas Kota Semarang dapat diakses melalui:

https://epuskesmas.semarangkota.go.id/

Pelayanan UMI-JM

Belum tersedia informasi resmi.

Data Stunting

Belum tersedia informasi resmi.

5. Kelembagaan
LPMK

Menjelaskan tugas, fungsi, susunan organisasi, serta mekanisme pembentukan dan pemilihan pengurus Lembaga Pemberdayaan Masyarakat Kelurahan (LPMK) berdasarkan Peraturan Daerah Kota Semarang Nomor 4 Tahun 2009.

UMKM

Belum tersedia informasi resmi.

BKM

Menjelaskan peran Badan Keswadayaan Masyarakat (BKM) sebagai lembaga yang memfasilitasi pemberdayaan masyarakat, penanggulangan kemiskinan, pembangunan sosial, ekonomi, dan lingkungan secara partisipatif.

PKK

Belum tersedia informasi resmi.

6. Pemberdayaan
Bidang Kamtibmas

Belum tersedia informasi resmi.

Bidang Kesehatan

Belum tersedia informasi resmi.

Bidang Pariwisata

Belum tersedia informasi resmi.

Bidang Pendidikan

Belum tersedia informasi resmi.

7. Galeri

Menampilkan dokumentasi kegiatan, pembangunan, pelayanan masyarakat, pemberdayaan warga, serta berbagai agenda yang dilaksanakan di Kelurahan Wonolopo.