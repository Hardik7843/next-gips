/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import SectionHead from "./SectionHead";
import Image from "next/image";
import aiCalling from "../../public/pngs/aiCalling.svg";
import aiDevelopment from "../../public/pngs/aiDevelopment.png";
import dataCollection from "../../public/pngs/dataCollection.png";
import metaVerseDev from "../../public/pngs/metaVerseDev.png";
import mobileDev from "../../public/pngs/mobileDev.png";
import roboticsCourse from "../../public/pngs/roboticsCourse.png";
import softwareDev from "../../public/pngs/softwareDev.png";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <section id="services" className="px-6 scroll-mt-[65px] min-h-[60vh] mb-16">
      <SectionHead>Our Services</SectionHead>

      <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 justify-items-center mb-5.5">
        {/* Service */}
        <ServiceCard src={aiCalling} title="AI Calling Service" />
        <ServiceCard src={aiDevelopment} title="AI Development" />
        <ServiceCard src={dataCollection} title="AI Data Generation" />
        <ServiceCard src={mobileDev} title="App Development" />
        <ServiceCard src={metaVerseDev} title="Meta Verse Development" />
        <ServiceCard src={roboticsCourse} title="Robotics & AI Course" />
      </div>
      <div className="w-full">
        <ServiceCard src={softwareDev} title="Software Devlopment" />
      </div>
    </section>
  );
};

export default ServiceSection;
