"use client";
import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { aboutTabs } from "@/config/aboutConfig";

// import aboutUsImg from "@../../../public/aboutus.webp";

import Tab from "./AboutUsTabs/Tab";
const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(aboutTabs[0].id);
  const current = aboutTabs.find((tab) => tab.id === activeTab);

  return (
    <section
      className="  text-white min-h-[60vh]  scroll-mt-[80px] mt-16"
      id="#"
    >
      <SectionHead>About Us</SectionHead>
      <div className="flex justify-center gap-x-5 my-6">
        {aboutTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={` py-2 px-4 text-lg font-semibold ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-50 hover:text-blue-400 "
            }`}
          >
            <p>{tab.title}</p>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {/* {current && <Tab tabItem={current}></Tab>} */}
      {current && <Tab key={current.id} tabItem={current} />}
    </section>
  );
};

export default AboutSection;
