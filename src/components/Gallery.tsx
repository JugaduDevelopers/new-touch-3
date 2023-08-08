import Image from "next/image";
import React from "react";
import First from "../../public/images/B_A_G_1.png";
import Second from "../../public/images/B_A_G_2.png";
import Third from "../../public/images/B_A_G_3.png";
import Fourth from "../../public/images/B_A_G_4.png";
import Fifth from "../../public/images/B_A_G_5.png";
import Sixth from "../../public/images/B_A_G_6.png";

type Props = {};

const a = [
  {
    id: 1,
    url: First,
    name: "Acne Reduction Treatment",
  },
  {
    id: 2,
    url: Second,
    name: "Skin Glow Treatment",
  },
  {
    id: 3,
    url: Third,
    name: "Anti-Ageing Treatment",
  },
  {
    id: 4,
    url: Fourth,
    name: "Lip Filler Treatment",
  },
  {
    id: 5,
    url: Fifth,
    name: "Laser Hair Removal Treatment",
  },
  {
    id: 6,
    url: Sixth,
    name: "Tattoo Removal Treatment",
  },
];

const Gallery = (props: Props) => {
  return (
    <section>
      <div className="flex flex-col items-center px-5">
        <p className="text-redX ">Desired procedure to begin</p>
        <h3 className="text-center">Before After Gallery</h3>
      </div>
      <div className="grid grid-cols-auto-fit gap-10 container mx-auto px-3">
        {a.map((x) => (
          <div
            className=" flex flex-col items-center justify-center gap-3 min-w-[300px] md:py-8 py-5  "
            key={x.id}
          >
            <Image
              src={x.url}
              alt={x.name}
              width={450}
              className="border-8 border-white aspect-auto shadow-xl"
            />
            <h4>{x.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
