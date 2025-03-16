import { SectionTitle } from "@/components/rsi/section-title";
import { OriginSection } from "@/components/rsi/origin-section";
import { ContactSection } from "@/components/rsi/contact";

export default function Contact() {
  return (
    <main>
      <OriginSection />
      <SectionTitle myTitle="Contact Us" />
      <ContactSection />
    </main>
  );
}
