import React from "react";

// components
import ScrollFloat from "../reactbit/TextAnimations/ScrollFloat/ScrollFloat";

// icons
import { BsStars } from "react-icons/bs";
import ProjectCard from "./project-card";

const Project = () => {
  const projects = [
    {
      pinTitle: "www.ardyslexiatoy.com",
      pinUrl: "https://www.ardyslexiatoy.com",
      title:
        "C.A.R.D. - Augmented Reality Game for Identifying Early-age School Kids with Dyslexia",
      description:
        "An STEM invention project aims to early identifying dyslexic kids",
      img: "/images/screenshot/ardyslexiatoy-screenshot.png",
    },
    {
      pinTitle: "pinocchio.sight.ust.hk",
      pinUrl: "https://pinocchio.sight.ust.hk",
      title: "HKUST Pinocchio",
      description:
        "A web-based platform for sharing personal story and Uni-life",
      img: "/images/screenshot/hkust-pino-screenshot.png",
    },
  ];

  return (
    <div
      id="projects"
      className="w-full max-w-[1200px] flex flex-col justify-center items-center gap-4 max-520:gap-0 my-10"
    >
      <div className="w-full flex flex-col justify-start px-0 520:px-10">
        <div className="w-full flex gap-2 items-center ">
          <BsStars className="text-[14px] text-highlight" />
          <p className="text-highlight font-bold text-[14px]">
            TECH SKILLS & EXPERIENCES
          </p>
        </div>
        {/* <p className="text-[48px] font-extrabold">Awards</p> */}
        <div className="mt-[-20px]">
          <ScrollFloat
            animationDuration={0.3}
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=50%"
            stagger={0.03}
            textClassName="text-[48px] font-extrabold"
          >
            Projects
          </ScrollFloat>
        </div>

        <div className="mt-[-30px]">
          <ScrollFloat
            animationDuration={0.3}
            scrollStart="center bottom+=20%"
            scrollEnd="bottom bottom-=50%"
            stagger={0.03}
            textClassName="text-gray-600 w-[40%] max-875:w-[70%] max-520:w-[100%] text-[13px]"
          >
            A collection of my STEM related projects and software development
            projects
          </ScrollFloat>
        </div>
      </div>

      <div className="w-full p-2 flex max-md:flex-col max-md:gap-3 justify-start max-md:items-center items-start">
        {projects.map((project, index) => (
          <div key={index} className="">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
