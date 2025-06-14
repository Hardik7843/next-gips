/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaBook,
  FaGraduationCap,
  FaCheckCircle,
  FaUserGraduate,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SectionHead from "@/components/SectionHead";
import Image from "next/image";

import nursesPhoto from "@/../public/Person/nurses.png";
import Link from "next/link";

const CourseTimeline: React.FC = () => {
  const course: Record<number, string[]> = {
    1: [
      "Anatomy, Physiology & Microbiology",
      "Community Health Nursing Paper - 1",
      "Fundamental of Nursing",
      "Sociology & Psychology",
    ],
    2: [
      "Medical Surgical Paper - 1 & 2",
      "Psychiatric Nursing",
      "Paediatric Nursing",
    ],
    3: ["Community Health Nursing - 2", "Midwifery & Gynaecology Nursing"],
  };

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

  const shortIntro =
    "GNM (General Nursing Midwifery) 3yrs brings power packed online/offline format for ambitious nursing professionals preparing for the next stage of their car practical/hospital training.";

  const outComes: string[] = [
    "Grasp the Significance of Core Nursing Domain",
    "Integrate Knowledge & Concept Across Functional Areas of Nursing",
    "Boost Your Career in Nursing Stream",
    "Latest Nursing Methods & Theories for Practices",
    "Expand Your Professional Network",
  ];

  return (
    <div className="text-black min-h-[60vh] scroll-mt-[80px] mt-30">
      <div className="px-10 mb-3">
        <h2 className="text-3xl font-bold mb-8 text-blue-400">
          Design Your Success Story with GNM
        </h2>
      </div>

      <div className="borde px-10">
        <SectionHead title="GNM (General Nursing Midwifery)" />

        <div className="sm:px-5 borde w-full flex flex-col md:flex-row gap-x-4">
          {/* Image - Slide from Left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-fit relative aspect-video rounded-2xl borde-2"
          >
            <Image
              src={nursesPhoto}
              alt="person"
              className="object-contain rounded-2xl"
              fill
              style={{ objectFit: "contain" }}
            />
          </motion.div>

          {/* Text and points - Slide from Right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[3/5] borde break-words text-justify"
          >
            <p className="w-full">{shortIntro}</p>

            <div className="w-full flex flex-col items-start text-black mt-4">
              <p>Meaningful Outcomes for Professional & Career Growth</p>

              {/* Staggered List Animation */}
              <motion.ol
                className="list-disc text-blue-600 space-y-2 pl-6"
                initial="hidden"
                animate="visible"
                variants={listVariants}
              >
                {outComes.map((point, index) => (
                  <motion.li key={index} variants={itemVariants}>
                    {point}
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="borde px-10 mt-10">
        <SectionHead title="Course Timeline" />

        <VerticalTimeline lineColor="#51a2ff">
          <VerticalTimelineElement
            icon={<FaUserGraduate />}
            iconStyle={{ background: "#4f46e5", color: "#fff" }}
          >
            <h3 className="font-semibold text-lg">Get your Enrollment</h3>

            <div className="border flex">
              <Link
                href={"/enroll"}
                className=" text-white px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500"
              >
                Enroll
              </Link>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<FaBook />}
            iconStyle={{ background: "#4f46e5", color: "#fff" }}
          >
            <h3 className="font-semibold text-lg">First Year Subjects</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 ">
              {course[1].map((subject, idx) => (
                <li key={idx}>{subject}</li>
              ))}
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<FaGraduationCap />}
            iconStyle={{ background: "#10b981", color: "#fff" }}
          >
            <h3 className="font-semibold text-lg">Second Year Subjects</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {course[2].map((subject, idx) => (
                <li key={idx}>{subject}</li>
              ))}
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={<FaCheckCircle />}
            iconStyle={{ background: "#f59e0b", color: "#fff" }}
          >
            <h3 className="font-semibold text-lg">Third Year Subjects</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {course[3].map((subject, idx) => (
                <li key={idx}>{subject}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default CourseTimeline;
