/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobile } from "react-device-detect"; // Assuming this is available

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split("").map((char, index) => (
      <span className="inline-block" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".inline-block");

    let tl: GSAPTimeline; // Declare timeline variable

    if (isMobile) {
      // Mobile: Run full animation when component enters viewport
      tl = gsap.timeline({ paused: true }); // Create paused timeline
      tl.fromTo(
        charElements,
        {
          willChange: "transform",
          transform: "translateY(120%) scaleY(2.3) scaleX(0.7)",
          opacity: 0,
        },
        {
          duration: animationDuration,
          ease: ease,
          transform: "translateY(0%) scaleY(1) scaleX(1)",
          opacity: 1,
          stagger: stagger,
        }
      );

      const scrollTrigger = ScrollTrigger.create({
        trigger: el,
        scroller,
        start: "top 80%", // Start when 80% of the component is in view
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(), // Replay if scrolling back up
        onLeave: () => tl.pause(0), // Pause at start if leaving viewport
        onLeaveBack: () => tl.pause(0), // Pause at start if scrolling back out
      });

      // Check if component is already in view on mount
      const rect = el.getBoundingClientRect();
      const isInView =
        rect.top >= 0 &&
        rect.top <= window.innerHeight &&
        rect.bottom >= 0 &&
        rect.bottom <= window.innerHeight;
      if (isInView) {
        tl.play();
      }

      // Refresh ScrollTrigger to ensure proper initialization
      ScrollTrigger.refresh();
    } else {
      // Desktop: Keep scroll-based animation with scrub
      gsap.fromTo(
        charElements,
        {
          willChange: "transform",
          transform: "translateY(120%) scaleY(2.3) scaleX(0.7)",
          opacity: 0,
        },
        {
          duration: animationDuration,
          ease: ease,
          transform: "translateY(0%) scaleY(1) scaleX(1)",
          opacity: 1,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: true,
          },
        }
      );
    }

    // Cleanup ScrollTrigger instances
    return () => {
      if (tl) tl.kill(); // Kill the timeline if it exists
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
    isMobile,
  ]);

  return (
    <h2
      ref={containerRef}
      className={`my-5 overflow-hidden ${containerClassName}`}
    >
      <span
        className={`inline-block leading-[1.5] ${textClassName}`} // text-[clamp(1.6rem,4vw,3rem)]
      >
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;