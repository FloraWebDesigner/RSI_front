"use client";
import { CarouselSize } from "@/components/rsi/home/hero-carousel";
import { SectionTitle } from "@/components/rsi/section-title";
import { CpSection } from "@/components/rsi/home/cp-section";
import { BizSection } from "@/components/rsi/home/biz-section";
import { OriginSection } from "@/components/rsi/origin-section";
import { CoreValue } from "@/components/rsi/home/core-value";

export default function Home() {
  return (
    <main>
      <CarouselSize />
      <SectionTitle myTitle="Our Company" id="about" />
      <CpSection />
      <SectionTitle myTitle="Our Business" id="business" />
      <BizSection useGeneratedLink={true} />
      <SectionTitle myTitle="Core Values" />
      <CoreValue />
      <SectionTitle myTitle="Our Presence" id="contact" />
      <OriginSection />
    </main>
  );
}
