import React from "react";

interface SectionHeadProps {
  title: string;
}

const SectionHead: React.FC<SectionHeadProps> = ({ title }) => {
  return (
    <div className="flex justify-start mb-3 bg-gray-200">
      <div className="border-4 border-blue-500" />
      <p className="w-fit p-1.5">{title}</p>
    </div>
  );
};

export default SectionHead;
