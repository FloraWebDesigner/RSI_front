"use client";
import { RSI_menu } from "@/components/rsi/menu";
import { CarouselSize } from "@/components/rsi/hero-carousel";
import { SectionTitle } from "@/components/rsi/section-title";
import { CpSection } from "@/components/rsi/cp-section";
import { BizSection } from "@/components/rsi/biz-section";
import { GoogleMap } from "@react-google-maps/api";
import Maps from "@/components/rsi/google-map";
import { OneLocation } from "@/components/rsi/map";

export default function Home() {
  return (
    <main>
      <RSI_menu />
      <CarouselSize />
      <SectionTitle myTitle="Our Company" id="about" />
      <CpSection />
      <SectionTitle myTitle="Our Business" id="business" />
      <BizSection />
      <SectionTitle myTitle="Our Presence" id="contact" />
      {/* <Maps /> */}
      <OneLocation />
    </main>
  );
}
