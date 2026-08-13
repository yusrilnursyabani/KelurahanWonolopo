import dynamic from "next/dynamic";

const InteractiveMapView = dynamic(
  () => import("@/components/profile").then((mod) => mod.InteractiveMapView),
  {
    loading: () => (
      <div className="rounded-3xl border border-border/80 bg-card p-12 text-center text-sm font-medium text-muted-foreground animate-pulse">
        Memuat peta interaktif wilayah Wonolopo...
      </div>
    ),
  }
);

export default function MapsPage() {
  return (
    <section className="space-y-6">
      <InteractiveMapView />
    </section>
  );
}
