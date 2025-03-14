"use client";
import React from "react";

// shadcn ui
import { Button } from "@/components/ui/button";

// components
import SplitText from "@/components/reactbit/TextAnimations/SplitText/SplitText";
import RotatingText from "@/components/reactbit/TextAnimations/RotatingText/RotatingText";
import TiltedCard from "../reactbit/Components/TiltedCard/TiltedCard";
import TrueFocus from "../reactbit/TextAnimations/TrueFocus/TrueFocus";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Squares from "../reactbit/Backgrounds/Squares/Squares";
import ClickSpark from "@/components/reactbit/Animations/ClickSpark/ClickSpark";
import { LinkPreview } from "@/components/ui/link-preview";

// icons
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="about-me"
      className="flex flex-col gap-4 justify-center max-md:items-start max-w-[1200px] md:w-full mt-[100px] border-0"
    >
      <div className="flex flex-col pb-[100px] max-875:pb-[60px] ">
        <ContainerScroll
          titleComponent={
            <div className="flex max-md:flex-col justify-center items-center max-md:items-center w-full gap-10 max-875:gap-6 mb-[100px] max-1100:mb-[50px] ">
              <div className="flex flex-col justify-center items-center px-[5px] py-[0]  aspect-square w-[50%] max-520:w-[70%]">
                {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
                <div className="aspect-square w-[80%] max-1100:w-[90%] max-875:w-[100%]">
                  <TiltedCard
                    imageSrc="/images/avatar-3.jpg"
                    altText="Tommy Wong"
                    captionText="Welcome to my website"
                    containerHeight="100%"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="tilted-card-demo-text text-[#fff] text-lg font-bold font-kalam mt-[0] mr-[0] mb-[20px] ml-[20px] backdrop-filter backdrop-blur-[80px] bg-[rgba(95,_95,_95,_0.5)] px-[10px] py-0 rounded-[10px]">
                        <TrueFocus
                          sentence="Tommy Wong"
                          manualMode={false}
                          blurAmount={2}
                          borderColor="#68EAFD"
                          animationDuration={1.5}
                          pauseBetweenAnimations={1}
                          textStyles={{
                            fontSize: "18px",
                            fontWeight: "bold",
                          }}
                        />
                      </div>
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col items-start px-[5px] py-[0] ">
                <div className="flex flex-col justify-center items-start">
                  <SplitText
                    text="Hi, I'm Tommy Wong"
                    className="text-lg max-875:text-[16px] font-bold font-kalam text-[#A1A1A1]"
                    animationFrom={{
                      opacity: 0,
                      transform: "translate3d(0, 60px, 0)",
                    }}
                    animationTo={{
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    }}
                    // easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  <p
                    className={`text-[2em] max-875:text-[24px] mt-4 max-1100:mt-2 font-bold`}
                  >
                    A passionate
                  </p>

                  <div className="mt-3 max-520:mt-1 flex flex-row flex-wrap gap-4 max-875:gap-3 items-center ">
                    <RotatingText
                      texts={["Website", "Mobile App", "Full Stack"]}
                      mainClassName="px-1 bg-cyan-300 text-white font-bold overflow-hidden justify-center rounded-lg text-[2em] max-875:text-[24px] w-60 max-875:w-40"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                      }}
                      rotationInterval={3000}
                    />
                    <p className={`text-[2em] max-875:text-[24px] font-bold`}>
                      developer
                    </p>
                  </div>

                  <p className="mt-5 text-left max-875:text-[13px]">
                    I love to create modern mobile / web applications with the
                    latest technologies.
                  </p>

                  <div className="mt-10 max-1100:mt-6 max-875:mt-4 flex gap-6 justify-start max-md:justify-center items-center w-full">
                    <Link href="https://drive.google.com/file/d/1qhnX2EAxENWu9Nz_L544BCOTjIAH_fLv/view" target="_blank">
                      <Button className="rounded-[100px] cursor-pointer transition-all ease-in-out duration-300">
                        My Resume
                      </Button>
                    </Link>
                    <div className="flex gap-4 items-center">
                      <LinkPreview
                        url="https://www.linkedin.com/in/tommylhwong/"
                        isStatic={true}
                        imageSrc="/images/screenshot/linkedin-screenshot.png"
                      >
                        <FaLinkedinIn className="cursor-pointer transition-all ease-in-out duration-300 text-xl" />{" "}
                      </LinkPreview>
                      <LinkPreview
                        url="https://github.com/tommylhw"
                        isStatic={true}
                        imageSrc="/images/screenshot/github-screenshot.png"
                      >
                        <FaGithub className="cursor-pointer transition-all ease-in-out duration-300 text-xl" />{" "}
                      </LinkPreview>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <div className="flex flex-col justify-center items-center w-full h-full font-caveat relative">
            <ClickSpark
              sparkColor="#181818"
              sparkSize={10}
              sparkRadius={15}
              sparkCount={8}
              duration={400}
            >
              <div className="w-full h-full absolute top-0 z-40">
                <Squares
                  speed={0}
                  squareSize={40}
                  direction="diagonal"
                  borderColor="rgba(229, 229, 229, 0.4)"
                  hoverFillColor="rgba(229, 229, 229, 0.4)"
                />
              </div>
              <div className="flex flex-col justify-center items-center p-10 max-md:p-5 w-full h-full absolute top-0">
                <p className={`font-bold text-[42px] mb-6 z-50`}>About Me</p>
                <div className="flex flex-col justify-start items-center w-full h-full text-[28px] max-md:text-[24px]">
                  <div className="flex gap-[50px] max-md:gap-[25px] w-full">
                    <p className="w-[40%] max-520:w-[30%] text-right max-520:text-left z-50">
                      Name :
                    </p>
                    <p className="w-[60%] text-left z-50">Tommy Wong</p>
                  </div>
                  <div className="flex gap-[50px] max-md:gap-[25px] w-full">
                    <p className="w-[40%] max-520:w-[30%] text-right max-520:text-left z-50">
                      Age :
                    </p>
                    <p className="w-[60%] text-left z-50">21</p>
                  </div>
                  <div className="flex gap-[50px] max-md:gap-[25px] w-full">
                    <p className="w-[40%] max-520:w-[30%] text-right max-520:text-left z-50">
                      City :
                    </p>
                    <p className="w-[60%] text-left z-50">Hong Kong SAR 🇭🇰</p>
                  </div>
                  <div className="flex max-520:flex-col gap-0 520:gap-[25px] md:gap-[50px] w-full">
                    <p className="w-[40%] text-right max-520:text-left z-50">
                      Education :
                    </p>
                    <p className="w-[60%] max-520:w-[100%] text-left z-50 ">
                      The Hong Kong University of Science and Technology (HKUST)
                    </p>
                  </div>
                </div>
                
              </div>
            </ClickSpark>
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
};

// gap-[50px] max-md:gap-[25px] max-520:gap-[0px] max-520:item-start w-full

export default Hero;
