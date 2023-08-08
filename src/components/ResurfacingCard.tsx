import React from "react";
import GirlAnimation from "../../public/icons/girl.svg";
import ChemicalAnimation from "../../public/icons/chemical.svg";
import BottleAnimation from "../../public/icons/bottle.svg";
import { ResurfacingData } from "@/app/services/data";

type Props = {
  cardData: ResurfacingData;
};

const resurfacingData = [
  {
    cardImage: <GirlAnimation />,
    heading: "Erbium Laser",
    para: `Erbium laser is milder than the CO2 laser and is used for removing
  superficial to moderate scars and wrinkles. Erbium laser is a better
  option for patients with dark skin since it has less risk of permanent
  skin discoloration. Because it is less invasive, it has a shorter
  downtime than the CO2 laser.`,
  },
  {
    cardImage: <ChemicalAnimation />,
    heading: `Carbon Dioxide (CO2)`,
    para: `Carbon dioxide (CO2) laser is the most powerful among laser
  treatments. It is used to treat deep scars, wrinkles, birthmarks,
  warts and even the early stages of skin cancer.`,
  },
  {
    cardImage: <BottleAnimation />,
    heading: "Fraxel Laser",
    para: `Fraxel laser is noninvasive, unlike the CO2 and erbium lasers. Thus,
  Fraxel does not cause any skin tenderness or pain after treatment, nor
  does it require any downtime. However, it usually takes several
  sessions of this treatment to attain the desired results.`,
  },
];

const ResurfacingCard = ({ cardData }: Props) => {
  {
    return (
      <div className=" max-w-[360px] lg:max-w-md min-h-[390px]   flex flex-col  bg-whiteX p-5 rounded-3xl drop-shadow-2xl lg:mx-5">
        <div className="bg-whiteX rounded-full p-4 mb-5 drop-shadow-2xl self-center">
          {cardData.cardImage}
        </div>
        <h4 className="mb-5 text-center">{cardData.heading}</h4>
        <p className="text-center">{cardData.para}</p>
      </div>
    );
  }
};

export default ResurfacingCard;
