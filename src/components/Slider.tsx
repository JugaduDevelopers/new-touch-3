"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper";
import SliderScreen from "./SliderScreen";
import { useSwiper } from "swiper/react";

type Props = {};

const Slider = (props: Props) => {
  const swiper = useSwiper();
  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        // pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        // className=""
      >
        <SwiperSlide>
          <SliderScreen />
        </SwiperSlide>
        <SwiperSlide>
          <SliderScreen />
        </SwiperSlide>
        <SwiperSlide>
          <SliderScreen />
        </SwiperSlide>
        <SwiperSlide>
          <SliderScreen />
        </SwiperSlide>
      </Swiper>
      <div
        className="swiper-button image-swiper-button-next"
        onClick={() => {
          swiper?.navigation?.nextEl;
        }}
      >{`>`}</div>
      <div
        className="swiper-button image-swiper-button-prev"
        onClick={() => {
          swiper?.navigation?.prevEl;
        }}
      >{`<`}</div>
    </>
  );
};

export default Slider;
