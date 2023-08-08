"use client";

import TestimonialCard from "@/components/TestimonialCard";
import React from "react";
import "swiper/css/pagination";
import "swiper/css";
import "../app/testimonial.css";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

type Props = {};

const TestimonialContainer = (props: Props) => {
  const swiper = useSwiper();

  return (
    <>
      <div className="bg-[#FFD7D7] py-10">
        <div className="container mx-auto">
          <p className="uppercase flex justify-center items-center text-darkred">
            Testimonial
          </p>
          <h3 className="flex justify-center items-center mb-10 max-sm:text-3xl">
            What Our Client Says
          </h3>

          <div className="">
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
                767: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <TestimonialCard
                  image={"/images/testimonial1.png"}
                  details="highly satisfied with the treatment which I have received and also doctor is very supportive."
                  name="Hemanshi Devani"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                  image={"/images/testimonial2.png"}
                  details="Osm results and services and most kindest Doctor and Staff i love it..."
                  name="Anu Gosai"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                  image={"/images/testimonial3.png"}
                  details="The best ever clinic for skin and hair treatment ..."
                  name="Maahi Prajapati"
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialCard
                  image={"/images/testimonial1.png"}
                  details="highly satisfied with the treatment which I have received and also doctor is very supportive."
                  name="Hemanshi Devani"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialContainer;
