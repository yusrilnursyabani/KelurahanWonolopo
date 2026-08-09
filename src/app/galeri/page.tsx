import type { Metadata } from "next";

import { activityGallery } from "@/data";
import { Container, Section } from "@/components/common";
import { GalleryGrid } from "@/components/gallery";

export const metadata: Metadata = {
    title: "Galeri – Kelurahan Wonolopo",
    description:
        "Galeri foto kegiatan warga dan program Kelurahan Wonolopo.",
};

export default function GaleriPage() {
    return (
        <Section>
            <Container className="space-y-8">
                {/* Header */}
                <header className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                        Galeri Kegiatan
                    </p>
                    <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                        Dokumentasi Kegiatan Wonolopo
                    </h1>
                    <p className="ds-body max-w-3xl text-sm md:text-base">
                        Lihat dokumentasi foto dari berbagai kegiatan warga, program
                        pelayanan, dan momen penting di Kelurahan Wonolopo. Gunakan filter
                        kategori untuk menelusuri foto berdasarkan tema kegiatan.
                    </p>
                </header>

                {/* Stats bar */}
                <div className="flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-4 py-3">
                    <span className="text-sm text-muted-foreground">
                        Total foto:{" "}
                        <span className="font-semibold text-foreground">
                            {activityGallery.length}
                        </span>
                    </span>
                </div>

                {/* Interactive gallery */}
                <GalleryGrid />
            </Container>
        </Section>
    );
}
