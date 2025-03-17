"use client";
import FlipCard from "./flip-card";

export function CoreValue() {
  return (
    <section className="core-values w-3/4 flex flex-row flex-wrap items-center justify-center mx-auto mb-10">
      <FlipCard
        title="Commitment to Craftsmanship"
        details="Upholding the tradition of handmade, artisanal quality in every product we create and source."
      />
      <FlipCard
        title="Sustainability"
        details="Prioritizing eco-friendly practices and natural materials to ensure a positive impact on the environment."
      />
      <FlipCard
        title="Authenticity"
        details="Delivering genuine, high-quality products that reflect the rich heritage and traditions of their origins."
      />
      <FlipCard
        title="Innovation"
        details="Adapting to new challenges and opportunities while staying true to our core principles."
      />
      <FlipCard
        title="Excellence"
        details="Striving for the highest standards in quality, safety, and customer satisfaction across all our offerings."
      />
      <FlipCard
        title="Family Legacy"
        details="Embracing the values of hard work, entrepreneurship, and continuous learning passed down through generations."
      />
      <FlipCard
        title="Global Connection"
        details="Bridging markets and fostering partnerships to connect artisans with worldwide buyers."
      />
      <FlipCard
        title="Trust"
        details="Building lasting relationships with customers, partners, and communities through transparency and reliability."
      />
    </section>
  );
}
