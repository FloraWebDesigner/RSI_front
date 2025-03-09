"use client";
import { CarouselSize } from "@/components/rsi/hero-carousel";
import { SectionTitle } from "@/components/rsi/section-title";
import { CpSection } from "@/components/rsi/cp-section";
import { BizSection } from "@/components/rsi/biz-section";
import { OriginSection } from "@/components/rsi/origin-section";

export default function Home() {
  return (
    <main>
      <CarouselSize />
      <SectionTitle myTitle="Our Company" id="about" />
      <CpSection />
      <SectionTitle myTitle="Our Business" id="business" />
      <BizSection />
      <SectionTitle myTitle="Our Presence" id="contact" />
      <OriginSection />
    </main>
  );
}
