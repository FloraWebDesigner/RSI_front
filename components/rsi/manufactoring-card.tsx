import React from "react";
import Image, { StaticImageData } from "next/image";

interface ManufactoringCardProps {
  imageUrl: StaticImageData | string;
  title: string;
  description: string;
  imageAlt?: string;
  height?: number;
  variant?: "filled" | "transparent";
}

const ManufactoringCard: React.FC<ManufactoringCardProps> = ({
  imageUrl,
  title,
  description,
  imageAlt = "Manufactoring image",
  height = 75,
  variant,
}) => {
  const heightClasses = {
    56: "h-65 w-65",
    60: "h-75 w-75",
    48: "h-56 w-56",
  };

  const cardBgClass =
    variant === "transparent"
      ? "bg-transparent"
      : "bg-slate-200 dark:bg-slate-700";

  const sizeClass =
    heightClasses[height as keyof typeof heightClasses] || "h-56 w-56";

  return (
    <>
      {/* Mobile View (stacked) */}
      <div className="md:hidden w-9/10 text-center rounded-lg shadow-md p-3 mb-4 border-2 border-slate-200 dark:border-slate-700 bg-slate-200 dark:bg-slate-700">
        <div className="flex flex-col items-center">
          <div className={`relative ${sizeClass} mb-4`}>
            <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-slate-200 dark:border-slate-700">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>
          <div className="text-center w-full">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 text-sm dark:text-gray-200 mt-2">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop View (original layout - unchanged) */}
       <div className="hidden md:flex items-center mx-auto relative mb-4 translate-x-10 w-full max-w-[820px]:w-full lg:w-3/4">
        <div className={`relative z-10 ${sizeClass}`}>
          <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-slate-200 dark:border-slate-700 shadow-md">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
        </div>

        <div
          className={`${sizeClass
            .replace("w-24", "")
            .replace("w-32", "")
            .replace("w-40", "")
            .replace(
              "w-48",
              ""
            )} flex-1 rounded-r-lg shadow-md p-4 flex flex-col justify-center -translate-x-30 z-0 border-2 border-slate-200 dark:border-slate-700 ${cardBgClass} pl-36`}
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 text-sm dark:text-gray-200 mt-2">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ManufactoringCard;