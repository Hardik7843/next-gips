/* eslint-disable no-unused-vars */
"use client";
import React from "react";
import students1 from "@/../public/Person/students1.png";
import { motion } from "framer-motion";
import SectionHead from "@/components/SectionHead";
import starIcon from "@/../public/star.svg";
import booksIcon from "@/../public/books.svg";
import graduationIcon from "@/../public/graduationcap.svg";
import moneyIcon from "@/../public/moneyInHand.svg";
// import noMoneyIcon from "@/../public/noMoney.svg";
import skillIcon from "@/../public/skillsAndKnowledge.svg";
import doctorIcon from "@/../public/sthethscope.svg";
import WhyUsCard from "@/components/WhyUsCard";
import Image from "next/image";

const HomePage2 = () => {
  const shortIntro =
    "An autonomous institution established in the year 2021 with the strength of 10 students for paramedical course. The journey was begun with 2 faculty in the field of imparting nursing education and paramedical training. It was a 2 tier system of Authorization. All India Council for Paramedical & Vocational from New Delhi";

  const typesOfStreams = [
    "Nursing Assistant",
    "OT Technicians",
    "Diploma in Medical Lab Technology (DMLT)",
    "Diploma in Dialysis Technology",
    "MRI/CT Scan Technician",
    "X-ray Technician & and many more",
  ];

  const geipsEdge = [
    "Authorized for training by Indian Nursing Council (INC) and Karnataka Nursing Council (KNC) approved colleges.",
    "One of the Institute of Lowest Fees Structure in Mumbai for GNM (General Nursing Midwifery)",
    "Internship in the Best Hospitals of Mumbai.",
    "Short Term Courses (eg. NABH)",
    "ISO Certified 9001:2015 (Quality Management System)",
    "Free Goverment Interships",
  ];

  const geipsUniqueNess = [
    "Knowledge Skill Framework with Industry Experts & One of the Qualified Faculty",
    "Lowest Fees in Mumbai with Limited 50 Seats per Batch",
    "No Extra Charges for Study Material",
    "Scholarship Gov. and Inhouse",
    "Online (Mon.-Fri.) & Offline Format of Lectures (Sat.-Sun.) with Practicals",
  ];

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-black min-h-[60vh] scroll-mt-[80px] mt-30">
      <div className="px-10 md:text-2xl font-extrabold font-serif mb-3">
        Global Educational Institute of Paramedical Sciences
      </div>
      <div className="px-10 borde w-full flex flex-col md:flex-row gap-x-4">
        {/* Image - Slide from Left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-fit relative aspect-video rounded-2xl borde-2"
        >
          <Image
            src={students1}
            alt="person"
            className="object-contain rounded-2xl"
          />
        </motion.div>

        {/* Text and Streams - Slide from Right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[3/5] borde break-words text-justify"
        >
          <p className="w-full">{shortIntro}</p>

          <div className="w-full flex flex-col items-start text-black mt-4">
            <p>All types of Paramedical courses majorly</p>

            {/* Staggered List Animation */}
            <motion.ol
              className="list-disc text-blue-600 space-y-2 pl-6"
              initial="hidden"
              animate="visible"
              variants={listVariants}
            >
              {typesOfStreams.map((stream, index) => (
                <motion.li key={index} variants={itemVariants}>
                  {stream}
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </motion.div>
      </div>

      <div className="px-10 mt-10 ">
        <SectionHead title={"Why Choose GEIPS"} />

        <div className="grid grid-cols-2 sm:grid-cols-3 sm:grid-rows-1 gap-y-4 gap-x-5">
          <WhyUsCard image={skillIcon} text={geipsUniqueNess[0]} />
          <WhyUsCard image={moneyIcon} text={geipsUniqueNess[1]} />
          <WhyUsCard image={booksIcon} text={geipsUniqueNess[2]} />
          <WhyUsCard image={graduationIcon} text={geipsUniqueNess[3]} />
          <WhyUsCard image={doctorIcon} text={geipsUniqueNess[4]} />
        </div>
      </div>

      <div className="px-10 mt-10 borde">
        <SectionHead title={"GIEPS Edge"} />
        <div className="borde space-y-3">
          {geipsEdge.map((edge, index) => (
            <div key={index} className="flex items-start">
              <Image src={starIcon} alt="Star Icon" />
              {edge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage2;
