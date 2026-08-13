import dynamic from "next/dynamic";

const InfographicsView = dynamic(
  () => import("@/components/profile").then((mod) => mod.InfographicsView),
  {
    loading: () => (
      <div className="rounded-3xl border border-border/80 bg-card p-12 text-center text-sm font-medium text-muted-foreground animate-pulse">
        Memuat data grafik demografi & statistik...
      </div>
    ),
  }
);

export default function InfografisPage() {
  return (
    <section className="space-y-6">
      <InfographicsView />
    </section>
  );
}
