"use client";
import React from "react";
import First from "../../public/images/B_A_G_1.png";
import Second from "../../public/images/B_A_G_2.png";
import Third from "../../public/images/B_A_G_3.png";
import Fourth from "../../public/images/B_A_G_4.png";
import Fifth from "../../public/images/B_A_G_5.png";
import Sixth from "../../public/images/B_A_G_6.png";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
type Props = {};

const b = [
  {
    id: 1,
    url: First,
    name: "Flawless Skincare: Unlocking Radiant Skin",
    details:
      "Discover the Secrets to Beautiful Skin: Expert advice, tips, and product recommendations to help you...",
    date: "January 20, 2023",
  },
  {
    id: 2,
    url: First,
    name: "Flawless Skincare: Unlocking Radiant Skin",
    details:
      "Discover the Secrets to Beautiful Skin: Expert advice, tips, and product recommendations to help you...",
    date: "January 20, 2023",
  },
  {
    id: 3,
    url: First,
    name: "Flawless Skincare: Unlocking Radiant Skin",
    details:
      "Discover the Secrets to Beautiful Skin: Expert advice, tips, and product recommendations to help you...",
    date: "January 20, 2023",
  },
  {
    id: 4,
    url: First,
    name: "Flawless Skincare: Unlocking Radiant Skin",
    details:
      "Discover the Secrets to Beautiful Skin: Expert advice, tips, and product recommendations to help you...",
    date: "January 20, 2023",
  },
  {
    id: 5,
    url: First,
    name: "Flawless Skincare: Unlocking Radiant Skin",
    details:
      "Discover the Secrets to Beautiful Skin: Expert advice, tips, and product recommendations to help you...",
    date: "January 20, 2023",
  },
];

const Blog = (props: Props) => {
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
      spaceBetween: 30,
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
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="">
          <p className="text-redX text-center ">FEATURED POSTS</p>
          <h3 className="text-4xl text-center">From Our Blog</h3>
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
            {b.map((x) => {
              return (
                <SwiperSlide>
                  <div className="mt-6 mb-10 w-[300px] " key={x.id}>
                    <Image
                      src={x.url}
                      alt={x.name}
                      width={500}
                      className="border-8 border-white aspect-auto shadow-2xl"
                    />
                    <h4 className="text-start line-clamp-2 text-3xl">
                      {x.name}
                    </h4>
                    <h5 className="text-start text-lg font-300 line-clamp-2">
                      {x.details}
                    </h5>
                    <div className="flex justify-between items-center pt-2">
                      <p className="text-redX font-400 m-0">{x.date}</p>
                      <button className="border-2 border-redX px-5  text-redX">
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
