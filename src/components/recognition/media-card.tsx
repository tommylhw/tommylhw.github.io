import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

// components
import MarkHighlight from "../mark-highlight";

const MediaCard = ({
  title,
  date,
  url,
  img,
}: {
  title: string;
  date?: string;
  url: string;
  img: string;
}) => {
  return (
    <motion.div
      className=""
      viewport={{ amount: 0.2 }}
      initial="offscreen"
      whileInView="onscreen"
      variants={{
        offscreen: { scale: 0 },
        onscreen: {
          scale: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        },
      }}
    >
      <Link href={url} target="_blank">
      <div
        className="group w-[310px] 520:w-[250px] sm:w-[270px] md:w-[300px] 875:w-[250px] 1100:w-[300px] rounded-[10px] cursor-pointer mx-[0px] 1100:mx-[10px] my-[40px] hover:shadow-2xl transition-all duration-300 ease-in-out block box-border [box-shadow:rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.05)_0px_8px_32px]"
        style={{
          pageBreakInside: "avoid",
          breakInside: "avoid",
        }}
      >
        <div className="w-full rounded-tl-[10px] rounded-br-[0] rounded-tr-[10px] rounded-bl-[0] bg-[#F3F4F6]">
          <Image
            src={img}
            alt={title}
            width={0}
            height={0}
            sizes="100%"
            className="w-full transition-all duration-300 ease-in-out rounded-tl-[10px] rounded-br-[0] rounded-tr-[10px] rounded-bl-[0] group-hover:rounded-br-[10px] group-hover:rounded-bl-[10px] group-hover:scale-95"
          />
        </div>
        <div className="w-full flex flex-col gap-2 p-2">
          <div className="w-full ">
            <MarkHighlight>
              {title}
            </MarkHighlight>
          </div>
          <div className="w-full flex justify-end">
            <p className=" text-gray-500 text-[13px]">{date}</p>
          </div>
        </div>
      </div>
      </Link>
    </motion.div>
  );
};

export default MediaCard;
