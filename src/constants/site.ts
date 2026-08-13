export const SITE_CONFIG = {
  name: "Kelurahan Wonolopo",
  shortName: "Wonolopo",
  city: "Kota Semarang",
  province: "Jawa Tengah",
  locale: "id-ID",
  logo: {
    shield: "/images/Kelurahan_wonolopo_logo.png",
    full: "/images/Logo_Kelurahan_Wonolopo.png",
  },
  contact: {
    email: "kel.wonolopo@gmail.com",
    phone: "(024) 766-72-723",
  },
  socials: {
    instagram: "https://www.instagram.com/kelurahanwonolopo/",
    tiktok: "https://www.tiktok.com/@kelurahanwonolopo",
    youtube: "https://www.youtube.com/@kelurahanwonolopoofficial4749",
  },
  copyright: "Copyright © 2026 - Kelurahan Wonolopo All rights reserved",
} as const;

export const ROUTES = {
  home: "/",
  profile: "/profil",
  services: "/layanan",
  institutions: "/kelembagaan",
  news: "/berita",
  gallery: "/galeri",
  complaints: "/layanan/pengaduan",
  scientificArticles: "/layanan/artikel-ilmiah",
} as const;
