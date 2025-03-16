import { PetzeeCarousel } from "@/components/rsi/petzee-carousel";
import { SectionTitle } from "@/components/rsi/section-title";

export default function Petzee() {
  return (
    <main>
      <PetzeeCarousel />
      <SectionTitle myTitle="Our Products" />
      {/* add categorized products */}
      <SectionTitle myTitle="Our Presence" />
    </main>
  );
}
