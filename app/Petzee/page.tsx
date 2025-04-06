import { GetProductOrigins } from "@/components/rsi/api_backend/product-origin-api";
import { PetzeeCarousel } from "@/components/rsi/petzee/petzee-carousel";
import { SectionTitle } from "@/components/rsi/section-title";

export default function Petzee() {
  return (
    <main>
      <PetzeeCarousel />
      <SectionTitle myTitle="Our Products" />
      {/* add categorized products */}
      <SectionTitle myTitle="Our Presence" />
      <section className="maps mx-16 mb-10">
      <GetProductOrigins productName="Petzee" />
      </section>
    </main>
  );
}
