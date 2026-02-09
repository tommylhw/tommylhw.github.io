"use client";
import React, { useEffect, useRef } from "react";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import { useInView } from "framer-motion";

// components
import Awards from "./awards";
import Media from "./media";

const Recognition = () => {
//   const tabs = [
//     {
//       title: "Awards",
//       value: "awards",
//       content: (
//         <div
//           className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#ced3de] to-[#edf2ff] [box-shadow:28px_28px_50px_0_rgba(5,15,31,0.16),_-23px_-23px_45px_0_#FFFFFF]
// "
//         ></div>
//       ),
//     },
//     {
//       title: "Media",
//       value: "media",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold p-10">
//           <div
//             className="w-full h-full p-10 bg-[#fff] rounded-2xl"
//             style={{
//               boxShadow:
//                 "-10px -10px 15px rgba(255, 255, 255, 0.5), 10px 10px 15px rgba(70, 70, 70, 0.12);",
//             }}
//           >
//             media
//           </div>
//         </div>
//       ),
//     },
//   ];

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-40% 0px -60% 0px",   // adjust: activates when section is roughly centered
    // or amount: 0.3 for 30% visible
  });

  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (isInView) {
      setActiveSection("recognition");
    }
  }, [isInView, setActiveSection]);

  return (
    <div
      ref={ref}
      id="recognition"
      className="max-w-[1200px] w-full flex flex-col justify-center item-center" /* className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40" */
    >
      {/* <Tabs tabs={tabs} /> */}
      {/* <Awards /> */}
      <Media />
    </div>
  );
};

export default Recognition;
