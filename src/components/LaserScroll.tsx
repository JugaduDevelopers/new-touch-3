import Image from "next/image";
import React from "react";
import First from "../../public/images/Laser_2.png";

type Props = {};

const LaserScroll = (props: Props) => {
  return (
    <section className="  bg-peach lg:mt-36 py-10 my-5 overflow-visible z-40">
      <div className="relative ">
        <div>
          <div className="overflow-hidden">
            <hr className="h-px mb-4 bg-black border-0" />
            <h1 className="scrolling-text text-6xl text-[#FFD7D7]">
              30% Off Your Journey to Flawless Skin: Laser Resurfacing, Unveil
              Your Radiance!
            </h1>
            <hr className="h-px  bg-black border-0" />
          </div>
          <div className="min-[400px]:flex min-[400px]:justify-center min-[400px]:items-center sm:block ">
            <div className="flex justify-center items-center mt-5 sm:hidden">
              <Image
                src={First}
                alt="First"
                className="w-[200px] bg-peach border-2 rounded-t-full rounded-b-full p-1 border-[#212121]"
              />
            </div>
            <div className="flex justify-center  mx-5 lg:justify-end  xl:pr-0 xl:justify-center xl:pl-40 items-end">
              <div className=" max-w-xl  ">
                <h3 className="mb-2 mt-4">
                  <span className="text-redX">Laser Hair Removal?</span>
                  <br />
                  You Don’t Need It!
                </h3>
                <p className="text-lg font-300 text-left">
                  Nor more laser, yes more beauty. This clinic is the pioneer of
                  Laser Hair Removal in Ahmedabad
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:-top-28 hidden lg:block lg:left-32 xl:left-24 2xl:left-80 z-50">
          <Image
            src={First}
            alt="First"
            className=" max-w-xs bg-peach border-2 rounded-t-full rounded-b-full p-1 border-black"
          />
        </div>
      </div>
    </section>
  );
};

export default LaserScroll;
