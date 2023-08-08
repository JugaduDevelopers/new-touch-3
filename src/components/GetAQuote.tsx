import React from "react";

type Props = {};

const GetAQuote = (props: Props) => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex md:gap-10 gap-5 container mx-auto py-10 md:flex-nowrap flex-wrap px-10">
        <div className="flex flex-col justify-center items-center py-10 md:w-1/4 w-full">
          <p className="text-[#D24648] text-start uppercase font-100 text-lg">
            Request for your
          </p>
          <h4 className="text-4xl font-bold text-start">Get A Quote!</h4>
        </div>
        <div className="px-[1px] bg-[#BBBBBB] md:block hidden"></div>
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
        <div className="flex items-center md:w-1/5 w-full justify-center">
          <button
            type="submit"
            className="bg-redX text-white px-5 py-2 font-semibold"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
