import {
    BuildingIcon,
    CalendarIcon,
    MapPinIcon,
    TargetIcon,
    UsersIcon,
} from "lucide-react";
import { notFound } from "next/navigation";

import { getInstitutionDetailBySlug, institutionCatalog } from "@/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LpmkView } from "./lpmk-view";
import { BkmView } from "./bkm-view";

interface InstitutionDetailContentProps {
    slug: string;
}

export function InstitutionDetailContent({
    slug,
}: InstitutionDetailContentProps) {
    if (slug === "lpmk") {
        return <LpmkView />;
    }

    if (slug === "bkm") {
        return <BkmView />;
    }

    const institution = institutionCatalog.find((item) => item.slug === slug);
    const detail = getInstitutionDetailBySlug(slug);

    if (!institution || !detail) {
        notFound();
    }

    return (
        <section className="space-y-6">
            {/* Hero card */}
            <article className="ds-surface ds-elevated space-y-4 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Lembaga Kemasyarakatan
                </p>
                <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
                    {detail.fullName}
                </h1>
                <p className="ds-body text-sm md:text-base">{detail.summary}</p>

                <div className="grid gap-3 sm:grid-cols-2">
                    {detail.meetingSchedule && (
                        <div className="rounded-xl border border-border bg-background p-4">
                            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                                <CalendarIcon className="icon-sm" />
                                Jadwal Pertemuan
                            </p>
                            <p className="mt-2 text-sm text-foreground">
                                {detail.meetingSchedule}
                            </p>
                        </div>
                    )}
                    {detail.contactInfo && (
                        <div className="rounded-xl border border-border bg-background p-4">
                            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
                                <MapPinIcon className="icon-sm" />
                                Lokasi / Kontak
                            </p>
                            <p className="mt-2 text-sm text-foreground">
                                {detail.contactInfo}
                            </p>
                        </div>
                    )}
                </div>
            </article>

            {/* Vision & Mission */}
            {(detail.vision || detail.mission?.length) && (
                <Card className="ds-elevated">
                    <CardHeader>
                        <CardTitle className="inline-flex items-center gap-2 text-xl">
                            <TargetIcon className="icon-sm text-primary" />
                            Visi &amp; Misi
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {detail.vision && (
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                                    Visi
                                </p>
                                <p className="mt-1 text-sm text-foreground">{detail.vision}</p>
                            </div>
                        )}
                        {detail.mission?.length && (
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                                    Misi
                                </p>
                                <ol className="mt-2 grid gap-2">
                                    {detail.mission.map((item, index) => (
                                        <li
                                            key={index}
                                            className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground"
                                        >
                                            <span className="mr-2 font-semibold text-primary">
                                                {index + 1}.
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </CardContent>
                </Card>
            )}

            {/* Programs */}
            {detail.programs.length > 0 && (
                <Card className="ds-elevated">
                    <CardHeader>
                        <CardTitle className="inline-flex items-center gap-2 text-xl">
                            <BuildingIcon className="icon-sm text-primary" />
                            Program Unggulan
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ol className="grid gap-3">
                            {detail.programs.map((program, index) => (
                                <li
                                    key={program.id}
                                    className="rounded-xl border border-border bg-background p-4"
                                >
                                    <p className="text-sm font-semibold text-primary">
                                        {index + 1}. {program.title}
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {program.description}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </CardContent>
                </Card>
            )}

            {/* Members */}
            {detail.members.length > 0 && (
                <Card className="ds-elevated">
                    <CardHeader>
                        <CardTitle className="inline-flex items-center gap-2 text-xl">
                            <UsersIcon className="icon-sm text-primary" />
                            Struktur Pengurus
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="grid gap-2 sm:grid-cols-2">
                            {detail.members.map((member) => (
                                <li
                                    key={member.id}
                                    className="rounded-xl border border-border bg-background p-4"
                                >
                                    <p className="text-sm font-semibold text-foreground">
                                        {member.name}
                                    </p>
                                    <p className="mt-0.5 text-xs text-muted-foreground">
                                        {member.role}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}
        </section>
    );
}
