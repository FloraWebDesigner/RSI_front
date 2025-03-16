import { CarpetCarousel } from "@/components/rsi/carpet-carousel";
import { SectionTitle } from "@/components/rsi/section-title";

export default function Petzee() {
  return (
    <main>
      <CarpetCarousel />
      <SectionTitle myTitle="Our Products" />
      {/* add categorized products */}
      <SectionTitle myTitle="Our Presence" />
    </main>
  );
}
