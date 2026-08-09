import {
  AboutWonolopoSection,
  CtaSection,
  EmpowermentProgramsSection,
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
      <EmpowermentProgramsSection />
      <GallerySection />
      <CtaSection />
    </>
  );
}
