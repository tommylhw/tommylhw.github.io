// "use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

// components
import SpotlightCard from "../reactbit/Components/SpotlightCard/SpotlightCard";
import CircularImgMask from "../circular-img-mask";

const AwardCard = ({
  image,
  title,
  subTitle,
}: {
  image: string;
  title: string;
  subTitle: string;
}) => {
  return (
    <motion.div
      className="w-full"
      viewport={{ amount: 0.7 }}
      initial="offscreen"
      whileInView="onscreen"
      variants={{
        offscreen: { opacity: 0 },
        onscreen: {
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: "easeInOut",
            // type: "spring",
            // stiffness: 100,
            // damping: 10,
          },
        },
      }}
    >
      <SpotlightCard
        spotlightColor="rgba(104, 234, 253, 0.5)"
        className="flex flex-row max-875:flex-col justify-start items-center gap-4 font-montserrat w-full"
      >
        <div className="w-[130px] h-[130px]">
          <CircularImgMask size={130} className="w-full">
            <Image src={image} alt="award" width={200} height={200} />
          </CircularImgMask>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 w-full">
          <p className="text-center text-md font-[600]">{title}</p>
          <hr className="w-[80%] max-520:w-[100%]" />
          <p className="text-center text-sm">{subTitle}</p>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

export default AwardCard;
