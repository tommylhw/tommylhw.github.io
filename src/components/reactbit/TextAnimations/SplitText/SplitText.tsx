"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

interface AnimationProps {
  opacity: number;
  y: number;
  [key: string]: number | string;
}

interface SplitTextProps {
  text: string;
  animationFrom: AnimationProps;
  animationTo: AnimationProps;
  delay: number;
  easing: (t: number) => number;
  inView: boolean;
  onLetterAnimationComplete?: () => void;
}

const SplitText = ({
  text,
  animationFrom,
  animationTo,
  delay,
  easing,
  inView,
  onLetterAnimationComplete,
}: SplitTextProps) => {
  const letters = text.split("");
  const [scope, animate] = useAnimate();
  const animatedCount = useRef(0);

  useEffect(() => {
    if (inView) {
      letters.forEach((_, i) => {
        animate(
          `.letter-${i}`,
          animationTo,
          {
            delay: i * delay,
            ease: easing,
            duration: 0.5, // Adjust duration as needed
          },
        ).then(() => {
          animatedCount.current += 1;
          if (
            animatedCount.current === letters.length &&
            onLetterAnimationComplete
          ) {
            onLetterAnimationComplete();
          }
        });
      });
    } else {
      letters.forEach((_, i) => {
        animate(`.letter-${i}`, animationFrom, { duration: 0 });
      });
    }
  }, [inView, animate, delay, easing, animationFrom, animationTo, onLetterAnimationComplete, letters]);

  return (
    <div ref={scope}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={`letter-${index}`}
          initial={animationFrom}
          style={{ display: "inline-block" }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default SplitText;