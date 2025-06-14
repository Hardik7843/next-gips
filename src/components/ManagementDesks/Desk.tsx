"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

// Define prop types
export interface DeskProps {
  title: string;
  image: StaticImageData;
  name: string;
  designation: string;
  text1: string;
  text2?: string[];
  regards?: string;
}

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const Desk: React.FC<DeskProps> = ({
  title,
  image,
  name,
  designation,
  text1,
  text2,
  regards,
}) => {
  return (
    <div className="borde borde-black w-full overflow-hidden">
      {/* Title Portion */}
      <div className="flex justify-start mb-3 bg-gray-200">
        <div className="border-4 border-blue-500"></div>
        <p className="w-fit p-1.5">{title}</p>
      </div>

      {/* Image and Text */}
      <div className="flex flex-col md:flex-row">
        {/* Image + Name + Designation */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full md:w-1/4 flex flex-col items-start"
        >
          <div className="w-full relative aspect-square rounded-2xl border-2 overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain rounded-2xl"
            />
          </div>

          <div className="px-5 sm:px-0 w-full flex flex-col items-center sm:items-start md:items-center">
            <p className="text-blue-500 font-sans text-xl font-bold">{name}</p>
            <p className="font-bold text-lg">{designation}</p>
          </div>
        </motion.div>

        {/* Text1 beside image */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-black w-full md:w-3/4 text-justify break-keep pt-5 sm:px-8"
        >
          {text1}
        </motion.div>
      </div>

      {/* Text2 below + regards */}
      <div className="mt-3.5">
        <div className="flex flex-col md:px-2 md:pr-8 space-y-3.5">
          {text2?.map((paragraph, index) => (
            <motion.div
              key={index}
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={index}
              className="w-full break-words text-justify"
            >
              <p className="w-full">{paragraph}</p>
            </motion.div>
          ))}
        </div>

        {/* Regards */}
        {regards && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: (text2?.length || 1) * 0.2 + 0.2,
            }}
            className="mt-4 md:px-2"
          >
            <p>
              Regards,
              <br />
              <span className="font-bold">{regards}</span>
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Desk;
