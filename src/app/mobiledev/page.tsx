import InfoCard from "@/components/ServiceDetailPage/ServiceDetail";
import React from "react";
import aiCalling from "@/../public/pngs/aiCalling.svg";

const AiCalling = () => {
  return (
    <section className="text-white min-h-[60vh] px-6 scroll-mt-[80px] mt-16">
      <InfoCard
        title="AI Calling Device"
        imageSrc={aiCalling}
        descriptionPoints={["Desc1", "Desc2", "Desc3"]}
      />
    </section>
  );
};

export default AiCalling;
