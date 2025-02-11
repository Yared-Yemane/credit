"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import ServicesData from "../data/ServicesData";

const services = ServicesData;

export default function Services() {
  const swiperRef = useRef(null);

  return (
    <div className="max-w-6xl mx-auto py-12 relative">
      <div className="relative">
        <div className="bg-yellow-200 text-yellow-800 mb-3 px-3 py-1 inline-block rounded-full text-sm font-semibold">
          SERVICES
        </div>
        {/* <h2 className="text-4xl font-bold text-blue-950">
          What do we offer?
        </h2> */}

        {/* Navigation buttons positioned at the top right */}
        <div className="absolute top-0 right-0 flex gap-3 text-blue-950 z-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex items-center justify-center w-10 h-10 border border-black rounded-md hover:bg-gray-100 transition"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex items-center justify-center w-10 h-10 border border-black rounded-md hover:bg-gray-100 transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        // spaceBetween={20}
        slidesPerView={4}
        loop={true}
        speed={800}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store the swiper instance
        breakpoints={{
          1024: { slidesPerView: 4 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
        className="mt-6"
      >
        {services.map((service, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center bg-blue-50 overflow-hidden">
              <div className="relative w-full h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 cursor-pointer"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-lg text-blue-950">{service.title}</h3>
                <p className="text-gray-700 mt-2 text-sm">
                  {service.description}
                </p>
                <button className="mt-4 ml-12 px-5 py-2 bg-blue-950 text-white rounded-md flex items-center gap-2 hover:bg-white hover:text-blue-950 hover:border-blue-950 transition-all duration-300">
                  Learn More <Send size={18} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
