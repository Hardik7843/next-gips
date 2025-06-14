// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
// import SectionHead from "./SectionHead";
// import Image from "next/image";

// const PricingSection = () => {
//   return (
//     <section
//       id="pricing"
//       className="border border-white px-6 scroll-mt-[65px] min-h-[60vh] mb-16"
//     >
//       <SectionHead>Our Pricing</SectionHead>

//       <div className="border border-white ">
//         {/*  */}
//       </div>
//     </section>
//   );
// };

// export default PricingSection;

"use client";
import React, { useState } from "react";
import SectionHead from "./SectionHead";
import PricingTab from "@/components/PricingTabs/PricingTab";

import {
  oneYearPlans,
  twoYearPlans,
  recommendedPlans,
} from "@/config/priceConfig";

const tabOptions = [
  { id: "1year", label: "1 Year Plans" },
  { id: "2year", label: "2 Year Plans" },
  { id: "recommended", label: "Recommended Plans" },
];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("1year");

  const getPlans = () => {
    switch (activeTab) {
      case "1year":
        return oneYearPlans;
      case "2year":
        return twoYearPlans;
      case "recommended":
        return recommendedPlans;
      default:
        return [];
    }
  };

  return (
    <section id="pricing" className="text-white scroll-mt-[80px]">
      <SectionHead>Our Pricing</SectionHead>

      {/* Tabs */}
      <div className="flex justify-center gap-4 my-6">
        {tabOptions.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
              activeTab === tab.id
                ? "border-blue-500 text-blue-500"
                : "border-transparent text-gray-400 hover:text-blue-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <PricingTab priceConfig={getPlans()} />
    </section>
  );
};

export default PricingSection;
