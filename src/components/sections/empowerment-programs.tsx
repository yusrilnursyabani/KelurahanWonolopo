import type { EmpowermentProgramItem } from "@/types/content";

import { empowermentPrograms } from "@/data";

import { Container, Section, SectionTitle } from "@/components/common";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function ProgramCard({ item }: { item: EmpowermentProgramItem }) {
  return (
    <Card className="ds-elevated h-full">
      <CardHeader className="space-y-2">
        <CardTitle className="text-xl leading-tight">{item.title}</CardTitle>
        <CardDescription className="text-primary">{item.targetGroup}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="ds-body text-sm">{item.description}</p>
        <p className="text-sm font-medium text-foreground">Jadwal: {item.schedule}</p>
      </CardContent>
    </Card>
  );
}

export function EmpowermentProgramsSection() {
  return (
    <Section className="bg-[linear-gradient(180deg,oklch(0.985_0.003_258)_0%,oklch(1_0_0)_100%)]">
      <Container className="space-y-8">
        <SectionTitle
          title="Program Pemberdayaan Masyarakat"
          subtitle="Penguatan kapasitas warga melalui program ekonomi, sosial, dan kepemudaan yang berkelanjutan."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {empowermentPrograms.map((item) => (
            <ProgramCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
