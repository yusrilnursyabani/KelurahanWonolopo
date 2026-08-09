import { serviceCatalog } from "@/data";
import { ServiceFilterView } from "@/components/layanan";

export default function LayananPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Katalog Layanan Publik & Portal Semarang
        </h2>
        <p className="ds-body text-sm md:text-base">
          Temukan layanan administrasi kelurahan, perpajakan & perizinan, kesehatan, pengaduan publik, serta tautan portal resmi Kota Semarang.
        </p>
      </div>

      <ServiceFilterView services={serviceCatalog} />
    </section>
  );
}
