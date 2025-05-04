import { Quote } from "lucide-react";

export function Legacy() {
  return (
    <section className="legacy w-3/4 mx-auto">
      <div className="flex flex-row items-center gap-5 mx-6 mb-10">
        <img
          src="https://www.wovenconcept.com/cdn/shop/files/Woven_Concepts_1.jpg?v=1693238878&width=750"
          alt="Woven Concepts"
          className="w-48 h-48 rounded-full object-cover object-[5%_30%]"
        />
        <div className="flex flex-col gap-2">
          <div className="text-medium mx-2 flex flex-row gap-2 justify-center">
            <Quote
              style={{ transform: "rotate(180deg)" }}
              className="text-accent-background inline-flex"
            />
            <h3 className="inline-flex text-lg">
              We believe in passing down not just a business, but a legacy of
              health, tradition, and values.
            </h3>
            <Quote className="text-accent-background inline-flex" />
          </div>
          <p className="text-accent-foreground opacity-80 text-center">
            Rasheed Shakeel Inc. embodies family-driven entrepreneurship, guided
            by hard work, risk-taking, and continuous learning. Now in its third
            generation, the company upholds a legacy of craftsmanship and
            innovation, blending tradition with new opportunities. Each
            generation builds on its predecessors&apos foundation, ensuring a
            passion for excellence remains central to its mission.
          </p>
        </div>
      </div>
    </section>
  );
}
