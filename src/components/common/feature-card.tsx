import type { ServiceItem } from "@/types/content";
import { ServiceCard } from "@/components/layanan/service-card";

interface FeatureCardProps {
  item: ServiceItem;
  className?: string;
}

export function FeatureCard({ item, className }: FeatureCardProps) {
  return <ServiceCard service={item} className={className} />;
}
