"use client";
import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ScaleEnter = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness factor
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  // GSAP Animation for scaling effect
  useGSAP(() => {
    if (!textRef.current || !containerRef.current) return;

    gsap.to(textRef.current, {
      scale: 10, // Scale up to cover screen (adjust based on viewport)
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Start when container top hits 80% of viewport
        end: "top 20%", // End when container top hits 20% of viewport
        scrub: 1, // Smoothly tie scaling to scroll position
        pin: true, // Pin the element during scaling
        pinSpacing: true, // Reserve space during pinning
        // onComplete: () => {
        //   // Optional: Trigger transition to next section
        //   if (lenisRef.current) {
        //     lenisRef.current.scrollTo("#next-section", {
        //       duration: 1,
        //       easing: (t) => 1 - Math.pow(1 - t, 4),
        //     });
        //   }
        // },
      },
    });
  }, []);

  return (
    <div className="min-h-[200vh] bg-gray-100">
      <div
        ref={containerRef}
        className="h-screen flex items-center justify-center"
      >
        ENTER
      </div>
    </div>
  );
};

export default ScaleEnter;
