"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Image data
const imageData = [
  { id: 2, img: "/kanpur.png" },
  { id: 4, img: "/madras2.jpg" },

];

const HeroSection1 = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  // Handle autoplay progress
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="body">
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* Map through imageData and return SwiperSlides */}
        {imageData.map((item) => (
          <SwiperSlide key={item.id} className="relative w-full h-[500px] sm:h-[400px] xs:h-[300px]">
            <div className="relative w-full h-full">
              <Image 
                src={item.img} 
                alt={`Slide ${item.id}`} 
                height={50} width={1300}
                objectFit="cover"
                priority 
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Autoplay progress indicator */}
        <div className="autoplay-progress absolute bottom-5 left-5 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
    </div>
  );
};

export default HeroSection1;