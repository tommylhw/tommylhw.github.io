import React from "react";
import Image from "next/image";

// components
import { PinContainer } from "../ui/3d-pin";

interface PROJECT {
  pinTitle: string;
  pinUrl: string;
  title: string;
  description: string;
  img: string;
}

const ProjectCard = ({ project }: { project: PROJECT }) => {
  return (
    <PinContainer
      title={project.pinTitle}
      href={project.pinUrl}
      className="w-[300px] max-875:w-[250px] bg-white aspect-square p-0"
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
  );
};

export default ProjectCard;
