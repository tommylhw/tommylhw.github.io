"use client";
import React from "react";
import Image from "next/image";
import style from "./navbar.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { isMobile } from "react-device-detect";

// components
import MarkHighlight from "../mark-highlight";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  useGSAP(() => {
    // First animation: Background color, blur, and border on scroll
    gsap.to(".navbar", {
      scrollTrigger: {
        trigger: ".navbar",
        start: "7 top", // Start when top of navbar is 10px from top of viewport
        scrub: true,
        onEnter: () => {
          gsap.to(".navbar", {
            duration: 0.3,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(226, 232, 240, 1)",
            paddingTop: 10,
            paddingBottom: 10,
          });
        },
        onLeaveBack: () => {
          gsap.to(".navbar", {
            duration: 0.3,
            backgroundColor: "rgba(255, 255, 255, 0)", // Fully transparent
            backdropFilter: "none", // Remove blur
            border: "1px solid rgba(226, 232, 240, 0)", // Transparent border
            paddingTop: 20,
            paddingBottom: 20,
          });
        },
      },
    });

    // Second animation: Max-width and border on scroll
    gsap.to(".navbar", {
      maxWidth: isMobile ? 300 : 600,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(226, 232, 240, 1)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".navbar",
        start: "top top",
        end: isMobile ? "50 top" : "180 top",
        scrub: true,
      },
    });

    // Check initial scroll position and apply second animation state if needed
    const initialScroll = window.scrollY;
    if (initialScroll >= 180) {
      gsap.set(".navbar", {
        maxWidth: 600,
        border: "1px solid rgba(226, 232, 240, 1)",
      });
    }

    // Refresh ScrollTrigger to ensure correct state
    ScrollTrigger.refresh();
  }, []);

  const ScrollToSection = (sectionId: string) => {
    gsap.to(window, {
      duration: 2,
      scrollTo: `#${sectionId}`,
      ease: "power1.inOut",
    });
  };

  return (
    <div className="flex justify-center items-center w-[95%] m-auto mt-[10px]">
      <div className="navbar flex justify-center items-center w-full py-[20px] max-w-[1200px] rounded-[80px] bg-[rgba(255,_255,_255,_0)] border-[1px] border-solid border-[rgba(226,232,240,0)] relative">
        <div className="flex justify-center items-center absolute left-0 ml-[5px]">
          <Image
            src="/images/logo/icon-circle.png"
            alt="Tommy Wong"
            width={28}
            height={28}
            sizes="100%"
            className="rounded-full "
          />
        </div>
        <ul
          className={`${style.navbar_ul} flex justify-center items-center gap-[20px]`}
        >
          <li onClick={() => ScrollToSection("about-me")}>
            <p>
              <MarkHighlight>About Me</MarkHighlight>
            </p>
          </li>
          <li onClick={() => ScrollToSection("projects")}>
            <p>
              <MarkHighlight>Projects</MarkHighlight>
            </p>
          </li>
          <li onClick={() => ScrollToSection("recognition")}>
            <p>
              <MarkHighlight>Reconition</MarkHighlight>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
