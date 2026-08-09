import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

import { profileSections } from "@/data";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground md:text-2xl">
        Ringkasan Profil
      </h2>
      <p className="ds-body text-sm md:text-base">
        Pilih bagian profil untuk melihat informasi detail tentang Kelurahan
        Wonolopo.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {profileSections.map((section) => (
          <Card key={section.id} className="ds-elevated h-full">
            <CardHeader>
              <CardTitle className="text-xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="ds-body text-sm">{section.content[0]}</p>
              <Link
                href={`/profil/${section.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
              >
                Buka detail
                <ArrowUpRightIcon className="icon-sm" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
