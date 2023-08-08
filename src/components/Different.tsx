import Image from "next/image";
import React from "react";
import First from "../../public/images/Diff_1.png";
import Second from "../../public/images/Diff_B.png";

type Props = {};

const Different = (props: Props) => {
  return (
    <section className="h-auto  lg:mb-10 xl:mt-10 xl:mb-32 flex items-center justify-center">
      <div className="container mx-auto flex flex-col-reverse px-5 mb-20 lg:flex-row  xl:justify-center items-center lg:gap-16 xl:gap-32">
        <div className="pt-4 pr-10 sm:pt-0">
          <div>
            <Image
              src={First}
              alt="First"
              className="aspect-square w-[250px] box sm:w-[320px] lg:w-[450px]"
            />
          </div>
          <div></div>
        </div>
        <div className="max-w-2xl flex flex-col py-5 lg:pt-28 pb-5 ">
          <p className="text-redX uppercase lg:text-lg xl:text-xl">
            Why choose us
          </p>
          <h2 className=" text-3xl xl:text-5xl">
            What makes us <span className="text-redX ">Different</span> from
            others
          </h2>
          <p className="text-sm xl:text-lg font-300 pt-3">
            This clinic offers a customized and holistic solution to a wide
            range of skin, hair. team consists of personally trained therapists,
            each looking after specific procedures. The front desk consists of a
            soft spoken Clinic Manager, who sees to it that the things are
            conducted in friendly manner. Also, we have a staff to
          </p>
          <ul className="list-disc pl-10">
            <li>We understand your skin.</li>
            <li>Highly experienced. Free conslitation.</li>
            <li>Usfda approve machine.</li>
            <li>Result oriented treatment.</li>
          </ul>
          <div>
            <button className=" bg-redX px-5 py-2 text-whiteX mt-5">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Different;
