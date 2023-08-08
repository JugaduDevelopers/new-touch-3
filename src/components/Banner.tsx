import React from "react";
import Slider from "./Slider";

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="bg-banner bg-no-repeat bg-cover min-h-screen flex items-center justify-center ">
      <div className="container mx-auto p-5 flex  items-center justify-center ">
        <Slider />
      </div>
    </section>
  );
};

export default Banner;
