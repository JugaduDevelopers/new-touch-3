import React from "react";
import BannerImage from "../../public/images/bannersliderImage.png";
import Image from "next/image";

type Props = {};

const SliderScreen = (props: Props) => {
  return (
    <div className=" m-10 md:m-14 p-3 h-full md:flex md:items-center md:justify-center ">
      <div className=" flex flex-col items-center justify-center sm:flex-col sm:items-center sm:justify-center md:items-start xl:max-w-4xl xl:ml-4 ">
        <p>SkinCare - Assistt</p>
        <h1 className="text-center md:text-left">
          Now looking <span className="text-darkPinkX">Beautiful</span> is just
          a click away
        </h1>
        <p className="text-center md:text-star">
          Count on us for expert guidance on your skin care journey.
        </p>
        <div className=" flex flex-col sm:flex-row justify-center items-center sm:gap-3 gap-1 ">
          <button className="text-xs md:text-base md:px-4 bg-redX px-2 py-3 sm:py-2 rounded-sm text-whiteX min-w-[130px]">
            Get Consultation
          </button>
          <button className="text-xs bg-white md:text-base px-3 py-2 md:px-6  rounded-sm text-redX  border-2 border-redX min-w-[130px]">
            Special Offers
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="max-w-[450px] aspect-square md:max-w-md lg:max-w-lg xl:max-w-3xl">
          <Image src={BannerImage} alt="BannerImage"></Image>
        </div>
      </div>
    </div>
  );
};

export default SliderScreen;
