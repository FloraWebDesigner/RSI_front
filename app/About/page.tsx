import { AboutCarousel } from "@/components/rsi/about-carousel";
import { SectionTitle } from "@/components/rsi/section-title";
import { History } from "@/components/rsi/cp-history";

export default function About() {
  return (
    <main>
      <AboutCarousel />
      <SectionTitle myTitle="Company History" />
      <History />
      <SectionTitle myTitle="Family Legacy" />
      <SectionTitle myTitle="Core Values" />
    </main>
  );
}
