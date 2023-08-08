"use client";
import React from "react";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import TreatmentGalleryCard from "./TreatmentGalleryCard";
import treatment1 from "../../public/images/treatment1.png";
import treatment2 from "../../public/images/treatment2.png";
import treatment3 from "../../public/images/treatment3.png";

type Props = {};

const TreatmentGallery = (props: Props) => {
  const GalleryItems = [
    {
      image: treatment1,
    },
    {
      image: treatment2,
    },
    {
      image: treatment3,
    },
    {
      image: treatment1,
    },
    {
      image: treatment2,
    },
    {
      image: treatment3,
    },
    {
      image: treatment1,
    },
    {
      image: treatment2,
    },
    {
      image: treatment3,
    },
    {
      image: treatment1,
    },
    {
      image: treatment2,
    },
    {
      image: treatment3,
    },
    {
      image: treatment1,
    },
    {
      image: treatment2,
    },
    {
      image: treatment3,
    },
  ];
  const breakpoints = {
    // When window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // When window width is >= 480px
    500: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  };
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <p className="text-center">Desired procedure to begin</p>
          <h3 className="text-center ">
            Our <span className="text-redX">Treatments</span> Gallery
          </h3>
        </div>
        <div className="left-pagination m-4">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
            }}
            breakpoints={breakpoints}
            slidesPerView={10}
            spaceBetween={1}
          >
            {GalleryItems.map((x) => {
              return (
                <SwiperSlide>
                  <TreatmentGalleryCard
                    imageRef={x.image}
                    key={Math.random()}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TreatmentGallery;
