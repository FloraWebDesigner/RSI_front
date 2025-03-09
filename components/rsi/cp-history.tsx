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
        <div className="mt-5 flex items-center justify-center">
          <TabsContent value="1975">
            <p>Crafting Excellence Since 1975.</p>
            <img src="/img/pic.png" alt="add image to history" />
          </TabsContent>
          <TabsContent value="1990">
            <p>Expansion in 1990.</p>
            <img src="/img/pic.png" alt="add image to history" />
          </TabsContent>
          <TabsContent value="2019">
            <p>Entry into Pet Treats in 2019.</p>
            <img src="/img/pic.png" alt="add image to history" />
          </TabsContent>
          <TabsContent value="now">
            <p>Our story continues</p>
            <img src="/img/pic.png" alt="add image to history" />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
