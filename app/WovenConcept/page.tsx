import { GetProductOrigins } from "@/components/rsi/api_backend/product-origin-api";
import { CarpetCarousel } from "@/components/rsi/carpet/carpet-carousel";
import { SectionTitle } from "@/components/rsi/section-title";
import { BizSection } from "@/components/rsi/home/biz-section";
import CarpetContent from "@/components/rsi/carpet/carpet-content";
import CarpetHero from "@/components/rsi/carpet/carpet-hero";

export default function Petzee() {
  return (
    <main>
      <CarpetHero />
      <SectionTitle myTitle="Our Brand" />
      <BizSection productName="Woven Concept" />
      <SectionTitle myTitle="Handwoven Carpets" />
      <CarpetContent />
      <SectionTitle myTitle="Our Presence" />
      <section className="maps mx-16 mb-10">
        <GetProductOrigins productName="Woven Concept" />
      </section>
    </main>
  );
}
