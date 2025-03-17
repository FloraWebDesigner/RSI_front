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

const images = [
  "/img/carpet44.jpeg",
  "/img/carpet22.jpeg",
  "/img/dogtreats8.jpeg",
  "/img/dogtreats2.jpeg",
];

export function AboutCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="w-full h-auto">
            <Card className="w-full h-80 relative p-0">
              <CardContent
                className="flex w-full h-full items-center justify-center p-0"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
                {index === 0 && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-0">
                    <h2 className="text-3xl font-bold mb-3">
                      {index === 0 ? "Crafting Excellence Since 1975" : ""}
                    </h2>
                    <Link href="/Contact" passHref>
                      <Button>{index === 0 ? "Connect" : ""}</Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 inset-y-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white" />
      <CarouselNext className="absolute right-4 inset-y-1/2 transform -translate-y-1/2 z-10 bg-gray-900 text-white" />
    </Carousel>
  );
}
