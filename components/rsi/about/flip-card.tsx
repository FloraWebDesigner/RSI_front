import { useState } from "react";

interface FlipCardProps {
  title: string;
  details: string;
}

export default function FlipCard({ title, details }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-1/4 h-48 cursor-pointer perspective"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full p-5 h-full border-1 text-accent-foreground flex flex-col items-center justify-center shadow-sm backface-hidden">
          <h2 className="text-xl font-bold text-center">{title}</h2>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full border-1 bg-accent-foreground text-accent flex flex-col items-center justify-center shadow-lg rotate-y-180 backface-hidden p-5">
          <p className="text-sm">{details}</p>
        </div>
      </div>
    </div>
  );
}
