import Image from "next/image";
import React from "react";
import logo from "../../public/images/footer-logo.png";

export default function Footer() {
  return (
    <>
      <div className="bg-darkred text-whiteX">
        <div className="container mx-auto">
          <footer className="grid-cols-auto-fit grid gap-2 max-md:gap-10 items-center sm:justify-items-center py-10">
            <Image className="max-lg:hidden" src={logo} alt="Logo" />
            <div className="max-lg:hidden">
              <h4>Treatments</h4>
              <ul className="list-disc flex flex-col gap-1">
                <li>Laser Hair Removal</li>
                <li>Acne Treatment</li>
                <li>Hair Loss</li>
                <li>Laser Facial</li>
                <li>Acne Scars</li>
                <li>PRP Treatment For Hair Loss</li>
                <li>Hair Transplant (AHT)</li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul className="flex flex-col gap-1">
                <li className="text-lg">New Touch Skin Care</li>
                <li className="flex gap-2">
                  <Image
                    src={"/icons/global.svg"}
                    alt="Call"
                    width={18}
                    height={18}
                  />

                  <a href="www.newtouch.in" about="_blank">
                    www.newtouch.in
                  </a>
                </li>
                <li className="flex gap-2">
                  <Image
                    src={"/icons/direct.svg"}
                    alt="Call"
                    width={18}
                    height={18}
                  />
                  <a href="mailto:newtouchindia@gmail.com">
                    newtouchindia@gmail.com
                  </a>
                </li>
                <li className="flex gap-2">
                  <Image
                    src={"/icons/call.svg"}
                    alt="Call"
                    width={18}
                    height={18}
                  />
                  +91 97149 49489
                </li>
                <li className="flex gap-2">
                  <Image
                    src={"/icons/call.svg"}
                    alt="Call"
                    width={18}
                    height={18}
                  />
                  +91 85111 00962
                </li>
                <li className="flex gap-2">
                  <Image
                    src={"/icons/call.svg"}
                    alt="Call"
                    width={18}
                    height={18}
                  />
                  +91 98797 82286
                </li>
              </ul>
            </div>
            <div className="h-full">
              <h4>Branch</h4>
              <ul className="flex flex-col gap-1">
                <li className="flex gap-2">
                  <Image
                    src={"/images/location.svg"}
                    alt="Location"
                    width={18}
                    height={18}
                  />
                  108, Shangrila Arcade, Nr. Shyamal Cross Road,
                  <br /> Satellite, Ahmedabad - 380015
                </li>
                <li className="flex gap-2">
                  <Image
                    src={"/images/location.svg"}
                    alt="Location"
                    width={18}
                    height={18}
                  />
                  101, dharma Plaza, Nikol Gaam,
                  <br /> Nikol, Ahmedabad - 380038
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
      <p className="flex justify-center items-center">
        © Copyright 2023 - All Rights Reserved
      </p>
    </>
  );
}
