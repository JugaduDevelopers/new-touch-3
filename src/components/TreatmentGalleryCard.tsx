import React from "react";
import Image, { StaticImageData } from "next/image";
import Youtube from "../../public/icons/youtube.svg";

type Props = {
  imageRef: StaticImageData;
};

const TreatmentGalleryCard = ({ imageRef }: Props) => {
  return (
    <>
      <div className="relative w-[280px] aspect-video  mt-6 mb-10 overflow-hidden">
        <Image
          src={imageRef}
          alt="treatment"
          className="w-full h-full rounded-3xl z-10"
        />
      </div>
      <div className="absolute z-20 top-[65px] left-24">
        <Youtube />
      </div>
    </>
  );
};

export default TreatmentGalleryCard;
