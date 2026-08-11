import {
  AboutWonolopoSection,
  CtaSection,
  GallerySection,
  Hero,
  NewsSection,
  QuickServicesSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickServicesSection />
      <AboutWonolopoSection />
      <NewsSection />
      <GallerySection />
      <CtaSection />
    </>
  );
}
