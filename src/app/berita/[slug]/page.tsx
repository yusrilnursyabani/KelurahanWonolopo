import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { latestNews, getNewsDetailBySlug } from "@/data";
import { Container, Section } from "@/components/common";
import { NewsDetailContent } from "@/components/berita";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = getNewsDetailBySlug(slug);

    if (!article) return { title: "Berita Tidak Ditemukan" };

    return {
        title: `${article.title} – Berita Kelurahan Wonolopo`,
        description: article.excerpt,
    };
}

export function generateStaticParams() {
    return latestNews.map((item) => ({ slug: item.slug }));
}

export default async function BeritaDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const isValid = latestNews.some((item) => item.slug === slug);
    if (!isValid) notFound();

    return (
        <Section>
            <Container>
                <NewsDetailContent slug={slug} />
            </Container>
        </Section>
    );
}
