// import React from "react";
// import { AboutTabItem } from "@/config/aboutConfig";
// import Image from "next/image";
// import aboutUsImg from "../../../public/aboutus.webp";

// type TabProps = {
//   tabItem: AboutTabItem;
// };

// const Tab: React.FC<TabProps> = ({ tabItem }) => {
//   return (
//     <div>
//       {/* Mobile View */}
//       <div className="flex flex-col items-center gap-6 lg:hidden">
//         <div className=" flex flex-col justify-start w-full">
//           <Image
//             src={aboutUsImg || tabItem.image}
//             alt={tabItem.title}
//             className=" shadow-md object-cover"
//           />
//         </div>
//         <div className="w-full  justify-start">
//           <div className="w-10/12 h-fit">
//             <h2 className="text-4xl font-bold mb-6">{tabItem.title}</h2>
//             {/* TODO: Provide Standard color for this */}
//             {/* TODO: Make map for multiple paragraph in description */}
//             <p className="text-lg text-gray-700">{tabItem.description}</p>
//           </div>
//         </div>
//       </div>

//       {/* Desktop view: shown from lg and up */}
//       <div className="hidden lg:flex lg:flex-row items-start gap-x-7">
//         <div className="w-fit">
//           <Image
//             src={aboutUsImg || tabItem.image}
//             alt={tabItem.title}
//             className="max-h-[70vh] object-contain"
//           />
//         </div>
//         <div className="w-full  h-fit  pt-5">
//           <div className="w-fit">
//             <h2 className="text-4xl font-bold mb-2">{tabItem.title}</h2>
//             {/* TODO: Provide Standard color for this */}
//             {/* TODO: Make map for multiple paragraph in description */}
//             <p className="text-md text-gray-700">{tabItem.description}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tab;

import React from "react";
import { motion } from "framer-motion";
import { AboutTabItem } from "@/config/aboutConfig";
import Image from "next/image";
import aboutUsImg from "../../../public/aboutus.webp";

type TabProps = {
  tabItem: AboutTabItem;
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Tab: React.FC<TabProps> = ({ tabItem }) => {
  return (
    <div>
      {/* Mobile View */}
      <div className=" flex flex-col items-center gap-y-6 lg:hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
          className="flex flex-col justify-start w-full"
        >
          <Image
            src={tabItem.image || aboutUsImg}
            alt={tabItem.title}
            className="shadow-md object-cover rounded-bl-3xl rounded-tr-3xl rounded-tl-sm rounded-br-sm"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInRight}
          className="w-full justify-start"
        >
          <div className="w-10/12 h-fit">
            <h2 className="text-4xl font-bold mb-6">{tabItem.title}</h2>
            <div className="space-y-4">
              {tabItem.description.map((point, index) => (
                <p key={index} className="text-md text-gray-400">
                  {point}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:flex lg:flex-row items-start gap-x-7">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
          className="w-fit"
        >
          <Image
            src={tabItem.image || aboutUsImg}
            alt={tabItem.title}
            className="max-h-[65vh] object-cover rounded-bl-3xl rounded-tr-3xl rounded-tl-sm rounded-br-sm"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInRight}
          className="w-full h-fit pt-5"
        >
          <div className="w-fit">
            <h2 className="text-4xl font-bold font-sans mb-2">
              {tabItem.title}
            </h2>
            <div className="space-y-4">
              {tabItem.description.map((point, index) => (
                <p key={index} className="text-md text-gray-400">
                  {point}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tab;
