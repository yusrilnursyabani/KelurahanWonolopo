import { Container, Section } from "@/components/common";
import { ServiceSidebar } from "@/components/layanan";

export default function LayananLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Section>
      <Container className="space-y-8">
        <header className="space-y-3 rounded-3xl border border-border/80 bg-gradient-to-br from-primary/5 via-background to-amber-500/5 p-6 md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            <span>Pelayanan Publik & Portal Resmi</span>
          </div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Informasi Layanan Warga Wonolopo
          </h1>
          <p className="ds-body max-w-3xl text-sm md:text-base leading-relaxed">
            Akses informasi lengkap persyaratan, alur, dan durasi pengurusan surat kelurahan, layanan PBB, kesehatan, pengaduan publik, hingga portal terpadu Pemkot Semarang.
          </p>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[20rem_1fr]">
          <ServiceSidebar />
          <div className="min-w-0 space-y-6">{children}</div>
        </div>
      </Container>
    </Section>
  );
}
