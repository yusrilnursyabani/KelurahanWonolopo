import Link from "next/link";
import {
    ArrowRightIcon,
    BuildingIcon,
    HeartHandshakeIcon,
    ShoppingBagIcon,
    UsersIcon,
} from "lucide-react";

import { institutionCatalog } from "@/data";
import type { InstitutionItem } from "@/types/content";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categoryMeta: Record<
    InstitutionItem["category"],
    { label: string; icon: React.ElementType; color: string }
> = {
    pemberdayaan: {
        label: "Pemberdayaan",
        icon: UsersIcon,
        color: "text-blue-600 dark:text-blue-400",
    },
    ekonomi: {
        label: "Ekonomi",
        icon: ShoppingBagIcon,
        color: "text-emerald-600 dark:text-emerald-400",
    },
    sosial: {
        label: "Sosial",
        icon: HeartHandshakeIcon,
        color: "text-rose-600 dark:text-rose-400",
    },
};

export default function KelembagaanPage() {
    return (
        <section className="space-y-6">
            {/* Intro card */}
            <article className="ds-surface ds-elevated space-y-4 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Kelembagaan
                </p>
                <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                    Lembaga Kemasyarakatan Aktif di Wonolopo
                </h2>
                <p className="ds-body text-sm md:text-base">
                    Terdapat empat lembaga kemasyarakatan yang beroperasi aktif di
                    Kelurahan Wonolopo dan menjadi mitra pemerintah kelurahan dalam
                    pelaksanaan pembangunan, pemberdayaan, serta peningkatan kesejahteraan
                    warga. Klik lembaga untuk melihat detail program dan struktur
                    pengurus.
                </p>

                <div className="flex items-center gap-2 rounded-xl border border-border bg-background p-4">
                    <BuildingIcon className="icon-sm text-primary" />
                    <p className="text-sm text-foreground">
                        <span className="font-semibold">{institutionCatalog.length}</span>{" "}
                        Lembaga Tersedia
                    </p>
                </div>
            </article>

            {/* Institution grid */}
            <div className="grid gap-4 sm:grid-cols-2">
                {institutionCatalog.map((item) => {
                    const meta = categoryMeta[item.category];
                    const Icon = meta.icon;

                    return (
                        <Card
                            key={item.id}
                            className="ds-elevated group transition-all duration-200 hover:shadow-lg"
                        >
                            <CardHeader className="pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                        <Icon className={`icon-sm ${meta.color}`} />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{item.title}</CardTitle>
                                        <p className="text-xs font-medium text-muted-foreground">
                                            {meta.label}
                                        </p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                                <Link
                                    href={`/kelembagaan/${item.slug}`}
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                                >
                                    Lihat Detail
                                    <ArrowRightIcon className="icon-xs transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}
