/* eslint-disable no-unused-vars */
import React from "react";
import chairMen from "@/../public/Person/chairMen.png";
import director from "@/../public/Person/director.png";
import Desk, { DeskProps } from "@/components/ManagementDesks/Desk";

const AboutPage: React.FC = () => {
  const desk1Data: DeskProps = {
    image: chairMen,
    title: "Founder's Desk",
    name: "Dr. Ibrahim Gaya",
    designation: "Chairman",
    text1:
      "I was born in 16th September 1942 in Manglore, studied in mumbai, Qualified as B.Sc. DHMS from Mumbai University, Worked in Glaxo as production officer for 25 Vears. Practiced Homeopathy for last 45 years above, have an experience of Running Medical Education Institutes in mumbai, for past 4 decades work medical education & renowned charitable trust, established Nursing Assistant Institute, sewing classes and also managed Dialysis centre for 20 years in Mumbai. Strive for women's Employment & Participation in the society through medical field and education treating patient numbering more than 40,000 with high recovery",
    text2: [
      "I consider the most important factor from human being is self esteem. Self esteem come from respecting each other, care and proper means of earning and righteous way of living.",
      "I strive for self employment in acquiring for legitimate way of spending. I strongly recommend for paramedical course. It brings students from lower middle class to a respectable & dignified living in the society.",
    ],
    regards: "When God Guides, He Provides",
  };

  const desk2Data: DeskProps = {
    image: director,
    title: "Director's Desk",
    name: "Tabrez Lakhani",
    designation: "Managing Director",
    text1:
      "Global Education Institute of Paramedical Science since its humble beginning during the year 2021, has expanded and developed significantly over the past few years in training from Short term Paramedical Course to Diploma in General Nursing Midwifery (GNM) 3 Years Course. The institute is continuously striving towards imparting life transforming blend of rigorous academic studies and exciting co- curricular opportunities. The enthusiastic management team, strong departments, parental support, good staff morale has enabled to achieve good results.",
    text2: [
      "The GEIPS endeavors to keep peace with the rapid advancement in the Health and Nursing Sciences also bringing the Institute a Centre of Excellence in the Nursing Education.",
      "With the limited resources the institute have strived to make a huge difference in the students lives. It is my immense pleasure to Congratulate Dr. Ibrahim Gaya, the Chairman of GEIPS, all the teaching and non-teaching staff serving with dedication and solid foundation to bring this Institute to be a Centre of Excellence.",
      "Here, I would request and encourage you to join this noble profession and give your ambition an opportunity to grow.",
    ],
    // regards: "When God Guides, He Provides",
  };

  return (
    <div className="text-black min-h-[60vh] scroll-mt-[80px] mt-30">
      {/* Pass everything at once */}

      {/* <section id="#chairmen"> */}
      <div className="px-10 borde">
        <Desk {...desk1Data} />
      </div>
      {/* </section> */}

      {/* <section className="mt-10" id="#director"> */}
      <div className="px-10 borde">
        <Desk {...desk2Data} />
      </div>
      {/* </section> */}
    </div>
  );
};

export default AboutPage;
