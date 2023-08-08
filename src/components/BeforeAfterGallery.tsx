import React from "react";
import DraggableDiv from "@/components/DragableDiv";

type Props = {};

const BeforeAfterGallery = (props: Props) => {
  return (
    <section className="bg-pinkX">
      <div className="container mx-auto p-5">
        <p className="text-center">Desired procedure to begin</p>
        <h3 className="text-center">
          Before After<span className="text-redX">Gallery</span>
        </h3>
        <DraggableDiv />
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
