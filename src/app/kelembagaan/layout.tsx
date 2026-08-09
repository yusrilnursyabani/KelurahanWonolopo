import { institutionCatalog } from "@/data";

import { Container, Section } from "@/components/common";
import { Sidebar } from "@/components/layout";

export default function KelembagaanLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const institutionMenuItems = [
        { label: "Ringkasan Kelembagaan", href: "/kelembagaan" },
        ...institutionCatalog.map((item) => ({
            label: item.title,
            href: `/kelembagaan/${item.slug}`,
        })),
    ];

    return (
        <Section>
            <Container className="space-y-8">
                <header className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                        Kelembagaan Kelurahan
                    </p>
                    <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                        Lembaga Kemasyarakatan Wonolopo
                    </h1>
                    <p className="ds-body max-w-3xl text-sm md:text-base">
                        Kelurahan Wonolopo didukung oleh berbagai lembaga kemasyarakatan
                        yang berperan aktif dalam pemberdayaan warga, pengembangan ekonomi,
                        dan peningkatan kesejahteraan keluarga.
                    </p>
                </header>

                <div className="grid items-start gap-6 lg:grid-cols-[19rem_1fr]">
                    <Sidebar
                        title="Menu Kelembagaan"
                        items={institutionMenuItems}
                        className="max-h-[calc(100vh-8rem)] overflow-y-auto lg:sticky lg:top-24"
                    />
                    <div className="space-y-6">{children}</div>
                </div>
            </Container>
        </Section>
    );
}
