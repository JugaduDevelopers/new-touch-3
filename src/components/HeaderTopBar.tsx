import React from "react";
import Call from "../../public/icons/call_black.svg";
import message from "../../public/icons/messages.png";
import Facebook from "../../public/icons/Vector.svg";
import Twitter from "../../public/icons/Vector(1).svg";
import Instagram from "../../public/icons/Vector(2).svg";
import LinkedIn from "../../public/icons/Vector(3).svg";
import Pinterest from "../../public/icons/Vector(4).svg";
import Image from "next/image";
type Props = {};

const HeaderTopBar = (props: Props) => {
  return (
    <div className="bg-slate-100 flex justify-end items-center gap-8 max-[991px]:hidden">
      <div className="max-md:hidden flex gap-5 justify-end py-2 items-center text-sm">
        <span className="">Welcome to newtouch</span>
        <span className="h-7 bg-slate-300 w-[2px]" />
        <div className="gap-3 items-center flex">
          <Facebook />
          <Twitter />
          <Instagram />
          <LinkedIn />
          <Pinterest />
        </div>
        <span className="h-7 bg-slate-300 w-[2px]" />
        <div className="flex gap-2 justify-center items-center">
          <Call />
          +91 971 494 9489
        </div>
        <span className="h-7 bg-slate-300 w-[2px]" />
        <div className="flex gap-2 justify-center items-center">
          <Image src={message} alt="Message" height={24} width={24} />
          +91 971 494 9489
        </div>
      </div>
      <div className="bg-[#F39297] h-12 w-[261px]"></div>
    </div>
  );
};

export default HeaderTopBar;
