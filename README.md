# 🏛️ Website Resmi Kelurahan Wonolopo

Selamat datang di repositori resmi **Website Kelurahan Wonolopo**, Kecamatan Mijen, Kota Semarang. Website ini dirancang sebagai portal informasi publik, layanan digital kemasyarakatan, serta media publikasi program kelembagaan dan potensi kelurahan secara modern, responsif, dan mudah diakses.

---

## 🛠️ Teknologi & Stack

Website ini dibangun menggunakan teknologi web modern:

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 19)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI & Ikon**: [Lucide React](https://lucide.dev/), [shadcn/ui](https://ui.shadcn.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Database & Auth**: [Supabase](https://supabase.com/) (`@supabase/supabase-js`, `@supabase/ssr`) & Custom JWT (`jose`)

---

## 📋 Prasyarat Sistem

Sebelum memulai proses instalasi, pastikan sistem Anda telah terpasang:

1. **Node.js**: Versi `v18.17.0` atau yang lebih baru (direkomendasikan Node.js `v20.x`)
   - Cek versi Node.js: `node -v`
2. **Package Manager**: `npm` (bawaan Node.js), `pnpm`, atau `yarn`
3. **Git**: Untuk melakukan clone repositori

---

## 🚀 Panduan Instalasi & Pengoperasian

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek di lingkungan lokal:

### 1. Clone Repositori
Clone proyek ini ke komputer lokal Anda:
```bash
git clone https://github.com/username/kelurahan_wonolopo.git
cd kelurahan_wonolopo
```
*(Jika file sudah ada di komputer Anda, buka terminal di dalam direktori `kelurahan_wonolopo`)*

---

### 2. Install Dependensi
Jalankan perintah berikut untuk mengunduh seluruh package yang dibutuhkan:

```bash
npm install
```
*Atau jika menggunakan package manager lain:*
```bash
# Menggunakan yarn
yarn install

# Menggunakan pnpm
pnpm install
```

---

### 3. Konfigurasi Environment Variables (`.env.local`)
Duplikat file `.env.example` menjadi `.env.local`:

```bash
# Di Linux / macOS / Git Bash / PowerShell
cp .env.example .env.local
```

Buka file `.env.local` dan sesuaikan nilainya dengan konfigurasi proyek Anda:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key

# JWT Authentication
JWT_SECRET=your_jwt_secret_key_here

# Admin Credentials
ADMIN_DEFAULT_USERNAME=admin
ADMIN_DEFAULT_PASSWORD=your_admin_password_here
```

---

### 4. Setup Database (Opsional - Supabase)
Jika Anda mengintegrasikan dengan Supabase:
1. Buat proyek baru di dashboard [Supabase](https://supabase.com/).
2. Buka **SQL Editor** pada dashboard Supabase Anda.
3. Jalankan script SQL yang ada pada file `supabase/schema.sql` untuk membuat tabel dan relasi yang diperlukan.

---

### 5. Jalankan Development Server
Jalankan perintah berikut untuk memulai server lokal:

```bash
npm run dev
```

Server pengembangan akan berjalan di: [http://localhost:3000](http://localhost:3000)

Buka peramban (browser) Anda dan akses alamat tersebut untuk melihat tampilan website.

---

## 📜 Perintah yang Tersedia (NPM Scripts)

Di dalam file `package.json`, terdapat beberapa perintah utama:

| Perintah | Keterangan |
| :--- | :--- |
| `npm run dev` | Menjalankan server pengembangan Next.js di `localhost:3000` |
| `npm run build` | Membuat build produksi (*optimized production build*) |
| `npm run start` | Menjalankan server produksi dari hasil build |
| `npm run lint` | Menjalankan ESLint untuk memeriksa kualitas & format kode |

---

## 📁 Struktur Direktori Utama

```text
kelurahan_wonolopo/
├── public/                # Asset statis (gambar, logo, dokumen)
├── src/
│   ├── app/               # Next.js App Router (halaman & API routes)
│   ├── components/        # Komponen UI (layout, section, modul profil/layanan)
│   ├── constants/         # Nilai konstanta aplikasi
│   ├── data/              # Data statis (navigasi, profil, berita, layanan)
│   ├── lib/               # Utility library, client Supabase, helper auth
│   ├── types/             # Tipe data TypeScript
│   └── utils/             # Helper functions & sanitasi
├── supabase/
│   └── schema.sql         # Script skema database Supabase
├── .env.example           # Contoh variabel lingkungan
├── package.json           # Dependensi & script proyek
└── README.md              # Dokumentasi & panduan instalasi
```

---

## 🔒 Akses Administrator

Untuk masuk ke panel pengelolaan/admin:
1. Akses halaman `/admin/login` (atau URL login admin yang dikonfigurasi).
2. Gunakan kredensial yang diset pada variabel `ADMIN_DEFAULT_USERNAME` dan `ADMIN_DEFAULT_PASSWORD` di `.env.local`.

---

## 🤝 Kontribusi & Lisensi

Pengembangan website ini dilaksanakan dalam rangka program **KKN Kelurahan Wonolopo**, Kecamatan Mijen, Kota Semarang.

Dibuat dengan ❤️ untuk masyarakat Kelurahan Wonolopo.
