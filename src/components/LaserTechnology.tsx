import { ResurfacingData } from "@/app/services/data";
import React from "react";
import ResurfacingCard from "./ResurfacingCard";
import Image from "next/image";
import LaserSkin from "../../public/images/laserSkin.png";
import CurveLines from "../../public/icons/curveLines.svg";

type Props = {
  resurfacingData: ResurfacingData[];
};

const LaserTechnology = ({ resurfacingData }: Props) => {
  return (
    <>
      <section className="colorSplitLaserTech">
        <div className="container mx-auto lg:px-5 lg:py-10 p-5  ">
          <div className=" lg:flex lg:items-center mb-5 md:mb-10">
            <h3 className=" lg:basis-2/3">
              What Are The Commonly Used
              <span className="text-redX"> Laser Skin Resurfacing </span>
              Technologies?
            </h3>
            <p className="lg:text-right lg:basis-1/3">
              There are several commonly used Laser Skin Resurfacing
              technologies:
            </p>
          </div>
          <div className="flex items-center justify-center md:block ">
            <div className="grid grid-cols-auto-fit gap-5  ">
              {resurfacingData.map((x) => {
                return (
                  <>
                    <ResurfacingCard cardData={x} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-whiteX my-10 relative z-0">
        <div className="container mx-auto flex flex-col sm:flex-row gap-5 p-5">
          <div className="basis-1/3 flex justify-center items-center">
            <Image src={LaserSkin} alt="LaserSkin"></Image>
          </div>
          <div className="basis-2/3 justify-self-center self-center">
            <h3>How Is Laser Skin Resurfacing Administered?</h3>
            <p>
              Laser skin resurfacing treatments are typically performed as an
              outpatient procedure, whether at a hospital or your doctor’s
              clinic. The treatment is usually done under local anaesthesia or
              oral sedative; extensive laser treatments may require general
              anaesthesia, although this is rare.
            </p>
            <p className="hidden md:block">
              After anaesthesia has been administered, your eyes will be covered
              to protect them from the laser light that will be beamed over the
              skin. How long the procedure takes will depend on the severity of
              the skin condition and the size of the area to be treated.
            </p>
          </div>
        </div>
        <div className="hidden md:block md:absolute md:top-28 md:max-w-full  md:overflow-hidden ">
          <CurveLines />
        </div>
      </section>
    </>
  );
};

export default LaserTechnology;
