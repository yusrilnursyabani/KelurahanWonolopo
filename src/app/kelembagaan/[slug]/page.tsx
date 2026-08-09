import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { institutionCatalog, getInstitutionDetailBySlug } from "@/data";
import { InstitutionDetailContent } from "@/components/kelembagaan";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const institution = institutionCatalog.find((item) => item.slug === slug);
    const detail = getInstitutionDetailBySlug(slug);

    if (!institution || !detail) {
        return { title: "Lembaga Tidak Ditemukan" };
    }

    return {
        title: `${detail.fullName} – Kelurahan Wonolopo`,
        description: detail.summary,
    };
}

export function generateStaticParams() {
    return institutionCatalog.map((item) => ({ slug: item.slug }));
}

export default async function InstitutionDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const isValid = institutionCatalog.some((item) => item.slug === slug);
    if (!isValid) notFound();

    return <InstitutionDetailContent slug={slug} />;
}
