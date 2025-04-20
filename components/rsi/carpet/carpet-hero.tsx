import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CarpetHero() {
  return (
    <section className="w-full h-80 relative p-0">
      <div
        className="flex w-full h-full items-center justify-center"
        style={{
          backgroundImage: `url(/img/Persian-Carpets-1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h2 className="text-4xl font-bold mb-2">
            Timeless Craftsmanship, Woven by Generations
          </h2>
          <Link href="https://www.wovenconcept.com" passHref>
            <Button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Browse Our Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
