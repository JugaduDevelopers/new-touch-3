import React from "react";

type Props = {};

const consultant = (props: Props) => {
  return (
    <section className="bg-greyX">
      <div className="container mx-auto p-5 lg:py-10 lg:px-5">
        <div className="md:flex md:flex-row md:items-center md:justify-center md:gap-10">
          <div className="lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-10">
            <div>
              <p className="text-redX md:!mb-1">Request for your</p>
              <h1 className="md:!mb-1">Consultation</h1>
            </div>
            <div className="hidden lg:block bg-blackX opacity-25 h-24 w-1"></div>
            <p className="mb-0">
              Pimples can be a frustrating and embarrassing skin problem that
              affects people of all ages. Although pimples are typically not
              harmful, they can be visually unappealing and cause physical
              discomfort.
            </p>
          </div>
          <button className="mt-3 md:mt-0 w-full max-w-xs md:max-w-[200px] text-xs md:text-base md:px-4 bg-redX px-2 py-2 rounded-sm text-whiteX md:min-w-[130px]">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default consultant;
