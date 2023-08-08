import React from "react";

type Props = {};

const Statistics = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-pinkX py-10">
      <h3>Our Statistics</h3>
      <div className="flex items-center sm:justify-around justify-center px-5 container mx-auto sm:pt-16 pt-10 gap-5 flex-wrap">
        <div className="min-w-[250px] flex flex-col sm:items-start items-center ">
          <h3 className="text-redX">24+</h3>
          <p>In-House Doctors</p>
        </div>
        <span className="px-[1px] py-10 bg-line md:block hidden"></span>
        <div className="min-w-[250px] flex flex-col sm:items-start items-center ">
          <h3 className="text-redX">250+</h3>
          <p>Happy Clients</p>
        </div>
        <span className="px-[1px] py-10 bg-line md:block hidden"></span>
        <div className="min-w-[250px] flex flex-col sm:items-start items-center ">
          <h3 className="text-redX">5+</h3>
          <p>Medical Branches</p>
        </div>
        <span className="px-[1px] py-10 bg-line xl:block hidden"></span>
        <div className="min-w-[250px] flex flex-col sm:items-start items-center ">
          <h3 className="text-redX">135+</h3>
          <p>Success Therapies</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
