import { CpHightlights } from "@/components/rsi/home/cp-highlight";
import { Button } from "../../ui/button";
import { MoveUpRight, History, Shell, Bone, Dna } from "lucide-react";
import Link from "next/link";

export function CpSection() {
  return (
    <section className="ourCp mx-4">
      <div className="flex flex-col h-60 mx-4 md:flex-row md:mx-16">
        <img
          src="/img/company1.jpeg"
          alt="this is a cpmpany pic"
          className="w-full object-cover object-center md:w-1/2 md:h-auto"
        />
        <div className="flex flex-col items-center justify-center w-full p-4 md:flex md:w-1/2 md:h-60">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Rooted in Craft, Driven by Care
          </h2>
          <Link href="/About" passHref>
            <Button>
              Learn More
              <MoveUpRight />
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 text-center mx-4 sm:grid-cols-2 md:grid-cols-4 md:mx-16">
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
