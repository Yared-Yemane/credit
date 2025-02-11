"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroMenu from "../data/HeroMenu";
import { Fragment } from "react";
import { ArrowRightToLine } from "lucide-react";

const HeroMenuData = HeroMenu;

const AutoSlidingMenu = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Disable the left and right arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-blue-950 rounded-b-lg py-4 px-5 font-light">
      <Slider {...settings}>
        {HeroMenuData.map((menu, index) => (
          <div key={index}>
            <div
              style={{ marginRight: "10px"  }}
              className="py-2 text-center text-white text-nowrap bg-blue-950 border rounded-full w-auto hover:bg-white hover:text-blue-950 transition-all duration-300"
            >
              <a href={menu.url}>
                <h3 className="text-sm">{menu.label}</h3>
                {/* <ArrowRightToLine size={14} className="mt-1" /> */}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoSlidingMenu;
