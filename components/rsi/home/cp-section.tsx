import { CpHightlights } from "@/components/rsi/home/cp-highlight";
import { Button } from "../../ui/button";
import { MoveUpRight, History, Shell, Bone, Dna } from "lucide-react";
import Link from "next/link";

export function CpSection() {
  return (
    <section className="ourCp mx-16">
      <div className="flex h-60">
        <img
          src="/img/company1.jpeg"
          alt="this is a cpmpany pic"
          className="w-1/2 object-cover object-center"
        />
        <div className="flex flex-col items-center justify-center p-4 w-1/2">
          <h2 className="text-2xl font-bold mb-2">Rooted in Craft, Driven by Care</h2>
          <Link href="/About" passHref>
            <Button>
              Learn More
              <MoveUpRight />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <CpHightlights
          title="Handmade Trade"
          desc="Established in 1975, specializing in handmade goods & global trade"
          icon={<History />}
        />
        <CpHightlights
          title="Global Carpets"
          desc="Premium handmade carpets sourced from Pakistan, Iran, Afghanistan, India, and Turkey"
          icon={<Shell />}
        />
        <CpHightlights
          title="Pet Treats"
          desc="Natural dog treats manufacturer for brands like Petzee, HULK Pet Products, and Premium Bully Sticks"
          icon={<Bone />}
        />
        <CpHightlights
          title="Family Legacy"
          desc="Family-run for three generations, built on hard work, quality, and trust"
          icon={<Dna />}
        />
      </div>
    </section>
  );
}
