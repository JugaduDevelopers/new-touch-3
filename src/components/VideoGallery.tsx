import Image from "next/image";
import React from "react";
import yt1 from "../../public/images/yt1.png";
import yt2 from "../../public/images/yt2.png";

type Props = {};

const VideoGallery = (props: Props) => {
  return (
    <div className="bg-[#FFD7D7]">
      <div className="flex flex-col justify-center items-center py-10">
        <p className="text-[#D24648] font-100 text-lg">Video testimonials</p>
        <h4 className="text-3xl font-bold">Video Gallery</h4>
      </div>
      <div className="flex justify-evenly pb-10 flex-wrap container mx-auto gap-3">
        <div className="min-w-[300px] w-2/5 bg-white rounded-2xl shadow-lg overflow-hidden flex">
          <div className="w-4/12 bg-[#D24648] px-8 flex items-center justify-center text-center">
            <h3 className="text-base font-semibold text-white">
              Laser Hair Reduction
            </h3>
          </div>

          <div className="w-3/4 relative" style={{ paddingBottom: "56.25%" }}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Image src={yt1} alt={"img"} layout="fill" objectFit="cover" />
            </a>
          </div>
        </div>
        <div className="min-w-[300px] w-2/5 bg-white rounded-2xl shadow-lg overflow-hidden flex">
          <div className="w-4/12 bg-[#D24648] p-8 flex items-center justify-center text-center">
            <h3 className="text-base font-semibold text-white">
              Laser Hair Removal
            </h3>
          </div>
          <div className="w-3/4 relative" style={{ paddingBottom: "56.25%" }}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <Image src={yt2} alt={"img"} layout="fill" objectFit="cover" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
