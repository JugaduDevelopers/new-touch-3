import GirlAnimation from "../../../public/icons/girl.svg";
import ChemicalAnimation from "../../../public/icons/chemical.svg";
import BottleAnimation from "../../../public/icons/bottle.svg";
import { StaticImageData } from "next/image";

export type ResurfacingData = {
  cardImage: any;
  heading: string;
  para: string;
};
export type FAQData = {
  id: number;
  header: string;
  text: string;
};

export const resurfacingData: ResurfacingData[] = [
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

export const faqs: FAQData[] = [
  {
    id: 1,
    header: "Is laser Skin Resurfacing Safe?",
    text: `Because of its invasive nature, laser skin resurfacing is considered by many physicians as a surgical procedure even though it does not involve any incisions. Thus, to guarantee safety, laser skin resurfacing should be performed by a board-certified dermatologist or cosmetic surgeon.`,
  },
  {
    id: 2,
    header: "How Long Does Recovery Take?",
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
  {
    id: 3,
    header: "What Are The Typical Results of Laser Skin Resurfacing?",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
  },
  {
    id: 4,
    header: "For What Conditions Is Laser Skin Resurfacing Used?",
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
];
