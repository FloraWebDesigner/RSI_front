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
      <div className="bg-accent/65 text-accent-foreground m-8 md:w-full md:my-10 md:py-3 ">
        <SectionTitle myTitle="Family Legacy" />
        <Legacy />
      </div>
    </main>
  );
}
