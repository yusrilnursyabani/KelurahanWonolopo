import type { NavigationItem } from "@/types/content";

export const mainNavigation: NavigationItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Profil Kelurahan",
    href: "/profil",
    children: [
      { label: "Visi dan Misi", href: "/profil/visi-misi" },
      { label: "Geografis dan Penduduk", href: "/profil/geografis" },
      { label: "Infografis Demografi", href: "/profil/infografis" },
      { label: "Struktur Pemerintahan", href: "/profil/pemerintahan" },
      { label: "Sarana dan Prasarana", href: "/profil/sarana-prasarana" },
      { label: "Peta", href: "/profil/maps" },
    ],
  },
  { label: "Layanan", href: "/layanan" },
  {
    label: "Kelembagaan",
    href: "/kelembagaan",
    children: [
      { label: "LPMK", href: "/kelembagaan/lpmk" },
      { label: "UMKM", href: "/kelembagaan/umkm" },
      { label: "BKM", href: "/kelembagaan/bkm" },
      { label: "PKK", href: "/kelembagaan/pkk" },
    ],
  },
  { label: "Berita", href: "/berita" },
  { label: "Galeri", href: "/galeri" },
];
