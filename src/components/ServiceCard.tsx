/* eslint-disable @typescript-eslint/no-unused-vars */
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface ServiceCardProps {
  src: string | StaticImageData;
  title: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ src, title }) => {
  return (
    <div className="w-full ">
      <div className="h-30 w-full relative  aspect-[1/1]  flex justify-center rounded-3xl mb-1.5">
        <Image
          fill
          src={src}
          alt="ai Calling Photo"
          className="object-contain"
        />
      </div>

      <div className="text-lg w-full text-center font-semibold font-sans">
        <p className="bg-clip-text text-transparent  bg-teal-300">{title}</p>
      </div>

      {/* <Link className="text-white" href={"/aiCalling"}>
        Know More
      </Link> */}
    </div>
  );
};

export default ServiceCard;
