"use client";

export function History() {
  const years: { id: keyof typeof content; label: string }[] = [
    { id: "1975", label: "1975" },
    { id: "1990", label: "1990" },
    { id: "2019", label: "2019" },
    { id: "now", label: "Now" },
  ];

  const content = {
    "1975": {
      title: "Crafting Excellence Since 1975",
      text: "In 1975, Rasheed Shakeel Inc. was founded as Rasheed Shakeel.International in Pakistan, specializing in the manufacturing and trade of handmade goods. From the beginning, the company focused on preserving traditional craftsmanship and delivering high-quality products. This marked the start of a journey dedicated to authenticity and excellence in global markets.",
      image: "/img/company2.jpeg",
    },
    "1990": {
      title: "Expansion in 1990",
      text: "By 1990, Rasheed Shakeel Inc. had expanded internationally,           establishing itself as a trusted supplier of premium handmade             carpets. Sourcing from renowned regions like Pakistan, Iran,              Afghanistan, India, and Turkey, the company became known for its              commitment to artistry and tradition. This period solidified its              reputation as a leader in the handmade carpet industry.",
      image: "/img/carpet33.jpeg",
    },
    "2019": {
      title: "Entry into Pet Treats in 2019",
      text: "In 2019, Rasheed Shakeel Inc. ventured into the pet industry,         launching a line of all-natural dog treats. Partnering with brands             like Petzee and HULK Pet Products, the company prioritized quality             and pet health, adhering to CFIA and FDA guidelines. This             expansion reflected its adaptability and commitment to meeting              evolving market demands.",
      image: "/img/dogtreats7.jpeg",
    },
    now: {
      title: "Our story continues",
      text: "Today, Rasheed Shakeel Inc. continues to thrive as a family-owned       business, now led by its third generation. With a legacy of             craftsmanship and entrepreneurship, the company remains dedicated             to sustainability, quality, and connecting global markets. Its              diverse portfolio, including handmade carpets and natural pet              treats, reflects its enduring values and innovative spirit.",
      image: "/img/global.jpeg",
    },
  };

  return (
    <div className="mx-16 flex gap-6 justify-center">
      {/* Timeline */}
      <div className="relative flex flex-col items-center">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 flex flex-col items-center">
          {/* Top cap circle */}
          <div className="w-3 h-3 rounded-full bg-foreground border-0 z-10" />

          {/* Main line */}
          <div className="w-px bg-foreground flex-1" />

          {/* Bottom cap circle */}
          <div className="w-3 h-3 rounded-full bg-foreground -mb-1.5 z-10" />
        </div>
        {/* Year markers positioned relative to content */}
        <div className="relative h-full w-8">
          {years.map((year) => (
            <div
              key={year.id}
              className="absolute left-3 transform -translate-x-1/2"
              style={{ top: `calc(${years.indexOf(year) * 25 + 12.5}%)` }}
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-white bg-foreground flex items-center justify-center z-10 relative">
                  <span className="text-white text-sm font-semibold">
                    {year.label}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-full border-9 border-foreground opacity-20 z-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="w-[70%]">
        {years.map((year) => (
          <div
            key={year.id}
            className="relative py-12"
            style={{ minHeight: "25vh" }}
            id={`year-${year.id}`}
          >
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">
                {content[year.id].title}
              </h2>
              <p className="mb-6">{content[year.id].text}</p>
              <img
                src={content[year.id].image}
                alt="Historical moment"
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
