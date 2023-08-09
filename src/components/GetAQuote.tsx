"use client";
import React, { RefObject, useRef } from "react";
import emailjs from "@emailjs/browser";
type Props = {};

const GetAQuote = (props: Props) => {
  const nameRef = useRef<any>();
  const emailRef = useRef<any>();
  const phoneRef = useRef<any>();
  const messageRef = useRef<any>();

  const submit = async (e: any) => {
    e.preventDefault();
    const Name = nameRef.current.value;
    const Email = emailRef.current.value;
    const Message = messageRef.current.value;
    const Phone = phoneRef.current.value;

    if (Name === "" || !Name || Name === undefined) {
      return;
    }
    if (
      Email === "" ||
      !Email ||
      Email === undefined ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)
    ) {
      return;
    }

    const templateParams = {
      to_email: Email,
      to_name: Name,
      from_name: "New touch",
      phone: Phone,
      message: Message,
    };

    emailjs
      .send(
        "service_kd16krp",
        "template_2c4gyga",
        templateParams,
        "AUBnjJUI_K7l-i-a4"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          phoneRef.current.value = "";
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex md:gap-10 gap-5 container mx-auto py-10 md:flex-nowrap flex-wrap px-10">
        <div className="flex flex-col justify-center items-center py-10 md:w-1/4 w-full">
          <p className="text-redX text-start uppercase font-300 text-lg">
            Request for your
          </p>
          <h4 className="text-4xl font-bold text-start">Get A Quote!</h4>
        </div>
        <div className="px-[1px] bg-[#BBBBBB] md:block hidden"></div>
        <form
          className="flex gap-6 items-center justify-center w-full md:flex-nowrap flex-wrap"
          onSubmit={submit}
        >
          <div className="flex flex-col gap-6 w-full">
            <input
              type="text"
              placeholder="Name"
              className="rounded-md border-black border p-2 w-full"
              ref={nameRef}
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-md border-black border p-2 w-full"
              ref={emailRef}
            />
          </div>
          <div className="flex flex-col gap-6 w-full">
            <input
              type="text"
              placeholder="Phone"
              className="rounded-md border-black border p-2 w-full"
              ref={phoneRef}
            />
            <input
              type="text"
              placeholder="Message"
              className="rounded-md border-black border p-2 w-full"
              ref={messageRef}
            />
          </div>

          <div className="flex items-center md:w-1/5 w-full justify-center">
            <button
              type="submit"
              className="bg-redX text-white px-5 py-2 font-semibold"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetAQuote;
