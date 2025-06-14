"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import angleOne from "../../public/clients/AngleOne.jpg";
import gNm from "../../public/clients/GnM.png";
import healthHolistic from "../../public/clients/HealthHolistic.jpg";
import millat from "../../public/clients/Millat.png";
import rajasthanHerbals from "../../public/clients/Rajasthan.png";
import rupeeExpert from "../../public/clients/RupeeExpert.jpg";
import singhTech from "../../public/clients/SinghTech.png";
import React from "react";
import Image from "next/image";
import SectionHead from "./SectionHead";
import { clipPath } from "framer-motion/client";

const TrustedClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="text-white scroll-mt-[80px] mb-24">
      <SectionHead>Our Existing Customers</SectionHead>
      <div>
        <Slider {...settings}>
          <div className="outline-none">
            <Image
              className="bg-white rounded-lg backdrop-blur-md "
              src={angleOne}
              alt={""}
              width={135}
              height={135}
            />
          </div>
          <div className="outline-none">
            <Image
              className="bg-white rounded-lg backdrop-blur-md "
              src={gNm}
              alt={""}
              width={135}
              height={135}
            />
          </div>
          <div className="outline-none">
            <Image
              className="bg-white rounded-lg backdrop-blur-md "
              src={healthHolistic}
              alt={""}
              width={135}
              height={135}
            />
          </div>
          <div className="outline-none">
            <Image
              className="bg-white rounded-lg backdrop-blur-md "
              src={rajasthanHerbals}
              alt={""}
              width={135}
              height={135}
            />
          </div>
          <div className="outline-none">
            <Image
              className="bg-white rounded-lg backdrop-blur-md "
              src={millat}
              alt={""}
              width={135}
              height={135}
            />
          </div>
          <div className="outline-none">
            <Image
              className="bg-white rounded-lg backdrop-blur-md "
              src={rupeeExpert}
              alt={""}
              width={135}
              height={135}
            />
          </div>
          <div className="outline-none">
            <Image
              className="bg-white rounded-lg backdrop-blur-md "
              src={singhTech}
              alt={""}
              width={135}
              height={135}
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TrustedClients;
