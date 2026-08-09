import { mainNavigation } from "@/data";

import { Container, Section } from "@/components/common";
import { Sidebar } from "@/components/layout";

export default function ProfilLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profileItems =
    mainNavigation.find((item) => item.href === "/profil")?.children ?? [];

  return (
    <Section>
      <Container className="space-y-8">
        <header className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Profil Kelurahan
          </p>
          <h1 className="font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Informasi Profil Kelurahan Wonolopo
          </h1>
          <p className="ds-body max-w-3xl text-sm md:text-base">
            Halaman profil menyajikan gambaran visi misi, kondisi geografis,
            struktur pemerintahan, sarana prasarana, dan peta wilayah Kelurahan
            Wonolopo.
          </p>
        </header>

        <div className="grid items-start gap-6 lg:grid-cols-[17rem_1fr]">
          <Sidebar title="Menu Profil" items={profileItems} className="lg:sticky lg:top-24" />
          <div className="space-y-6">{children}</div>
        </div>
      </Container>
    </Section>
  );
}
