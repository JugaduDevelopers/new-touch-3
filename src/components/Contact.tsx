import Image from "next/image";
import React from "react";
import Map from "../../public/images/Map.png";

type Props = {};

const Contact = (props: Props) => {
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center bg-[#CDD1D4] min-h-[250px]">
          <p className="uppercase text-sm">Contact us</p>
          <h4 className="text-5xl text-center">
            We’d love to hear <br /> from you
          </h4>
        </div>
        <div className="container mx-auto">
          <div className="flex justify-center py-14 px-5">
            <Image src={Map} alt="Map" width={1200} />
          </div>
          <div className="flex gap-5 md:flex-nowrap flex-wrap-reverse py-14">
            <div className="min-w-72 md:w-1/4 w-full shadow-xl py-10 px-5 rounded-xl mx-3">
              <div className="flex flex-col">
                <h6 className="text-redX text-xl pb-3">Get In Touch</h6>
                <h6 className="font-900">Visit us</h6>
                <p className="text-sm">
                  108, Shangrila Arcade,Nr. Shyamal Cross Road,Satellite,
                  Ahmedabad - 380015
                </p>
                <p className="text-sm">
                  101, Dharma Plaza,Nikol Gaam, Nikol, Ahmedabad - 380038
                </p>
                <h6 className="font-900">Chat with us</h6>
                <p className="text-sm underline">newtouchindia@gmail.com</p>
                <h6 className="font-900">Call us</h6>
                <p className="text-sm underline">+91 97149 49489</p>
                <p className="text-sm underline">+91 97149 49489</p>
                <p className="text-sm underline">+91 97149 49489</p>
                <h6 className="font-900">Social media</h6>
              </div>
            </div>
            <div className="min-w-72 md:w-9/12 w-full h-fit md:shadow-xl py-10 px-5 md:rounded-xl md:bg-white bg-[#CDD1D4]">
              <form className="flex gap-6 items-center justify-center w-full md:flex-nowrap flex-wrap">
                <div className="flex flex-col gap-6 w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded-md border-black border p-2 w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-md border-black border p-2 w-full"
                  />
                </div>
                <div className="flex flex-col gap-6 w-full">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="rounded-md border-black border p-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Message"
                    className="rounded-md border-black border p-2 w-full"
                  />
                </div>
              </form>
              <div className="flex md:justify-end justify-center mt-5">
                <button
                  type="submit"
                  className="bg-redX text-white px-5 py-2 font-semibold"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
