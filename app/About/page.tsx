import { AboutCarousel } from "@/components/rsi/about/about-carousel";
import { SectionTitle } from "@/components/rsi/section-title";
import { History } from "@/components/rsi/about/cp-vertical-history";
import { Legacy } from "@/components/rsi/about/legacy";

export default function About() {
  return (
    <main>
      <AboutCarousel />
      <SectionTitle myTitle="Company History" />
      <History />
      <div className="bg-accent/65 w-full my-10 py-3 text-accent-foreground">
        <SectionTitle myTitle="Family Legacy" />
        <Legacy />
      </div>
    </main>
  );
}
