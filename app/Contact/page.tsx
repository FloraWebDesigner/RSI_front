import { SectionTitle } from "@/components/rsi/section-title";
import { OriginSection } from "@/components/rsi/origin-section";
import { ContactSection } from "@/components/rsi/contact/contact";

export default function Contact() {
  return (
    <main>
      <SectionTitle myTitle="Spanning the World, Connecting Cultures" />
      <OriginSection />
      <SectionTitle myTitle="Contact Us" />
      <ContactSection />
    </main>
  );
}
