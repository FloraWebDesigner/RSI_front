import { CpHightlights } from "@/components/rsi/cp-highlight";
import { Button } from "../ui/button";
import { MoveUpRight, History, Shell, Bone, Dna } from "lucide-react";

export function CpSection() {
  return (
    <section className="ourCp mx-16">
      <div className="flex h-48">
        <img src="img/pic.png" alt="this is a cpmpany pic" className="w-1/2" />
        <div className="flex flex-col items-center justify-center p-4 w-1/2">
          <h2 className="text-2xl font-bold mb-2">This is OUR Company title</h2>
          <Button>
            Learn More
            <MoveUpRight />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <CpHightlights
          title="title1"
          desc="Established in 1975, specializing in handmade goods & global trade"
          icon={<History />}
        />
        <CpHightlights
          title="title2"
          desc="Premium handmade carpets sourced from Pakistan, Iran, Afghanistan, India, and Turkey"
          icon={<Shell />}
        />
        <CpHightlights
          title="title3"
          desc="Natural dog treats manufacturer for brands like Petzee, HULK Pet Products, and Premium Bully Sticks"
          icon={<Bone />}
        />
        <CpHightlights
          title="title4"
          desc="Family-run for three generations, built on hard work, quality, and trust"
          icon={<Dna />}
        />
      </div>
    </section>
  );
}
