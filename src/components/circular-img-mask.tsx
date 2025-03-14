import React, { ReactNode } from "react";

interface CircularImgMaskProps {
  children: ReactNode;
  size?: number | string; // Optional prop to customize size
  backgroundColor?: string; // Optional prop for background color
  className?: string; // Optional additional classes
}

const CircularImgMask = ({
  children,
  size = 150, // Default size of 150px
  backgroundColor = "#fff", // Default background color
  className = "",
}: CircularImgMaskProps) => {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-[50%] ${className}`}
      style={{
        width: typeof size === "number" ? `${size}px` : size,
        height: typeof size === "number" ? `${size}px` : size,
        backgroundColor,
      }}
    >
      <div
        className="
          h-full w-full object-cover object-center flex items-center justify-center scale-180"
      >
        {children}
      </div>
    </div>
  );
};

export default CircularImgMask;
