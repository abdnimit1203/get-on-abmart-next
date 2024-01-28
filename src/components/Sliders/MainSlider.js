// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MainSlider.css";
import banner1 from "/public/images/banner1.jpg"
import banner2 from "/public/images/banner2.jpg"
import slider1 from "/public/images/sliderimage1.png"
import slider2 from "/public/images/sliderimage2.png"
import slider3 from "/public/images/sliderimage3.png"
import {Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const MainSlider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="rounded-xl  md:col-span-2">
        <Swiper
          cssMode={true}
          navigation={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={slider1}
              alt="slider1"
              className="w-full rounded-xl"
              w
              
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider2}
              alt="slider1"
              className="w-full rounded-xl"
              w
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={slider3}
              alt="slider1"
              className="w-full rounded-xl"
              w
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-1  gap-2">
        <div className="relative">
          <div className="absolute rounded-xl text-xs text-white p-4 md:text-lg bg-gradient-to-tr from-[#1111118f]  to-[#11111100] lg:bg-none h-[100%]">
            <p className="">
              Top Sold<br /> Product <br /> of 2023!
            </p>
          </div>
          <Image src={banner1} alt="banner1" className="rounded-xl" />
        </div>
        <div className="relative">
          <div className="absolute rounded-xl text-xs text-white p-4 md:text-lg bg-gradient-to-tr from-[#1111118f] to-[#11111100] lg:bg-none h-full ">
            <p>
              Best Choice <br /> of the Year!
            </p>
          </div>
          <Image src={banner2} alt="banner1" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
