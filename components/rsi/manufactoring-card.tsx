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
  height = 60,
  variant,
}) => {
  const heightClasses = {
    56: "h-56 w-56",
    60: "h-60 w-60",
    48: "h-48 w-48",
  };

  const cardBgClass =
    variant === "transparent"
      ? "bg-transparent"
      : "bg-slate-200 dark:bg-slate-700";

  const sizeClass =
    heightClasses[height as keyof typeof heightClasses] || "h-48 w-48";

  return (
    <div className="flex items-center w-3/4 mx-auto relative mb-4 translate-x-10">
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
        <p className="text-gray-600 text-sm dark:text-gray-200 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ManufactoringCard;
