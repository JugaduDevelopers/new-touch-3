import React, { memo, useEffect, useState } from "react";
import LgNav from "./lgNav";
import logo from "../../public/images/logo-head.png";
import logo2 from "../../public/images/footer-logo.png";
import TestNav from "./testNav";
import Image from "next/image";
import HeaderTopBar from "./HeaderTopBar";
import Calendar from "../../public/icons/calendar.svg";
// import "../styles/header.css";

function Header() {
  return (
    <>
      <HeaderTopBar />
      <div
        className={
          "drop-shadow-lg shadow-darkred bg-whiteX max-md:bg-darkred flex items-center gap-8 py-4 md:py-0"
        }
      >
        <div className="flex justify-between items-center mx-auto container">
          <Image
            src={logo}
            height={70}
            width={70}
            alt="Logo"
            className="max-md:hidden ml-10"
          />
          <Image
            src={logo2}
            height={70}
            width={70}
            alt="Logo"
            className="md:hidden"
          />
          <LgNav />
          <TestNav />
        </div>
        <div className="bg-[#F39297] h-full w-80 p-6 max-md:hidden">
          <button className="border justify-center border-white flex items-center py-2 px-4 gap-4 text-white">
            <Calendar />
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
