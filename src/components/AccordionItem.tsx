"use client";
import React, { useRef } from "react";
import DownArrow from "../../public/icons/DownArrow.svg";
import { FAQData } from "@/app/services/data";

type Props = {
  handleToggle: (index: number) => void;
  active: number | null;
  faq: FAQData;
};

const AccordianItem = ({ handleToggle, active, faq }: Props) => {
  const contentEl = useRef<any>();
  const { header, id, text } = faq;
  return (
    <div className="rc-accordion-card">
      <div>
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="rc-accordion-title basis-3/4 ">{header}</h5>
          <DownArrow className="rotateIcon    " />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div
          ref={contentEl}
          className={`rc-collapse ${active === id ? "show" : ""}`}
          style={
            active === id
              ? { height: contentEl?.current?.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className="px-4 py-2 border-2 border-black border-t-0 border-opacity-20 rounded-xl rounded-t-none">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordianItem;
