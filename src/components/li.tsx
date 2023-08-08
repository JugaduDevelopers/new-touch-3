"use client";

import Link from "next/link";
import React, { memo } from "react";
import { navLinks } from "../../public/navLinks";
import { usePathname } from "next/navigation";

function Li({ setIsOpen = (x: boolean) => {}, isOpen = false }) {
  const pathname = usePathname();
  const closeBar = () =>
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 500);
  return (
    <>
      {navLinks.map((x) => {
        return (
          <li onClick={closeBar} key={x.tag} className="flex flex-col">
            <Link
              href={`${x.href}`}
              className={`${
                pathname === x.href ? "text-[#CE444A]" : ""
              } hover:text-[#CE444A] transition-colors duration-200 font-700`}
            >
              {x.tag}
            </Link>
            <span
              className={`${
                pathname === x.href ? "block" : "hidden"
              } h-[1.5px] w-full bg-[#CE444A]`}
            ></span>
          </li>
        );
      })}
    </>
  );
}

export default memo(Li);
