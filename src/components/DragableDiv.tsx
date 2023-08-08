"use client";
import React, { useEffect, useRef } from "react";
import DragablePicture from "../../public/images/dragablePicture.png";
import Image2 from "../../public/images/imageto drag.webp";
import Image3 from "../../public/images/imagetoDrag2.webp";
import Image from "next/image";

const DragableDiv = () => {
  const dragRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const initialHeight = 0; // Set the initial height here

  useEffect(() => {
    const dragElement = dragRef.current;
    const imageElement = imageRef.current;
    let isDragging = false;
    let startY: number;
    let startHeight: number;

    const handleStart = (event: MouseEvent | TouchEvent) => {
      event.preventDefault();
      isDragging = true;
      startY = getVerticalPosition(event);
      startHeight = dragElement?.offsetHeight || 0;
    };

    const handleEnd = () => {
      isDragging = false;
    };

    const handleMove = (event: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const deltaY = getVerticalPosition(event) - startY;
      const newHeight = Math.max(startHeight + deltaY, initialHeight);
      const maxHeight = imageElement?.clientHeight || 0;

      if (dragElement && dragElement.style) {
        dragElement.style.height = `${Math.min(newHeight, maxHeight)}px`;
      }
    };

    const getVerticalPosition = (event: MouseEvent | TouchEvent) => {
      if ("touches" in event) {
        // Touch devices
        return event.touches[0].clientY;
      } else {
        // Mouse devices
        return (event as MouseEvent).clientY;
      }
    };

    if ("ontouchstart" in window) {
      // Touch devices
      dragElement?.addEventListener("touchstart", handleStart);
      document.addEventListener("touchend", handleEnd);
      document.addEventListener("touchmove", handleMove);
    } else {
      // Mouse devices
      dragElement?.addEventListener("mousedown", handleStart);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("mousemove", handleMove);
    }

    return () => {
      if ("ontouchstart" in window) {
        // Touch devices
        dragElement?.removeEventListener("touchstart", handleStart);
        document.removeEventListener("touchend", handleEnd);
        document.removeEventListener("touchmove", handleMove);
      } else {
        // Mouse devices
        dragElement?.removeEventListener("mousedown", handleStart);
        document.removeEventListener("mouseup", handleEnd);
        document.removeEventListener("mousemove", handleMove);
      }
    };
  }, []);

  return (
    <div className="py-5 sm:flex sm:items-center sm:justify-center">
      <div className="relative min-w-[400] sm:min-w-[600px] lg:min-w-[800px] xl:min-w-[1024px]  rounded-xl ">
        <div
          className="absolute top-0 left-0 text-white z-30 w-full"
          id="drag"
          ref={dragRef}
          style={{ height: `${initialHeight}px` }}
        >
          <div className="overflow-hidden h-full w-full relative z-30 bg-slate-600 rounded-3xl">
            <Image
              src={Image2}
              alt="jjjj"
              ref={imageRef}
              className="w-full aspect-sliderDragableImage "
            />
          </div>
          <div className="absolute -bottom-4 sm:-bottom-[22px] left-0  w-full flex justify-center items-center z-50 px-7">
            <div className="h-[1px] sm: w-full bg-whiteX"></div>
            <div className="cursor-pointer p-[2px] sm:p-2 aspect-square rounded-full bg-whiteX flex items-center justify-center border-black border-[1px] border-opacity-25 drop-shadow-2xl">
              <h6 className="text-black text-xs">Drag</h6>
            </div>
            <div className="h-[1px] sm:h-[3px] w-full bg-whiteX"></div>
          </div>
        </div>
        <div className="w-full aspect-sliderDragableImage bg-slate-300 rounded-3xl overflow-hidden">
          <Image
            src={DragablePicture}
            alt="dragablePic"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DragableDiv;
