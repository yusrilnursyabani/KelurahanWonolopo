import Link from "next/link";
import { CalendarIcon, UserIcon, ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";

import { latestNews } from "@/data";
import { Container, Section } from "@/components/common";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Berita – Kelurahan Wonolopo",
    description:
        "Informasi dan berita terkini seputar kegiatan dan program di Kelurahan Wonolopo.",
};

function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export default function BeritaPage() {
    return (
        <Section>
            <Container className="space-y-8">
                {/* Header */}
                <header className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                        Berita Kelurahan
                    </p>
                    <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                        Berita &amp; Kegiatan Wonolopo
                    </h1>
                    <p className="ds-body max-w-3xl text-sm md:text-base">
                        Ikuti perkembangan terkini seputar kegiatan warga, program
                        kelurahan, dan informasi penting dari Kelurahan Wonolopo.
                    </p>
                </header>

                {/* News grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {latestNews.map((item) => (
                        <Card
                            key={item.id}
                            className="ds-elevated group flex flex-col overflow-hidden transition hover:shadow-lg"
                        >
                            {/* Thumbnail placeholder */}
                            <div className="aspect-video w-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800" />

                            <CardHeader className="space-y-1 pb-2">
                                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CalendarIcon className="icon-xs" />
                                        {formatDate(item.publishedAt)}
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <UserIcon className="icon-xs" />
                                        {item.author}
                                    </span>
                                </div>
                                <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
                            </CardHeader>

                            <CardContent className="flex flex-1 flex-col justify-between gap-4">
                                <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                                <Link
                                    href={`/berita/${item.slug}`}
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:text-primary/80"
                                >
                                    Baca Selengkapnya
                                    <ArrowRightIcon className="icon-xs transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
