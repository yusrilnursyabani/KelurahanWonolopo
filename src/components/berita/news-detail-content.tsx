import Link from "next/link";
import { ArrowLeftIcon, CalendarIcon, UserIcon, TagIcon } from "lucide-react";
import { notFound } from "next/navigation";

import { getNewsDetailBySlug, latestNews } from "@/data";

interface NewsDetailContentProps {
    slug: string;
}

function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export function NewsDetailContent({ slug }: NewsDetailContentProps) {
    const article = getNewsDetailBySlug(slug);

    if (!article) notFound();

    const otherNews = latestNews.filter((item) => item.slug !== slug).slice(0, 3);

    return (
        <div className="grid gap-6 lg:grid-cols-[1fr_18rem]">
            {/* Main article */}
            <article className="space-y-6">
                {/* Back */}
                <Link
                    href="/berita"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-primary"
                >
                    <ArrowLeftIcon className="icon-xs" />
                    Kembali ke Berita
                </Link>

                {/* Hero */}
                <div className="ds-surface ds-elevated overflow-hidden rounded-2xl">
                    <div className="aspect-video w-full bg-muted" />
                    <div className="space-y-4 p-6 md:p-8">
                        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                            Berita Kelurahan
                        </p>
                        <h1 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                            {article.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5">
                                <CalendarIcon className="icon-xs" />
                                {formatDate(article.publishedAt)}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <UserIcon className="icon-xs" />
                                {article.author}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="ds-surface ds-elevated space-y-4 rounded-2xl p-6 md:p-8">
                    {article.body.map((paragraph, i) => (
                        <p key={i} className="text-sm leading-relaxed text-foreground md:text-base">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Tags */}
                {article.tags?.length ? (
                    <div className="flex flex-wrap items-center gap-2">
                        <TagIcon className="icon-xs text-muted-foreground" />
                        {article.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                ) : null}
            </article>

            {/* Sidebar: related news */}
            <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Berita Lainnya
                </p>
                <ul className="grid gap-3">
                    {otherNews.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={`/berita/${item.slug}`}
                                className="ds-surface ds-elevated group block space-y-1.5 rounded-xl p-4 transition hover:shadow-md"
                            >
                                <p className="text-xs text-muted-foreground">
                                    {formatDate(item.publishedAt)}
                                </p>
                                <p className="text-sm font-semibold text-foreground transition group-hover:text-primary">
                                    {item.title}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
}
