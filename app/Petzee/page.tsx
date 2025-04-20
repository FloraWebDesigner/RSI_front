import { GetProductOrigins } from "@/components/rsi/api_backend/product-origin-api";
import { PetzeeCarousel } from "@/components/rsi/petzee/petzee-carousel";
import { SectionTitle } from "@/components/rsi/section-title";
import PetzeeContent from "@/components/rsi/petzee/petzee-content";
import { BizSection } from "@/components/rsi/home/biz-section";

export default function Petzee() {
  return (
    <main>
      <PetzeeCarousel />
      <SectionTitle myTitle="Our Brand" />
      <BizSection productName="Petzee" />
      <SectionTitle myTitle="Crafting Premium-Quality Dog Treats" />
      <PetzeeContent />
      <SectionTitle myTitle="Our Presence" />
      <section className="maps mx-16 mb-10">
        <GetProductOrigins productName="Petzee" />
      </section>
    </main>
  );
}
