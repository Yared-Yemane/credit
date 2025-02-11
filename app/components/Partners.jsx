"use client";

import Marquee from "react-fast-marquee";
import PartnersData from "../data/PartnersData";

const Partners = () => {
  const items = PartnersData;

  return (
    <div className=" px-20">
      <div className="w-full py-5">
        <Marquee
          gradient={true}
          speed={40}
          pauseOnHover={true}
          direction="left"
          loop={0} // Infinite loop
          delay={0} // No delay between loops
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="px-5 py-2 mx-1 text-blue-950 rounded-md"
            >
              <img src={item} alt={`Partner ${index + 1}`} className=" w-auto h-16" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
