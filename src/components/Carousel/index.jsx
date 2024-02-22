import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Rasm from "../../assets/images/service-icon-04.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
function ThreeCarousel() {
  return (
    <div className="flex justify-center mt-28 md:w-[90%] w-[82%] h-[60vh] lg:w-[80%] m-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        loop={true}
        className="mySwiper "
        //
      >
        <div className="grid justify-items-center">
          <SwiperSlide>
            <div className="w-[300px] xl:w-[360px] bg-white rounded-[10px] h-[240px] cartochka p-20">
              <div className="text-center grid justify-items-center">
                <div>
                  <p className="text-[20px] font-bold">
                    Discover the digital marketing trend
                  </p>
                </div>
                <div>
                  <img src={Rasm} alt="" />
                </div>
                <div className="mt-10 pt-10 border-t-[1px] border-[#706767]">
                  <p>Get to know more about the topic in</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] xl:w-[360px] bg-white rounded-[10px] h-[250px] cartochka p-20">
              <div className="text-center grid justify-items-center">
                <div>
                  <p className="text-[20px] font-bold">
                    Discover the digital marketing trend
                  </p>
                </div>
                <div>
                  <img src={Rasm} alt="" />
                </div>
                <div className="mt-10 pt-10 border-t-[1px] border-[#706767]">
                  <p>Get to know more about the topic in</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] xl:w-[360px] bg-white rounded-[10px] h-[300px] cartochka p-20">
              <div className="text-center grid justify-items-center">
                <div>
                  <p className="text-[20px] font-bold">
                    Discover the digital marketing trend
                  </p>
                </div>
                <div>
                  <img src={Rasm} alt="" />
                </div>
                <div className="mt-20 pt-10 border-t-[1px] border-[#706767]">
                  <p>Get to know more about the topic in</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[300px] xl:w-[360px] rounded-[10px] h-[260px] bg-white cartochka p-20">
              <div className="text-center grid justify-items-center">
                <div>
                  <p className="text-[20px] font-bold">
                    Discover the digital marketing trend
                  </p>
                </div>
                <div>
                  <img src={Rasm} alt="" />
                </div>
                <div className="mt-10 pt-10 border-t-[1px] border-[#706767]">
                  <p>Get to know more about the topic in</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default ThreeCarousel;
