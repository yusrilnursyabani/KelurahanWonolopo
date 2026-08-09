import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircleIcon, ArrowLeftIcon, Clock3Icon, LandmarkIcon, MapPinIcon } from "lucide-react";

import { getServiceDetailBySlug, serviceCatalog, serviceCategories } from "@/data";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScientificArticlesView } from "./scientific-articles-view";

interface ServiceDetailContentProps {
  slug: string;
}

export function ServiceDetailContent({ slug }: ServiceDetailContentProps) {
  const service = serviceCatalog.find((item) => item.slug === slug);
  const detail = getServiceDetailBySlug(slug);

  if (!service || !detail) {
    notFound();
  }

  const categoryInfo = serviceCategories.find((cat) => cat.id === service.category);

  if (slug === "artikel-ilmiah") {
    return (
      <section className="space-y-6">
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground"
            render={<Link href="/layanan" />}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Kembali ke Katalog Layanan
          </Button>
        </div>

        <ScientificArticlesView />
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 rounded-xl text-xs font-semibold text-muted-foreground hover:text-foreground"
          render={<Link href="/layanan" />}
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Kembali ke Katalog Layanan
        </Button>
      </div>

      <article className="ds-surface space-y-5 p-6 md:p-8 rounded-3xl shadow-xs border border-border/80">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            {categoryInfo?.title || "Layanan Warga"}
          </span>
          <span className="rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 px-2.5 py-0.5 text-xs font-semibold">
            Kelurahan Wonolopo
          </span>
        </div>

        <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          {service.title}
        </h1>
        <p className="ds-body text-sm md:text-base leading-relaxed">{detail.summary}</p>

        <div className="grid gap-3 sm:grid-cols-3 pt-2">
          <div className="rounded-2xl border border-border/80 bg-background/80 p-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <Clock3Icon className="h-4 w-4 text-primary" />
              Estimasi Waktu
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">{detail.duration}</p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-background/80 p-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <LandmarkIcon className="h-4 w-4 text-primary" />
              Biaya Layanan
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">{detail.cost}</p>
          </div>
          <div className="rounded-2xl border border-border/80 bg-background/80 p-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary">
              <MapPinIcon className="h-4 w-4 text-primary" />
              Lokasi Pelayanan
            </p>
            <p className="mt-2 text-sm font-semibold text-foreground">{detail.location}</p>
          </div>
        </div>
      </article>

      <Card className="rounded-3xl border border-border/80">
        <CardHeader>
          <CardTitle className="text-xl font-bold font-heading">Persyaratan Layanan</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2.5">
            {detail.requirements.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 px-4 py-3 text-sm text-foreground"
              >
                <span className="flex h-2 w-2 rounded-full bg-primary" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="rounded-3xl border border-border/80">
        <CardHeader>
          <CardTitle className="text-xl font-bold font-heading">Alur & Prosedur Layanan</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="grid gap-3">
            {detail.steps.map((item) => (
              <li
                key={item.step}
                className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/80 p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {item.step}
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {detail.notes?.length ? (
        <Card className="rounded-3xl border border-amber-200/80 bg-amber-50/40 dark:border-amber-900/60 dark:bg-amber-950/20">
          <CardHeader>
            <CardTitle className="inline-flex items-center gap-2 text-lg font-bold font-heading text-amber-900 dark:text-amber-300">
              <AlertCircleIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              Catatan Penting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {detail.notes.map((note) => (
                <li key={note} className="text-sm text-amber-800 dark:text-amber-300">
                  • {note}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}
    </section>
  );
}
