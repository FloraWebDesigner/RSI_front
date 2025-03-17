"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Progress } from "@radix-ui/react-progress";
import { useState } from "react";

export function History() {
  const [progress, setProgress] = useState(0);
  const handleMarkerClick = (year: string) => {
    switch (year) {
      case "1975":
        setProgress(0);
        break;
      case "1990":
        setProgress(33);
        break;
      case "2019":
        setProgress(67);
        break;
      case "now":
        setProgress(100);
        break;
      default:
        setProgress(0);
    }
  };
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Tabs
        defaultValue="1975"
        className="w-[600px]"
        onValueChange={handleMarkerClick}
      >
        <div className="relative w-full mt-4">
          <Progress value={progress} className="w-full h-3 bg-gray-200">
            <div
              className="absolute h-3 bg-gray-700"
              style={{ width: `${progress}%` }}
            />
          </Progress>

          <TabsList className="flex justify-between w-full absolute top-[-12px]">
            <TabsTrigger
              value="1975"
              className="bg-gray-800 text-white p-4 rounded-full cursor-pointer text-xs w-6 h-6 flex items-center justify-center"
              style={{ transform: "translateX(-1rem)" }}
            >
              1975
            </TabsTrigger>
            <TabsTrigger
              value="1990"
              className="bg-gray-800 text-white p-4 rounded-full cursor-pointer text-xs w-6 h-6 flex items-center justify-center"
            >
              1990
            </TabsTrigger>
            <TabsTrigger
              value="2019"
              className="bg-gray-800 text-white p-4 rounded-full cursor-pointer text-xs w-6 h-6 flex items-center justify-center"
            >
              2019
            </TabsTrigger>
            <TabsTrigger
              value="now"
              className="bg-gray-800 text-white p-4 rounded-full cursor-pointer text-xs w-6 h-6 flex items-center justify-center"
              style={{ transform: "translateX(1rem)" }}
            >
              now
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <TabsContent value="1975" className="w-full">
            <p className="text-center text-xl font-medium my-3">
              Crafting Excellence Since 1975
            </p>
            <p>
              In 1975, Rasheed Shakeel Inc. was founded as Rasheed Shakeel
              International in Pakistan, specializing in the manufacturing and
              trade of handmade goods. From the beginning, the company focused
              on preserving traditional craftsmanship and delivering
              high-quality products. This marked the start of a journey
              dedicated to authenticity and excellence in global markets.
            </p>
            <img
              src="/img/company2.jpeg"
              alt="add image to history"
              className="w-full h-60 object-center object-cover"
            />
          </TabsContent>
          <TabsContent value="1990" className="w-full">
            <p className="text-center text-xl font-medium my-3">
              Expansion in 1990
            </p>
            <p>
              By 1990, Rasheed Shakeel Inc. had expanded internationally,
              establishing itself as a trusted supplier of premium handmade
              carpets. Sourcing from renowned regions like Pakistan, Iran,
              Afghanistan, India, and Turkey, the company became known for its
              commitment to artistry and tradition. This period solidified its
              reputation as a leader in the handmade carpet industry.
            </p>
            <img
              src="/img/carpet33.jpeg"
              alt="add image to history"
              className="w-full h-60 object-center object-cover"
            />
          </TabsContent>
          <TabsContent value="2019" className="w-full">
            <p className="text-center text-xl font-medium my-3">
              Entry into Pet Treats in 2019
            </p>
            <p>
              In 2019, Rasheed Shakeel Inc. ventured into the pet industry,
              launching a line of all-natural dog treats. Partnering with brands
              like Petzee and HULK Pet Products, the company prioritized quality
              and pet health, adhering to CFIA and FDA guidelines. This
              expansion reflected its adaptability and commitment to meeting
              evolving market demands.
            </p>
            <img
              src="/img/dogtreats7.jpeg"
              alt="add image to history"
              className="w-full h-60 object-center object-cover"
            />
          </TabsContent>
          <TabsContent value="now" className="w-full">
            <p className="text-center text-xl font-medium my-3">
              Our story continues
            </p>
            <p>
              Today, Rasheed Shakeel Inc. continues to thrive as a family-owned
              business, now led by its third generation. With a legacy of
              craftsmanship and entrepreneurship, the company remains dedicated
              to sustainability, quality, and connecting global markets. Its
              diverse portfolio, including handmade carpets and natural pet
              treats, reflects its enduring values and innovative spirit.
            </p>
            <img
              src="/img/global.jpeg"
              alt="add image to history"
              className="w-full h-60 object-center object-cover"
            />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
