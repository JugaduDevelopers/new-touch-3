import React from "react";
import AccordionBox from "@/components/AccordionBox";
import { FAQData } from "@/app/services/data";
import CurveLines from "../../public/icons/curveLines.svg";

type Props = { faqs: FAQData[] };

const FAQ = ({ faqs }: Props) => {
  return (
    <section>
      <div className=" container mx-auto p-5 sm:py-10  flex flex-col items-center justify-center">
        <h3 className="text-center">Frequently Asked Questions</h3>
        <p className="text-center">
          We encourage your feedback, please feel free to send us a messageusing
          the following contact form.
        </p>
        <AccordionBox faqs={faqs} />
      </div>
      {/* <div className="hidden md:block md:absolute md:top-44 md:max-w-full  md:overflow-hidden ">
        <CurveLines />
      </div> */}
    </section>
  );
};

export default FAQ;
