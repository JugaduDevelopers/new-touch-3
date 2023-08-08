import React from "react";
import laserSkin from "../../public/images/laser-skin.png";
import Image from "next/image";

type Props = {};

const LaserSkinBanner = (props: Props) => {
  return (
    <section className="bg-bannerLaserSkin bg-cover bg-no-repeat ">
      <div className=" container mx-auto p-5">
        <div className="">
          <p className="lg:text-3xl">
            <span className="text-[#D24648]">SkinCare</span> - Assistt
          </p>
          <h3 className="">
            Laser
            <br />
            <span className="text-[#F39297]"> Hair Removal in</span>
            <br /> Ahmedabad
          </h3>
          <p>
            Rejuvenate your skin with advanced <br /> laser skin technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LaserSkinBanner;
