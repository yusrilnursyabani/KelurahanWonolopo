import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceDetailBySlug, serviceCatalog } from "@/data";

import { ServiceDetailContent } from "@/components/layanan";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceCatalog.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Layanan Tidak Ditemukan",
    };
  }

  return {
    title: `${service.title} | Layanan Kelurahan Wonolopo`,
    description: service.description,
  };
}

export function generateStaticParams() {
  return serviceCatalog
    .filter((service) => service.slug)
    .map((service) => ({ slug: service.slug! }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;

  if (!getServiceDetailBySlug(slug)) {
    notFound();
  }

  return <ServiceDetailContent slug={slug} />;
}
