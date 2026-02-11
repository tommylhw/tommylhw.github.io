"use client";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useInView } from "framer-motion";

// components
import ScrollFloat from "../reactbit/TextAnimations/ScrollFloat/ScrollFloat";

// icons
import { BsStars } from "react-icons/bs";
import MediaCard from "./media-card";


interface MediaProps {
  title: string;
  date: string;
  url: string;
  img: string;
}

const media: MediaProps[] = [
    {
      title:
        "LooopHK: 【圈短片】【玩遊戲識別SEN】同學患讀寫障礙、啟發中學生發明家 黃諾謙：AR愛心玩具助評估患病風險、小一始輔導成功率達逾八成",
      date: "May 2019",
      url: "https://www.youtube.com/watch?v=04AgwyM5vgs",
      img: "/images/media/media_05.jpg",
    },
    {
      title: "ezone: 展示學生創科卓越成就 以創科技術協助弱勢社群",
      date: "May 2019",
      url: "https://ezone.hk/article/2342750/%E5%B1%95%E7%A4%BA%E5%AD%B8%E7%94%9F%E5%89%B5%E7%A7%91%E5%8D%93%E8%B6%8A%E6%88%90%E5%B0%B1-%E4%BB%A5%E5%89%B5%E7%A7%91%E6%8A%80%E8%A1%93%E5%8D%94%E5%8A%A9%E5%BC%B1%E5%8B%A2%E7%A4%BE%E7%BE%A4",
      img: "/images/media/media_01.jpg",
    },
    {
      title: "HK01: 【同路互助】同為過來人 學生團隊研創意程式助SEN學童",
      date: "Feb 2019",
      url: "https://www.hk01.com/%E7%A4%BE%E5%8D%80%E5%B0%88%E9%A1%8C/291594/%E5%90%8C%E8%B7%AF%E4%BA%92%E5%8A%A9-%E5%90%8C%E7%82%BA%E9%81%8E%E4%BE%86%E4%BA%BA-%E5%AD%B8%E7%94%9F%E5%9C%98%E9%9A%8A%E7%A0%94%E5%89%B5%E6%84%8F%E7%A8%8B%E5%BC%8F%E5%8A%A9sen%E5%AD%B8%E7%AB%A5?itm_source=universal_search&itm_campaign=universal_search&itm_content=all&itm_medium=web",
      img: "/images/media/media_02.jpg",
    },
    {
      title: "oncc: 中四生創AR識別學前讀寫障礙 全國科創賽奪冠",
      date: "Jul 2019",
      url: "https://hk.on.cc/hk/bkn/cnt/news/20190708/bkn-20190708060001873-0708_00822_001.html",
      img: "/images/media/media_03.jpg",
    },
    {
      title: "am730: AR 愛心玩具識別學前讀寫障礙學童",
      date: "May 2019",
      url: "https://www.am730.com.hk/column/%E7%94%9F%E6%B4%BB/ar-%E6%84%9B%E5%BF%83%E7%8E%A9%E5%85%B7%E8%AD%98%E5%88%A5%E5%AD%B8%E5%89%8D%E8%AE%80%E5%AF%AB%E9%9A%9C%E7%A4%99%E5%AD%B8%E7%AB%A5/256517",
      img: "/images/media/media_04.jpg",
    },
    {
      title: "文匯報: 港生全國科創賽奪逾60獎",
      date: "Aug 2019",
      url: "http://paper.wenweipo.com/2019/08/01/HK1908010037.htm",
      img: "/images/media/media_06.jpg",
    },
    {
      title: "SingTao: 全國科創大賽 港生奪逾60獎",
      date: "Aug 2019",
      url: "https://std.stheadline.com/daily/article/2041792/%E6%97%A5%E5%A0%B1-%E6%95%99%E8%82%B2-%E5%85%A8%E5%9C%8B%E7%A7%91%E5%89%B5%E5%A4%A7%E8%B3%BD-%E6%B8%AF%E7%94%9F%E5%A5%AA%E9%80%BE60%E7%8D%8E",
      img: "/images/media/media_07.jpg",
    },
    {
      title: "Bastille Post: 港代表揚威全國科創賽 勇奪逾60獎",
      date: "Aug 2019",
      url: "https://www.bastillepost.com/hongkong/article/4830970-%EF%BB%BF%E6%B8%AF%E4%BB%A3%E8%A1%A8%E6%8F%9A%E5%A8%81%E5%85%A8%E5%9C%8B%E7%A7%91%E5%89%B5%E8%B3%BD%E3%80%80%E5%8B%87%E5%A5%AA%E9%80%BE60%E7%8D%8E",
      img: "/images/media/media_08.jpg",
    },
    {
      title: "TVB: 創科導航 ",
      date: "Mar 2020",
      url: "https://www.youtube.com/watch?v=u9d_nJ56B9w",
      img: "/images/media/media_09.jpg",
    },
    {
      title:
        "HKGOV: “Enriched IT Programme” Partner School students won Gold and Bronze Awards in the Hong Kong ICT Awards 2019 Student Innovation Award (Secondary School)",
      date: "Mar 2019",
      url: "https://www.eitp.gov.hk/en/showcase/2018/eitp-partner-school-students-won-the-certificate-of-merit-in-the-hong-kong-ict-awards-2019-student-innovation-award-caswcmc.php",
      img: "/images/media/media_10.jpg",
    },
    {
      title:
        "TOPICK: 【科研發明】中六生研AR遊戲識別讀寫障礙學童奪冠 開發成本僅約20港元",
      date: "Sep 2020",
      url: "https://topick.hket.com/article/2743251/%E3%80%90%E7%A7%91%E7%A0%94%E7%99%BC%E6%98%8E%E3%80%91%E4%B8%AD%E5%85%AD%E7%94%9F%E7%A0%94AR%E9%81%8A%E6%88%B2%E8%AD%98%E5%88%A5%E8%AE%80%E5%AF%AB%E9%9A%9C%E7%A4%99%E5%AD%B8%E7%AB%A5%E5%A5%AA%E5%86%A0%E3%80%80%E9%96%8B%E7%99%BC%E6%88%90%E6%9C%AC%E5%83%85%E7%B4%8420%E6%B8%AF%E5%85%83",
      img: "/images/media/media_11.jpg",
    },
    {
      title:
        "SCMP: Hong Kong secondary students aim to help people identify learning difficulties",
      date: "Sep 2020",
      url: "https://www.scmp.com/yp/discover/lifestyle/features/article/3102498/hong-kong-secondary-students-aim-help-people",
      img: "/images/media/media_12.jpg",
    },
    {
      title: "am730: 蛤殼廚餘變身環保塑料 港生發明獲國際比賽金獎",
      date: "Jun 2021",
      url: "https://www.am730.com.hk/%E6%9C%AC%E5%9C%B0/%E8%9B%A4%E6%AE%BC%E5%BB%9A%E9%A4%98%E8%AE%8A%E8%BA%AB%E7%92%B0%E4%BF%9D%E5%A1%91%E6%96%99-%E6%B8%AF%E7%94%9F%E7%99%BC%E6%98%8E%E7%8D%B2%E5%9C%8B%E9%9A%9B%E6%AF%94%E8%B3%BD%E9%87%91%E7%8D%8E/172920",
      img: "/images/media/media_13.jpg",
    },
    {
      title: "oncc: 疫情肆虐創科嘉年華改網上舉行 中大研發癱瘓病人行走裝置",
      date: "Nov 2020",
      url: "https://hk.on.cc/hk/bkn/cnt/news/20201120/bkn-20201120155013304-1120_00822_001.html",
      img: "/images/media/media_14.jpg",
    },
    {
      title: "Headline: 創新科技嘉年華下月舉行 將展出多項科研成果",
      date: "Nov 2020",
      url: "https://www.stheadline.com/article/2073412/%E5%89%B5%E6%96%B0%E7%A7%91%E6%8A%80%E5%98%89%E5%B9%B4%E8%8F%AF%E4%B8%8B%E6%9C%88%E8%88%89%E8%A1%8C-%E5%B0%87%E5%B1%95%E5%87%BA%E5%A4%9A%E9%A0%85%E7%A7%91%E7%A0%94%E6%88%90%E6%9E%9C",
      img: "/images/media/media_15.jpg",
    },
    {
      title:
        "SKY POST: 青年創科 港中學生出征3大國際科學賽 創新科研勇奪多項殊榮",
      date: "Dec 2020",
      url: "https://skypost.hk/article/2838886/%E9%9D%92%E5%B9%B4%E5%89%B5%E7%A7%91-%E6%B8%AF%E4%B8%AD%E5%AD%B8%E7%94%9F%E5%87%BA%E5%BE%813%E5%A4%A7%E5%9C%8B%E9%9A%9B%E7%A7%91%E5%AD%B8%E8%B3%BD-%E5%89%B5%E6%96%B0%E7%A7%91%E7%A0%94%E5%8B%87%E5%A5%AA%E5%A4%9A%E9%A0%85%E6%AE%8A%E6%A6%AE",
      img: "/images/media/media_16.jpg",
    },
    {
      title: "Upower: 全國青少年科學及科技比賽 港隊三項賽事奪逾60獎項",
      date: "Sep 2019",
      url: "https://www.upower.com.hk/article/472069-%E5%85%A8%E5%9C%8B%E9%9D%92%E5%B0%91%E5%B9%B4%E7%A7%91%E5%AD%B8%E5%8F%8A%E7%A7%91%E6%8A%80%E6%AF%94%E8%B3%BD-%E6%B8%AF%E9%9A%8A%E4%B8%89%E9%A0%85%E8%B3%BD%E4%BA%8B%E5%A5%AA%E9%80%BE60%E7%8D%8E",
      img: "/images/media/media_17.jpg",
    },
    {
      title: "eSCHOOL STEAM: 科技校園雜誌",
      date: "Oct 2020",
      url: "https://www.caswcmc.edu.hk/dataNCMS/CourseMedia/2021_2226203566/20201012_2658551721.pdf",
      img: "/images/media/media_18.jpg",
    },
  ];

const Media = () => {
  const [visibleCount, setVisibleCount] = useState(isMobile ? 3 : 9);
  const [columnCount, setColumnCount] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  // const sentinelRef = useRef<HTMLDivElement>(null);

  // Update column count on mount and resize
  useEffect(() => {
    const updateColumns = () => {
      const w = window.innerWidth;
      if (w >= 875)      setColumnCount(3);
      else if (w >= 520) setColumnCount(2);
      else               setColumnCount(1);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const loadMore = useCallback(() => {
    setVisibleCount(prev => Math.min(prev + 6, media.length));
  }, []);

  const collapseMedia = useCallback(() => {
    setVisibleCount(isMobile ? 3 : 9);
    // if (sentinelRef.current) {
    //   sentinelRef.current.scrollIntoView({ behavior: "smooth" });
    // }
  }, []);

  // useInView – returns true when the section is in viewport
  const isInView = useInView(sectionRef, {
    margin: "0px 0px -100px 0px",      // trigger a bit before fully out of view
  });

  // Reset to minimum when the section leaves the viewport
  useEffect(() => {
    // Only collapse if currently expanded AND now out of view
    if (!isInView && visibleCount > (isMobile ? 3 : 9)) {
      collapseMedia();
      console.log("Section left viewport, collapsing media");
    }
  }, [isInView, visibleCount, collapseMedia, isMobile]);

  // Reorder items only when visibleCount or columnCount changes
  const reorderedItems = useMemo(() => {
    const items = media.slice(0, visibleCount);
    const result = [];
    for (let col = 0; col < columnCount; col++) {
      for (let i = col; i < items.length; i += columnCount) {
        if (items[i]) result.push(items[i]);
      }
    }
    return result;
  }, [visibleCount, columnCount]);

  useEffect(() => {
    console.log("visibleCount:", visibleCount);
  }, [visibleCount]);

  // Auto-load more when user scrolls near the bottom
  // useEffect(() => {
  //   const sentinel = sentinelRef.current;
  //   if (!sentinel) return;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting && visibleCount < media.length) {
  //         loadMore();
  //       }
  //     },
  //     { threshold: 0.1, rootMargin: "400px" } // load a bit early
  //   );

  //   observer.observe(sentinel);
  //   return () => observer.disconnect();
  // }, [visibleCount, loadMore, media.length]);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 max-520:gap-0 my-10 " ref={sectionRef}>
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

      <div className="w-full flex flex-col justify-start px-0 520:px-10">
        <div className="w-full flex gap-2 items-center ">
          <BsStars className="text-[14px] text-highlight" />
          <p className="text-highlight font-bold text-[14px] font-roc-grotesk">
            AWARD & RECOGNITION
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
            Media
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
              A collection of all my press coverages, media interviews and
              related news.
            </p>
          ) : (
            <ScrollFloat
              animationDuration={0.3}
              scrollStart="center bottom+=20%"
              scrollEnd="bottom bottom-=50%"
              stagger={0.03}
              textClassName="text-gray-600 w-[40%] max-875:w-[70%] max-520:w-[100%] text-[13px]"
            >
              A collection of all my press coverages, media interviews and
              related news.
            </ScrollFloat>
          )}

          {/* <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            gsapStart="top bottom-=20%"
            gsapEnd="bottom bottom"
            textClassName="text-gray-600 w-[40%] max-875:w-[70%] max-520:w-[100%] text-[13px]"
          >
            A collection of all my press coverages, media interviews and related news.
          </ScrollReveal> */}
        </div>
      </div>

      <div className="w-fit p-2 520:[column-count:2] 875:[column-count:3]">
        {reorderedItems.map((item, index) => (
          <MediaCard
            key={index}
            title={item.title}
            date={item.date}
            url={item.url}
            img={item.img}
          />
        ))}
      </div>
      <button
        onClick={visibleCount >= media.length ? collapseMedia : loadMore}
        className="mt-2 px-[28px] py-[10px] cursor-pointer bg-neutral-900 hover:bg-black text-white text-sm font-medium rounded-full transition-all"
      >
        {visibleCount >= media.length ? "Collapse" : "Load More"}
      </button>
      {/* Invisible sentinel that triggers loadMore */}
      {/* {visibleCount < media.length && (
        <div ref={sentinelRef} className="h-20 w-full border-2" />
      )} */}
    </div>
  );
};

export default Media;
