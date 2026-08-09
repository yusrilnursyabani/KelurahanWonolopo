"use client";

import { useState } from "react";
import { XIcon } from "lucide-react";

import { activityGallery, galleryCategories } from "@/data";
import type { GalleryCategory } from "@/data/gallery";

export function GalleryGrid() {
    const [active, setActive] = useState<GalleryCategory>("Semua");
    const [lightbox, setLightbox] = useState<string | null>(null);

    const filtered =
        active === "Semua"
            ? activityGallery
            : activityGallery.filter((item) => item.category === active);

    return (
        <div className="space-y-6">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2">
                {galleryCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${active === cat
                            ? "bg-primary text-primary-foreground"
                            : "border border-border bg-background text-muted-foreground hover:border-primary hover:text-primary"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {filtered.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => setLightbox(item.caption ?? item.title)}
                            className="group relative aspect-square w-full overflow-hidden rounded-xl bg-muted transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            aria-label={`Lihat foto: ${item.title}`}
                        >
                            {/* Image placeholder — replace with real <Image> when assets ready */}
                            <div className="h-full w-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800" />
                            {/* Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                                <p className="text-xs font-semibold leading-tight text-white">
                                    {item.title}
                                </p>
                                <p className="mt-0.5 text-[10px] text-white/80">{item.category}</p>
                            </div>
                        </button>
                    </li>
                ))}
            </ul>

            {/* Count */}
            <p className="text-xs text-muted-foreground">
                Menampilkan {filtered.length} dari {activityGallery.length} foto
            </p>

            {/* Lightbox */}
            {lightbox && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Lightbox foto"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={() => setLightbox(null)}
                >
                    <div
                        className="relative max-w-2xl rounded-2xl bg-background p-6 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setLightbox(null)}
                            className="absolute right-3 top-3 rounded-full bg-muted p-1.5 transition hover:bg-border"
                            aria-label="Tutup lightbox"
                        >
                            <XIcon className="icon-xs" />
                        </button>
                        <div className="mb-4 aspect-video w-full rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800" />
                        <p className="text-sm text-foreground">{lightbox}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
