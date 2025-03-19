"use client";
import React from "react";
import { isMobile } from "react-device-detect";

// components
import { Timeline } from "@/components/ui/timeline";
import ScrollFloat from "../reactbit/TextAnimations/ScrollFloat/ScrollFloat";
import AwardCard from "./award-card";

// icons
import { BsStars } from "react-icons/bs";


const Awards = () => {
  const awards = [
    {
      title: "2021",
      content: (
        <div className="flex flex-col flex-wrap justify-center items-center gap-4 w-full">
          <AwardCard
            image="/images/awards/gystb.png"
            title="Global Youth Science and Technology Bowl 2021"
            subTitle="Gold Award in Physics and Engineering"
          />
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div className="flex flex-col flex-wrap justify-center items-center gap-4 w-full">
          <AwardCard
            image="/images/awards/KSEF.png"
            title="Korea Science and Engineering Fair 2020"
            subTitle="Gold Award in Computer Science"
          />
          <AwardCard
            image="/images/awards/STEMExcellence.jpg"
            title="The Greater Bay Area STEM Excellence Award 2020 (Hong Kong)"
            subTitle="Gold Award in Senior Section"
          />
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div className="flex flex-col flex-wrap justify-center items-center gap-4 w-full">
          <AwardCard
            image="/images/awards/HKICTA.jpg"
            title="Hong Kong ICT Awards 2019"
            subTitle="Student Innovation Award Bronze Award"
          />
          <AwardCard
            image="/images/awards/CASTIC_1.jpg"
            title="The 34th China Adolescents Youth Science and Technology Innovation Contest"
            subTitle="First Place Award in Computer Science and Information Technology"
          />
          <AwardCard
            image="/images/awards/CASTIC_2.jpg"
            title="The 34th China Adolescents Youth Science and Technology Innovation Contest"
            subTitle="Macao ICBC Technology Innovation Award"
          />
          <AwardCard
            image="/images/awards/CASTIC_3.jpg"
            title="The 34th China Adolescents Youth Science and Technology Innovation Contest"
            subTitle="CTM Digital Macao Award"
          />
          <AwardCard
            image="/images/awards/TheGreaterBay2019.jpg"
            title="2019 Qianhai Guangdong-Hong Kong-Macao Youth Innovation and Entrepreneurship Competition"
            subTitle="Merit Award in Senior Students Group"
          />
          <AwardCard
            image="/images/awards/21st_1.jpg"
            title="The 21st Hong Kong Youth Science and Technology Invention Competition"
            subTitle="First Place in Computer Science and Information Technology (Senior section)"
          />
          <AwardCard
            image="/images/awards/21st_2.jpg"
            title="The 21st Hong Kong Youth Science and Technology Invention Competition"
            subTitle="Bull.B Tech Award for Computer Science and Information Technology"
          />
          <AwardCard
            image="/images/awards/21st_3.jpg"
            title="The 21st Hong Kong Youth Science and Technology Invention Competition"
            subTitle="Regional Affiliate Award for Intel International Science and Engineering Grand Prix Intel Special Computer Science Special Award"
          />
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div className="flex flex-col flex-wrap justify-center items-center gap-4 w-full">
          <AwardCard
            image="/images/awards/Samsung.jpg"
            title="Samsung Solve for Tomorrow 2018"
            subTitle="1st Runner Up"
          />
          <AwardCard
            image="/images/awards/SmartCity.jpg"
            title="Smart City Project Programme 2018/19"
            subTitle="Outstanding Smart City Project Award"
          />
          <AwardCard
            image="/images/awards/Engineer.png"
            title="The Second Future Engineer Grand Challenge"
            subTitle="Merit Award in Senior Section"
          />
          <AwardCard
            image="/images/awards/LST.jpg"
            title="Lok Sin Tong 1st Care for Disadvantaged Group - Innovation and Technology Design Competition"
            subTitle="Special Recognition Award"
          />
          <AwardCard
            image="/images/awards/LST.jpg"
            title="Lok Sin Tong 1st Care for Disadvantaged Group - Innovation and Technology Design Competition"
            subTitle="Excellent Functional and Interface Design Award"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 my-10 ">
      {/* <div className="w-full flex flex-row justify-center items-center gap-4">
        <FaAward className="text-[42px] text-[#68EAFD]" />
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=50%"
          stagger={0.03}
          textClassName="font-bold text-[42px] text-[#68EAFD] px-2"
        >
          Awards
        </ScrollFloat>
      </div>
      <div>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName="text-center text-[28px] font-semibold"
        >
          Since 2018, I have actively participated in a variety of STEM
          competitions at the local and international levels.
        </ScrollReveal>
      </div> */}

      <div className="w-full flex flex-col justify-start 520:px-10">
        <div className="w-full flex gap-2 items-center">
          <BsStars className="text-[14px] text-highlight" />
          <p className="text-highlight font-bold text-[14px] font-roc-grotesk">
            AWARD & RECOGNITION
          </p>
          {/* <ShinyText text="AWARD & RECOGNITION" disabled={true} speed={3} className='text-highlight font-bold text-[14px] font-roc-grotesk' /> */}
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
            Awards
          </ScrollFloat>
        </div>

        {/* <p className="text-gray-600 w-[40%] mt-1 text-[13px]">Since 2018, I have actively participated in a variety of STEM
        competitions at the local and international levels.</p> */}
        {/* <ShinyText
          text="Since 2018, I have actively participated in a variety of STEM competitions at the local and international levels."
          className="text-gray-600 w-[40%] mt-1 text-[13px]"
          speed={3}
          disabled={false}
        /> */}
        <div className="mt-[-30px]">
          {isMobile ? (
            <p className="text-gray-600 w-[40%] max-875:w-[70%] max-520:w-[100%] text-[13px]">
              Since 2018, I have actively participated in a variety of STEM
              competitions at the local and international
            </p>
          ) : (
            <ScrollFloat
              animationDuration={0.3}
              scrollStart="center bottom+=20%"
              scrollEnd="bottom bottom-=50%"
              stagger={0.03}
              textClassName="text-gray-600 w-[40%] max-875:w-[70%] max-520:w-[100%] text-[13px]"
            >
              Since 2018, I have actively participated in a variety of STEM
              competitions at the local and international
            </ScrollFloat>
          )}
        </div>
      </div>

      <div className="w-full z-[-1px]">
        <Timeline data={awards} />
      </div>
    </div>
  );
};

export default Awards;
