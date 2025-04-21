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

const images = ["/img/petVideo.gif", "/img/dogtreats10.jpeg"];

export function PetzeeCarousel() {
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
            <div className="p-1">
              <Card className="w-full h-80 relative p-0">
                <CardContent
                  className="flex w-full h-full items-center justify-center"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {index === 0 && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                      <h2 className="text-4xl font-bold mb-2">
                        {index === 0 ? "A happy dog enjoying a treat" : ""}
                      </h2>
                      <Link
                        href="https://www.petzee.ca"
                        passHref
                        legacyBehavior
                      >
                        <a target="_blank" rel="noopener noreferrer">
                          <Button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                            {index === 0 ? "Explore Our Treats" : ""}
                          </Button>
                        </a>
                      </Link>
                    </div>
                  )}
                </CardContent>
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
