import { AboutCarousel } from "@/components/rsi/about-carousel";
import { SectionTitle } from "@/components/rsi/section-title";
import { History } from "@/components/rsi/cp-history";

export default function About() {
  return (
    <main>
      <AboutCarousel />
      <SectionTitle myTitle="Company History" id="#" />
      <History />
      <SectionTitle myTitle="Family Legacy" id="#" />
      <SectionTitle myTitle="Core Values" id="#" />
    </main>
  );
}
