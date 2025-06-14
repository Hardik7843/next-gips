"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface WhyUsCardProps {
  image: StaticImageData | string; // if using import image from ... or external URL
  text: string;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({ image, text }) => {
  return (
    <div className="bg-gray-50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-xl px-4 py-5">
      <div className="w-full flex justify-center mb-3">
        <div className="rounded-full p-1 bg-blue-400">
          <div className="bg-white rounded-full p-2">
            {typeof image === "string" ? (
              <Image
                src={image}
                alt="icon here"
                className="w-12 h-12 object-contain rounded-full"
              />
            ) : (
              <Image
                src={image}
                alt="icon here"
                width={48}
                height={48}
                className="object-contain rounded-full"
              />
            )}
          </div>
        </div>
      </div>
      <div className="text-gray-800 text-center">{text}</div>
    </div>
  );
};

export default WhyUsCard;
