import React from "react";
import Image from "next/image";
import { BrowserView, MobileView } from "react-device-detect";

// components
import { PinContainer } from "../ui/3d-pin";
import Link from "next/link";

interface PROJECT {
  pinTitle: string;
  pinUrl: string;
  title: string;
  description: string;
  img: string;
}

const ProjectCard = ({ project }: { project: PROJECT }) => {
  return (
    <>
      <BrowserView>
        <PinContainer
          title={project.pinTitle}
          href={project.pinUrl}
          className="w-[250px] max-875:w-[200px] bg-white aspect-square p-0"
        >
          <div className="flex flex-col justify-between gap-2 w-full h-full">
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-bold leading-[18px]">
                {project.title}
              </p>
              <p className="text-gray-600 text-[12px] leading-[18px]">
                {project.description}
              </p>
            </div>

            <div className="rounded-xl">
              <Image
                src={project.img}
                alt=""
                width={0}
                height={0}
                sizes="100%"
                className="rounded-xl w-full shadow-lg"
              />
            </div>
          </div>
        </PinContainer>
      </BrowserView>
      <MobileView>
        <Link
          href={project.pinUrl}
          target="_blank"
        >
          <div className="w-full bg-white aspect-square p-4 my-2 sm:m-2 rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)]">
            <div className="flex flex-col justify-between gap-2 w-full h-full">
              <div className="flex flex-col gap-1">
                <p className="text-[14px] font-bold leading-[18px]">
                  {project.title}
                </p>
                <p className="text-gray-600 text-[12px] leading-[18px]">
                  {project.description}
                </p>
              </div>

              <div>
                <Image
                  src={project.img}
                  alt=""
                  width={0}
                  height={0}
                  sizes="100%"
                  className="rounded-[5px] w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </Link>
      </MobileView>
    </>
  );
};

export default ProjectCard;
