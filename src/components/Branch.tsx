import Image from "next/image";
import React from "react";
import Nikol from "../../public/images/Nikol.png";
import Shyamal from "../../public/images/Shyamal.png";
import Graph from "../../public/images/graph.png";

type Props = {};

const Branch = (props: Props) => {
  return (
    <>
      <div className="bg-[#FFD7D7]">
        <div className="container mx-auto flex justify-evenly px-8 py-20 flex-wrap">
          <div className="w-[500px] border-white aspect-auto shadow-xl rounded-xl lg:pt-0 pt-5">
            <Image src={Nikol} alt="Img" width={500} />
            <div className="text-center">
              <h4 className="line-clamp-2 text-3xl py-3">
                <span className="text-redX">New Touch</span> at Nikol
              </h4>
              <p className="font-400 text-lg px-3">
                Welcome to New Touch Skin Care, your premier beauty clinic based
                in Ahmedabad, Gujarat. Since 2007, we have been your one-stop
                destination for all your beauty solutions. Experience our
                transformative treatments today.
              </p>
            </div>
          </div>
          <div className="w-[500px] border-white aspect-auto shadow-2xl rounded-xl lg:pt-0 pt-5">
            <Image src={Shyamal} alt="Img" width={500} />
            <div className="text-center">
              <h4 className="line-clamp-2 text-3xl py-3">
                <span className="text-redX">New Touch</span> at Shyamal
              </h4>
              <p className="font-400 text-lg px-3 pb-3">
                Welcome to New Touch Skin Care, your premier beauty clinic based
                in Ahmedabad, Gujarat. Since 2007, we have been your one-stop
                destination for all your beauty solutions. Experience our
                transformative treatments today.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-20 lg:block hidden">
        <Image src={Graph} alt="Img" width={1500} className="w-[100vw]" />
      </div>
    </>
  );
};

export default Branch;
