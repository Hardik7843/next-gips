import React from "react";
import Image, { StaticImageData } from "next/image";
import SectionHead from "../SectionHead";

type InfoCardProps = {
  title: string;
  imageSrc: string | StaticImageData;
  descriptionPoints: string[];
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  imageSrc,
  descriptionPoints,
}) => {
  return (
    <div className=" w-full border border-white">
      <SectionHead>{title}</SectionHead>
      <div className="flex flex-col items-center md:items-start gap-6">
        {/* Image with 1:1 aspect ratio */}
        <div className="w-1/2 lg:w-1/2 xl:w-1/3 aspect-square relative">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Description List */}
        <div className="border border-white space-y-2 text-gray-400 w-full">
          {descriptionPoints.map((point, index) => (
            <p key={index} className="break-words">
              {point}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
