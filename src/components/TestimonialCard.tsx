import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image?: any;
  details?: string;
  name?: string;
};

const TestimonialCard = ({ details, image, name }: Props) => {
  return (
    <Link href={"https://g.co/kgs/JE3fRx"} target="_blank">
      <div className="flex justify-center items-center">
        <div className="relative h-96 aspect-square">
          <Image alt="Background" src={"/images/testimonial-bg.svg"} fill />
          <div className="h-12 aspect-square  flex justify-center items-center bg-pinkX rounded-full absolute top-11 left-[50px]">
            <Image
              src={"/images/testimonial-quote.svg"}
              alt="Quote"
              height={34}
              width={34}
            />
          </div>
          <div className="h-12 aspect-square  flex justify-center items-center bg-pinkX rounded-full absolute bottom-[140px] right-[30px]">
            <Image
              src={"/images/testimonial-quote.svg"}
              alt="Quote"
              height={34}
              width={34}
              className="rotate-180"
            />
          </div>
          <Image
            alt="Picture"
            src={image ?? "/images/testimonial-img.png"}
            height={105}
            width={105}
            className="rounded-full left-[138px]  absolute"
          />
          <div className="right-[109px] top-28 text-center absolute max-w-[180px] flex flex-col items-center">
            <div className="h-10 flex justify-center items-center">
              <Image
                src={"/images/stars.svg"}
                alt="Stars"
                height={10}
                width={100}
              />
            </div>
            <p className=" text-xs font-400 line-clamp-2 text-whiteX">
              {details ??
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quod."}
            </p>
            <p className="text-sm  text-whiteX">{name ?? "Hemanshi devani"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TestimonialCard;
