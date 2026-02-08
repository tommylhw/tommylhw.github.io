import React, { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import { useInView } from "framer-motion";

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
    {
      pinTitle: "motion-tracking-fyp.vercel.app",
      pinUrl: "https://motion-tracking-fyp.vercel.app",
      title: "Healthcare Exercise System with Motion Tracking",
      description:
        "Award winning FYP: Web-based system for anaylzing exercise posture",
      img: "/images/screenshot/motion-tracking-fyp.png",
    }
  ];

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "-40% 0px -60% 0px",   // adjust: activates when section is roughly centered
    // or amount: 0.3 for 30% visible
  });

  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (isInView) {
      setActiveSection("projects");
    }
  }, [isInView, setActiveSection]);

  return (
    <div
      ref={ref}
      id="projects"
      className="w-full max-w-[1200px] flex flex-col justify-center items-center gap-4 max-520:gap-0 my-10 px-0 520:px-10"
    >
      <div className="w-full flex flex-col justify-start ">
        <div className="w-full flex gap-2 items-center ">
          <BsStars className="text-[14px] text-highlight" />
          <p className="text-highlight font-bold text-[14px] font-roc-grotesk">
            TECH SKILLS & EXPERIENCES
          </p>
        </div>
        {/* <p className="text-[48px] font-extrabold">Awards</p> */}
        <div className="mt-[-20px]">
          <ScrollFloat
            animationDuration={1}
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=50%"
            stagger={0.1}
            textClassName="text-[48px] font-extrabold font-roc-grotesk"
          >
            Projects
          </ScrollFloat>
        </div>

        <div className="mt-[-30px]">
          {isMobile ? (
            <p className="text-gray-600 w-[40%] max-875:w-[70%] max-520:w-[100%] text-[13px]">
              A collection of my STEM related projects and software development
              projects
            </p>
          ) : (
            <ScrollFloat
              animationDuration={1}
              scrollStart="center bottom+=20%"
              scrollEnd="bottom bottom-=50%"
              stagger={0.03}
              textClassName="text-gray-600 w-[40%] max-875:w-[70%] max-520:w-[100%] text-[13px]"
            >
              A collection of my STEM related projects and software development
              projects
            </ScrollFloat>
          )}
        </div>
      </div>

      <div className="w-full flex max-md:flex-col max-md:gap-3 justify-center max-md:items-center items-start flex-wrap">
        {projects.map((project, index) => (
          <div key={index} className="p-[20px] w-[350px] max-520:w-auto">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
