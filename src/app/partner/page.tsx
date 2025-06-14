/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import SectionHead from "@/components/SectionHead";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const page = () => {
  const points = [
    "Welcome to the opportunity of a lifetime! At Raibo Infotech, we are pioneers in AI and robotics solutions, transforming industries and empowering businesses worldwide. We invite dynamic entrepreneurs, agencies, and investors to join hands with us as agency or franchise partners. This partnership is your gateway to becoming part of an innovative ecosystem where technology meets success.",
    "This detailed guide outlines everything you need to know about partnering with Raibo Infotech from our vision and business model to partner benefits, support systems, and how to get started. Whether you aim to expand your current business or build a tech-powered future, Raibo Infotech offers a powerful platform to grow with us",
  ];

  const businessExperties = {
    expertise: [
      {
        title: "Robotics R&D and Deployment",
        description:
          "Designing and implementing intelligent robotic systems for industry-specific applications.",
      },
      {
        title: "AI-Powered Business Automation",
        description:
          "Streamlining operations through tailored AI solutions that enhance efficiency and decision-making.",
      },
      {
        title: "Custom AI Software Development",
        description:
          "Building scalable, domain-specific AI software to address unique organizational challenges.",
      },
      {
        title: "Data Intelligence & Machine Learning",
        description:
          "Leveraging data science and ML models to generate insights, predict trends, and enable smart business strategies.",
      },
      {
        title: "IoT and Smart Device Integration",
        description:
          "Connecting devices and systems through IoT to build intelligent, responsive environments.",
      },
      {
        title: "Educational and Training Platforms",
        description:
          "Equipping businesses and individuals with the tools and knowledge to harness emerging technologies effectively.",
      },
    ],
    industries: [
      "Healthcare",
      "Manufacturing",
      "Logistics",
      "Education",
      "Retail",
      "Smart Cities",
    ],
  };

  const partnerProfiles = [
    "Existing IT or marketing agencies",
    "Entrepreneurs with a strong business acumen",
    "Tech professionals with an interest in AI/robotics",
    "Investors seeking scalable ventures",
    "Education institutes looking to diversify into tech training",
  ];

  const productPortfolio = [
    "AI Chatbots and Voice Assistants",
    "Smart Robots for Education, Retail, and Healthcare",
    "Custom ML/AI Solutions",
    "Computer Vision and Analytics Tools",
    "AI SaaS Platforms",
    "IoT and Automation Systems",
    "Educational AI/ML Curriculums and Kits",
  ];

  const onboardingSteps = [
    "Application Submission: Fill out our online interest form",
    "Initial Consultation: We schedule a discovery call",
    "Evaluation and Approval: Review your qualifications and region",
    "Agreement Signing: Legal and financial terms are finalized",
    "Training and Launch: We train your team and launch your partnership",
  ];

  const faqData = [
    {
      question: "Do I need technical knowledge?",
      answer: "No. We provide all necessary training.",
    },
    {
      question: "What’s the ROI timeline?",
      answer: "Most partners see ROI in 6–12 months.",
    },
    {
      question: "Can I operate multiple regions?",
      answer: "Yes, based on performance and territory availability.",
    },
    {
      question: "Is Raibo Infotech a recognized brand?",
      answer: "Yes. We are known in the AI/robotics community globally.",
    },
  ];

  return (
    <div className="text-white min-h-[60vh] scroll-mt-[80px] mt-18">
      <div className="flex flex-col sm:flex-row sm:gap-x-3 font-serif text-white md:text-2xl lg:text-3xl xl:text-5xl">
        Become an Franchise Partner with{" "}
        <div className="font-mono text-transparent bg-clip-text font-bold md:font-normal bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
          Raibo Infotech
        </div>
      </div>
      {/* About Raibo Infotech */}
      <div className="mt-10 bord border-white">
        <p className="text-2xl mb-2 font-bold">About Raibo Infotech</p>
        <div className="space-y-2 text-gray-400 w-full">
          {points.map((point, index) => (
            <p key={index} className="break-words">
              {point}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xl font-semibold text-white mb-3">
          Our Areas of Expertise
        </p>
        <div className="space-y-4 text-gray-300">
          {businessExperties.expertise.map((point, index) => (
            <div key={index} className="pb-3 border-b border-blue-500">
              <div className="text-white font-medium text-md">
                <span className="text-blue-500 mr-2">•</span>
                {point.title}
              </div>
              <p className="text-sm pl-6 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xl font-semibold text-white mb-3">
          Industries We Serve
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-3 gap-x-6 text-gray-300 text-sm">
          {businessExperties.industries.map((industry, index) => (
            <div key={index} className="flex items-center">
              <span className="text-blue-500 text-lg mr-2">•</span>
              <p className="text-lg">{industry}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="mt-10">
        <p className="text-2xl font-bold text-white mb-3">
          Who Can Become a Partner?
        </p>
        <p className="mb-3 text-gray-400 text-md">
          We’re looking for passionate and capable individuals or entities
          including:
        </p>

        <div className=" flex flex-wrap gap-4 text-gray-300 text-sm">
          {partnerProfiles.map((profile, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-fit bg-gray-800 hover:bg-gray-700 transition-colors duration-200 py-1 px-2.5 rounded-lg shadow-md"
            >
              <span className="text-blue-500 text-lg mr-2">•</span>
              <span>{profile}</span>
            </div>
          ))}
        </div>
      </div> */}

      <div className="mt-10">
        <p className="text-2xl font-bold text-white mb-3">
          Who Can Become a Partner?
        </p>
        <p className="mb-3 text-gray-400 text-md">
          We’re looking for passionate and capable individuals or entities
          including:
        </p>

        <motion.div
          className="flex flex-wrap gap-4 text-gray-300 text-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          // TODO : Make this Animation once : false
          viewport={{ once: false, amount: 0.2 }}
        >
          {partnerProfiles.map((profile, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center w-fit bg-gray-800 hover:bg-gray-700 transition-colors duration-200 py-1 px-2.5 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <span className="text-blue-500 text-lg mr-2">•</span>
              <span>{profile}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-10">
        <p className="text-2xl font-bold text-white mb-3">Product Porfolio</p>
        <div className="mb-3 text-gray-400 text-md">
          <p>
            Each product is market-tested and supported by documentation,
            training, and live demos.
          </p>
          <p>
            Your success as a partner is fueled by our diverse and innovative
            product lineup:
          </p>
        </div>

        <motion.div
          className="flex flex-wrap gap-4 text-gray-300 text-sm"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          // TODO : Make this Animation once : false
          viewport={{ once: false, amount: 0.2 }}
        >
          {productPortfolio.map((product, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center w-fit bg-gray-800 hover:bg-gray-700 transition-colors duration-200 py-1 px-2.5 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <span className="text-purple-300 text-lg mr-2">•</span>
              <span>{product}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-full mt-10 flex justify-center md:justify-start">
        <div className="">
          <h2 className="text-2xl font-bold text-white mb-5">
            Partner Onboarding Process
          </h2>

          <div className="relative border-l-2 border-blue-500 ml-6">
            {onboardingSteps.map((step, index) => (
              <div key={index} className="mb-10 ml-6 relative ">
                {/* Circle with number */}
                <span className="absolute -left-10 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-semibold">
                  {index + 1}
                </span>

                {/* Step content */}
                <p className="text-gray-300 text-sm md:text-base">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link
        href={"/joinus"}
        className=" text-white px-3 py-2 rounded-lg bg-purple-500 hover:bg-blue-500"
      >
        Join Us
      </Link>

      <div className="w-full mt-10">
        <Accordion type="single" collapsible>
          <h2 className="text-2xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h2>
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default page;
