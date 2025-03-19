/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  // Convert speed to animation duration in seconds
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#b5b5b5a4] inline-block ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "200% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text", // For Safari
        color: "transparent", // Make text transparent to show gradient
        animationDuration: animationDuration,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
      }}
    >
      <span>{text}</span> {/* Wrap text in a span to isolate styling */}
    </div>
  );
};

export default ShinyText;