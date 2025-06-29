import ManufactoringCard from "../manufactoring-card";

export default function PetzeeManufactoring() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ManufactoringCard
        imageUrl="/img/petzee-manufactoring-1.jpeg"
        title="Raw Material Sourcing"
        description="Our bully sticks are made from 100% natural beef pizzle, organically sourced from grass-fed, free-range cattle raised without hormones, antibiotics, or growth enhancers. We handpick only the highest-grade raw material from trusted farms that align with our commitment to ethical, chemical-free production. These premium sticks are the foundation of a treat loved by dogs around the world."
        variant="filled"
      />
      <ManufactoringCard
        imageUrl="/img/dogtreats5.jpeg"
        title="Cleaning"
        description="Each pizzle is meticulously hand-cleaned using only water—absolutely no bleach, no chemicals, and no artificial agents. This careful, manual cleaning process removes surface impurities while preserving the natural proteins and flavor. It's a crucial step in delivering a safe, all-natural chew that reflects our organic standards."
        variant="transparent"
      />
      <ManufactoringCard
        imageUrl="/img/petzee-manufactoring-3.jpeg"
        title="Shaping & Preparation"
        description="Whether straight, braided, or curled, each bully stick is shaped by hand without any mechanical molds or synthetic treatments. Our artisans take pride in crafting every chew naturally, ensuring dogs get a wholesome, chemical-free experience in every bite. No glue, binders, or preservatives—just nature's work, made by hand.
"
        variant="filled"
      />
      <ManufactoringCard
        imageUrl="/img/petzee-manufactoring-4.jpeg"
        title="Drying & Cooking"
        description="Our bully sticks are gently air-dried or oven-baked over several days at controlled, low temperatures. This slow process draws out moisture while preserving nutrients and enhancing flavor, all without using any artificial flavoring, smoke, or preservatives. The result is a safe, long-lasting chew that's fully digestible and naturally low in odor.

"
        variant="transparent"
      />
      <ManufactoringCard
        imageUrl="/img/petzee-manufactoring-5.jpeg"
        title="Cutting & Sizing"
        description="Once perfectly dried, the bully sticks are hand-cut to uniform sizes and categorized by thickness—ideal for dogs of all breeds. This step is done manually to ensure consistent quality and presentation, with no chemical processing or polishing involved. Just clean, natural cuts made with care.
"
        variant="filled"
      />
      <ManufactoringCard
        imageUrl="/img/petzee-manufactoring-6.jpeg"
        title="Quality Inspection"
        description="Each stick is individually inspected by hand to ensure top-tier quality, safety, and consistency. Our low-odor bully sticks are achieved purely through extended drying—not by using chemical deodorants. Every batch is approved for export and meets strict international food safety standards.
"
        variant="transparent"
      />
      <ManufactoringCard
        imageUrl="/img/dogtreats4.jpeg"
        title="Packaging & Export"
        description="After passing inspection, our bully sticks are packed in food-grade, puncture-proof, resealable bags that lock in freshness without the need for preservatives. We proudly ship our products to customers and distributors across North America, Europe, and Asia—sharing our commitment to chemical-free, handcrafted dog treats worldwide.
"
        variant="filled"
      />
    </div>
  );
}
