
import { StaticImageData } from "next/image";
import aiCalling from "../../public/pngs/aiCalling.svg";
import aiDevelopment from "../../public/pngs/aiDevelopment.png";
import dataCollection from "../../public/pngs/dataCollection.png";
import metaVerseDev from "../../public/pngs/metaVerseDev.png";
import mobileDev from "../../public/pngs/mobileDev.png";
import roboticsCourse from "../../public/pngs/roboticsCourse.png";
import softwareDev from "../../public/pngs/softwareDev.png";

export interface ServiceConfig
{
  title: string;
  description: string[];
  image: string | StaticImageData;
  enum?: string; // Optional string to represent enum type if demo is applicable
}

export const serviceConfigs: Record<string, ServiceConfig> = {
  "aiCalling": {
    title: "AI Calling Service",
    description: [
      "Automate customer calls with conversational AI.",
      "Custom workflows and language support.",
      "Live transcription and analytics dashboard.",
    ],
    image: aiCalling,
    enum: "DEMO_CALL", // optional enum string
  },
  "aiDevelopment": {
    title: "AI Development",
    description: [
      "Design and deploy AI models tailored to your needs.",
      "Expertise in NLP, computer vision, and generative AI.",
      "Seamless integration with web and mobile apps.",
    ],
    image: aiDevelopment,
  },
  "dataCollection": {
    title: "Sales Data Collection",
    description: [
      "Automated tools to gather and analyze sales leads.",
      "Integrate with CRMs and third-party platforms.",
      "Real-time dashboards for actionable insights.",
    ],
    image: dataCollection,
    enum: "DEMO_DATA",
  },
  "appDevelopment": {
    title: "App Development",
    description: [
      "Full-cycle mobile and web application development.",
      "Cross-platform apps using modern tech stacks.",
      "Focus on performance, UX, and scalability.",
    ],
    image: mobileDev,
  },
  "metaVerseDev": {
    title: "Meta Verse Development",
    description: [
      "Build immersive 3D virtual spaces and experiences.",
      "Avatar systems, NFTs, and blockchain integration.",
      "Optimized for VR/AR devices and browsers.",
    ],
    image: metaVerseDev,
    enum: "DEMO_VR",
  },
  "roboticsCourse": {
    title: "Robotics & AI Course",
    description: [
      "Hands-on training in robotics and AI fundamentals.",
      "Project-based learning with real hardware kits.",
      "Certificate on successful completion.",
    ],
    image: roboticsCourse,
    enum: "DEMO_COURSE",
  },
  "softwareDev": {
    title: "Software Development",
    description: [
      "Enterprise-grade software solutions tailored to clients.",
      "Backend systems, APIs, and frontend development.",
      "Agile delivery with version control and CI/CD.",
    ],
    image: softwareDev,
  },
};
