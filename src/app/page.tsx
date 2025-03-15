"use client";
import React from "react";

// components
import Hero from "@/components/hero/hero";
import Reconition from "@/components/recognition/recognition";
import ClickSpark from "@/components/reactbit/Animations/ClickSpark/ClickSpark";
import Project from "@/components/project/project";

const Home = () => {
  return (
    <ClickSpark
      sparkColor="#181818"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="flex flex-col justify-center items-center bg-[#F7F8FA]n font-montserrat max-md:px-[20px]">
        <Hero />
        <Project />
        <Reconition />
        <div className="h-[50vh]"></div>
      </div>
    </ClickSpark>
  );
};

export default Home;
