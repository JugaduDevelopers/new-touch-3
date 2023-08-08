import Image from "next/image";
import React from "react";
import Hair from "../../public/images/Hair.png";
import Dermatology from "../../public/images/Dermatologties.png";
import Beauty from "../../public/images/Beauty.png";
import Medical from "../../public/images/Medical.png";
import skinHair from "../../public/images/s&h.png";

type Props = {};

const arr = [
  {
    id: 1,
    imgName: Medical,
    head: "Medical Aesthetics",
    des: "Laser hair removal; dermal fillers; chemical peel; thread lifting; mesotherapy; tattoo removal; botox;",
    wid: 80,
  },
  {
    id: 2,
    imgName: Dermatology,
    head: "Dermatology",
    des: "Acne scars treatment; mole, skin tag, wart removal;",
    wid: 75,
  },
  {
    id: 3,
    imgName: Beauty,
    head: "Beauty Salon Treatments",
    des: "IPL skin rejuvenation; laser skin resurfacing; laser skin tightening; laser wrinkle reduction; RF treatment;",
    wid: 83,
  },
  {
    id: 4,
    imgName: Hair,
    head: "Complete Hair Solutions",
    des: "Advanced Hair Transplant (AHT);",
    wid: 75,
  },
];

const About = (props: Props) => {
  return (
    <div className="container mx-auto grid grid-cols-auto-fit gap-28 py-10 px-5">
      <div className="flex flex-col justify-start pt-16">
        <h2>
          About <span className="text-redX">New Touch</span> Skin And Hair Care
        </h2>
        <p className="text-lg font-300 pt-3">
          Welcome to New Touch Skin Care, your premier beauty clinic based in
          Ahmedabad, Gujarat. Since 2007, we have been your one-stop destination
          for all your beauty solutions. Experience our transformative
          treatments today.
        </p>
        <p className="text-lg font-300 pt-3 pb-3">
          We specialize in the following services
        </p>
        <div className="">
          {arr.map((x) => (
            <div className="flex items-center gap-3" key={x.id}>
              <div className="lg:block hidden">
                <Image
                  src={x.imgName}
                  alt="img"
                  width={x.wid}
                  className="aspect-square"
                />
              </div>
              <div>
                <h4 className="text-lg">{x.head}</h4>
                <p className="text-base font-300">{x.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <Image src={skinHair} alt="s&h" width={700} className="aspect-auto" />
      </div>
    </div>
  );
};

export default About;
