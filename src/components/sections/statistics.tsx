import { villageStatistics } from "@/data";

import { Container, Section, SectionTitle, StatCard } from "@/components/common";

export function StatisticsSection() {
  return (
    <Section>
      <Container className="space-y-8">
        <SectionTitle
          title="Statistik Singkat Wilayah"
          subtitle="Gambaran umum kondisi wilayah dan cakupan layanan Kelurahan Wonolopo."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {villageStatistics.map((item) => (
            <StatCard key={item.label} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
