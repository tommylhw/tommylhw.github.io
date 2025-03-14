"use client";
import React, {
  ReactNode,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import Lenis from "lenis";

const SmoothScrollerContext = createContext<Lenis | null>(null);

export const useSmoothScroller = () => useContext(SmoothScrollerContext);

const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [lenisRef, setLenisRef] = useState<Lenis | null>(null);
  const [rafState, setRafState] = useState<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis();
    // let rf;

    const raf = (time: number) => {
      scroller.raf(time);
      requestAnimationFrame(raf);
    };

    // rf = requestAnimationFrame(raf);
    const rf: number = requestAnimationFrame(raf);
    setRafState(rf);
    setLenisRef(scroller);

    return () => {
      if (lenisRef) {
        cancelAnimationFrame(rafState as number);
        lenisRef.destroy();
      }
    };
  }, [lenisRef, rafState]);

  return (
    <SmoothScrollerContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollerContext.Provider>
  );
};

export default ScrollProvider;
