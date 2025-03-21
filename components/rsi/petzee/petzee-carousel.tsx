import * as React from "react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export function PetzeeCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="w-full h-auto">
            <div className="p-1">
              <Card className="w-full h-60">
                <CardContent className="flex w-full h-full items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
                {index === 0 && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-500 bg-opacity-40 text-white p-4">
                    <h2 className="text-2xl font-bold mb-2">
                      {index === 0 ? "A happy dog enjoying a treat" : ""}
                    </h2>
                    <Link href="https://https://www.petzee.ca" passHref>
                      <Button>{index === 0 ? "Explore Our Treats" : ""}</Button>
                    </Link>
                  </div>
                )}
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 inset-y-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white" />
      <CarouselNext className="absolute right-4 inset-y-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white" />
    </Carousel>
  );
}
