import type { InstitutionItem, InstitutionDetail } from "@/types/content";

// ─── Catalog ────────────────────────────────────────────────────────────────

export const institutionCatalog: InstitutionItem[] = [
    {
        id: "inst-lpmk",
        title: "LPMK",
        slug: "lpmk",
        description:
            "Lembaga Pemberdayaan Masyarakat Kelurahan yang menjadi mitra kerja pemerintah dalam perencanaan, pelaksanaan, dan pengawasan pembangunan.",
        category: "pemberdayaan",
    },
    {
        id: "inst-umkm",
        title: "UMKM",
        slug: "umkm",
        description:
            "Forum Usaha Mikro, Kecil, dan Menengah Kelurahan Wonolopo.",
        category: "ekonomi",
    },
    {
        id: "inst-bkm",
        title: "BKM",
        slug: "bkm",
        description:
            "Badan Keswadayaan Masyarakat Kelurahan Wonolopo yang memfasilitasi pemberdayaan dan penanggulangan kemiskinan.",
        category: "sosial",
    },
    {
        id: "inst-pkk",
        title: "PKK",
        slug: "pkk",
        description:
            "Pemberdayaan Kesejahteraan Keluarga Kelurahan Wonolopo.",
        category: "pemberdayaan",
    },
];

// ─── Detail Data ─────────────────────────────────────────────────────────────

export const institutionDetails: InstitutionDetail[] = [
    {
        slug: "lpmk",
        fullName: "Lembaga Pemberdayaan Masyarakat Kelurahan (LPMK)",
        summary:
            "LPMK memiliki tugas, fungsi, susunan organisasi, serta mekanisme pembentukan dan pemilihan pengurus berdasarkan Peraturan Daerah Kota Semarang Nomor 4 Tahun 2009. Kelurahan Wonolopo mencatat terdapat 15 pengurus LPMK aktif dengan 4 kegiatan utama.",
        vision: "",
        mission: [],
        members: [],
        programs: [],
        meetingSchedule: "",
        contactInfo: "",
    },
    {
        slug: "umkm",
        fullName: "Forum Usaha Mikro, Kecil, dan Menengah (UMKM)",
        summary: "Belum tersedia informasi resmi mengenai Forum UMKM.",
        vision: "",
        mission: [],
        members: [],
        programs: [],
        meetingSchedule: "",
        contactInfo: "",
    },
    {
        slug: "bkm",
        fullName: "Badan Keswadayaan Masyarakat (BKM)",
        summary:
            "BKM berperan sebagai lembaga yang memfasilitasi pemberdayaan masyarakat, penanggulangan kemiskinan, pembangunan sosial, ekonomi, dan lingkungan secara partisipatif.",
        vision: "",
        mission: [],
        members: [],
        programs: [],
        meetingSchedule: "",
        contactInfo: "",
    },
    {
        slug: "pkk",
        fullName: "Pemberdayaan Kesejahteraan Keluarga (PKK)",
        summary:
            "Belum tersedia informasi resmi mengenai TP PKK. Kelurahan Wonolopo mencatat terdapat 15 pengurus TP PKK dengan agenda kegiatan TP PKK/bulan sebanyak 5 kegiatan.",
        vision: "",
        mission: [],
        members: [],
        programs: [],
        meetingSchedule: "",
        contactInfo: "",
    },
];

// ─── Helper ──────────────────────────────────────────────────────────────────

export function getInstitutionDetailBySlug(
    slug: string
): InstitutionDetail | undefined {
    return institutionDetails.find((item) => item.slug === slug);
}
