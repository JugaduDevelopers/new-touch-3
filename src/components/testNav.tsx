"use client";
import React, { useState, memo } from "react";
import CloseMenuSvg from "../../public/icons/close_menu.svg";
import MenuSvg from "../../public/icons/menu.svg";
import Li from "./li";
import Calendar from "../../public/icons/calendar_red.svg";

function TestNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`top-7 right-5 duration-200 fixed md:hidden shadow-white drop-shadow-2xl z-20`}
      >
        {isOpen ? <CloseMenuSvg width="32px" /> : <MenuSvg width="32px" />}
      </button>
      <div
        className={`top-0 right-0 fixed h-screen w-full bg-whiteX  p-10 z-10 drop-shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-200 md:hidden flex flex-col items-center gap-14`}
      >
        {isOpen && (
          <div className="-ml-16 -mt-4">
            <button className=" border bg-[#FFDFDF] text-redX z-20 justify-center border-redX flex items-center py-2 px-4 gap-4">
              <Calendar />
              Book Appointment
            </button>
          </div>
        )}
        <nav>
          <ul className="flex items-center flex-col gap-12">
            <Li isOpen={isOpen} setIsOpen={setIsOpen} />
          </ul>
        </nav>
        <div>
          <h4 className="text-redX text-xl mb-5"> Our Treatments</h4>
          <ul className="list-disc flex flex-col gap-1 text-sm">
            <li>Laser Hair Removal</li>
            <li>Acne Treatment</li>
            <li>Hair Loss</li>
            <li>Laser Facial</li>
            <li>Acne Scars</li>
            <li>PRP Treatment For Hair Loss</li>
            <li>Hair Transplant (AHT)</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default memo(TestNav);
