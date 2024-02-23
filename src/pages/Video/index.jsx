import React, { useEffect, useState } from "react";

import "aos/dist/aos.css";
import AOS from "aos";
// styles
import "./style.css";

const ProjectVideo = () => {

  const [isActive, setIsActive] = useState("first");
  let url;
  let videoTitle;
  let videoDesc;

  useEffect(() => {
    AOS.init();
  }, []);
  if (isActive === "first") {
    url = "https://www.youtube.com/embed/JynGuQx4a1Y?si=CivM0XmwvzjR6cTD";
    videoTitle = "Project One";
    videoDesc = "SEO & Marketing";
  } else if (isActive === "second") {
    url = "https://www.youtube.com/embed/RdJBSFpcO4M?si=0qfpSF3eohG_giJA";
    videoTitle = "Second Project";
    videoDesc = "Advertising & Marketing";
  } else if (isActive === "third") {
    url = "https://www.youtube.com/embed/ZlfAjbQiL78?si=3-vibbfvfzR-YmyG";
    videoTitle = "Project Three";
    videoDesc = "Digital & Marketing";
  } else if (isActive === "fourth") {
    url = "https://www.youtube.com/embed/mx1WseE7-0Y?si=1AzuXKZznxGWDeLK";
    videoTitle = "Fourth Project";
    videoDesc = "SEO & Advertising";
  }

  return (
    <section id="videos"  className="projectVideo pl-[6%] py-[30px] w-full">
      <div className="site-container w-full flex gap-[12px] max-[991px]:flex-col max-[991px]:gap-y-[30px]">
        <div
         data-aos="fade-right"
          className="relative w-[856px] h-[675px] max-[1399px]:w-[736px] max-[1399px]:h-[675px] max-[1199px]:w-[616px] max-[991px]:w-[696px] max-[991px]:h-[500px] max-[767px]:w-[516px] max-[575px]:max-w-full"
        >
          <iframe
            width="100%"
            height="100%"
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="rounded-[23px]"
          />
          <div className="ytvideo-overlay py-[35px] px-[30px] absolute top-0 left-0 rounded-tl-[23px] rounded-br-[23px] flex flex-col justify-center items-center">
            <a href="#" className="text-white text-[20px] mb-[10px] font-bold">
              {videoTitle}
            </a>
            <span className="text-white text-[15px]">{videoDesc}</span>
          </div>
        </div>
        <div className="projects-block w-[440px] px-[12px] flex flex-col gap-[30px] max-[1399px]:w-[380px] max-[1199px]:w-[296px] max-[991px]:w-full max-[767px]:w-[516px] max-[575px]:max-w-full max-[575px]:p-0">
          <div
            onClick={() => setIsActive("first")}
            className="projects-block__item relative cursor-pointer w-full rounded-[23px] text-white h-[146px] max-[1399px]:h-[125px] max-[1199px]:h-[104px] max-[992px]:rounded-[50px] max-[991px]:h-[245px] max-[767px]:h-[181px] max-[575px]:h-[194px] max-[478px]:h-[144px] max-[380px]:h-[126px] max-[330px]:h-[105px]"
          >
            <div className="projects-block-overlay absolute top-0 left-0 rounded-tl-[23px] rounded-br-[23px] flex flex-col justify-center items-center max-[992px]:rounded-tl-[50px] max-[992px]:rounded-br-[50px]">
              <button className="text-white text-[20px] font-bold">
                Project One
              </button>
            </div>
            {isActive === "first" && (
              <div className="projects-block__item-active absolute z-[10] w-full h-full rounded-[23px] text-white active">
                <a
                  href="#"
                  className="text-white text-[20px] mb-[10px] font-bold"
                >
                  Project One
                </a>
                <span className="text-white text-[15px]">SEO & Marketing</span>
              </div>
            )}
          </div>
          <div
            onClick={() => setIsActive("second")}
            className="projects-block__item relative cursor-pointer w-full rounded-[23px] text-white h-[146px] max-[1399px]:h-[125px] max-[1199px]:h-[104px] max-[992px]:rounded-[50px] max-[991px]:h-[245px] max-[767px]:h-[181px] max-[575px]:h-[194px] max-[478px]:h-[144px] max-[380px]:h-[126px] max-[330px]:h-[105px]" 
          >
            <div className="projects-block-overlay absolute top-0 left-0 rounded-tl-[23px] rounded-br-[23px] flex flex-col justify-center items-center max-[992px]:rounded-tl-[50px] max-[992px]:rounded-br-[50px]">
              <button className="text-white text-[20px] font-bold">
                Second Project
              </button>
            </div>
            {isActive === "second" && (
              <div className="projects-block__item-active absolute z-[10] w-full h-full rounded-[23px] text-white active">
                <a
                  href="#"
                  className="text-white text-[20px] mb-[10px] font-bold"
                >
                  Second Project
                </a>
                <span className="text-white text-[15px]">
                  Advertising & Marketing
                </span>
              </div>
            )}
          </div>
          <div
            onClick={() => setIsActive("third")}
            className="projects-block__item relative cursor-pointer w-full rounded-[23px] text-white h-[146px] max-[1399px]:h-[125px] max-[1199px]:h-[104px] max-[992px]:rounded-[50px] max-[991px]:h-[245px] max-[767px]:h-[181px] max-[575px]:h-[194px] max-[478px]:h-[144px] max-[380px]:h-[126px] max-[330px]:h-[105px]"
          >
            <div className="projects-block-overlay absolute top-0 left-0 rounded-tl-[23px] rounded-br-[23px] flex flex-col justify-center items-center max-[992px]:rounded-tl-[50px] max-[992px]:rounded-br-[50px]">
              <button className="text-white text-[20px] font-bold">
                Project Three
              </button>
            </div>
            {isActive === "third" && (
              <div className="projects-block__item-active absolute z-[10] w-full h-full rounded-[23px] text-white active">
                <a
                  href="#"
                  className="text-white text-[20px] mb-[10px] font-bold"
                >
                  Project Three
                </a>
                <span className="text-white text-[15px]">
                  Digital & Marketing
                </span>
              </div>
            )}
          </div>
          <div
            onClick={() => setIsActive("fourth")}
            className="projects-block__item relative cursor-pointer w-full rounded-[23px] text-white h-[146px] max-[1399px]:h-[125px] max-[1199px]:h-[104px] max-[992px]:rounded-[50px] max-[991px]:h-[245px] max-[767px]:h-[181px] max-[575px]:h-[194px] max-[478px]:h-[144px] max-[380px]:h-[126px] max-[330px]:h-[105px]"
          >
            <div className="projects-block-overlay absolute top-0 left-0 rounded-tl-[23px] rounded-br-[23px] flex flex-col justify-center items-center max-[992px]:rounded-tl-[50px] max-[992px]:rounded-br-[50px]">
              <button className="text-white text-[20px] font-bold">
                Fourth Project
              </button>
            </div>
            {isActive === "fourth" && (
              <div className="projects-block__item-active absolute z-[10] w-full h-full rounded-[23px] text-white active">
                <a
                  href="#"
                  className="text-white text-[20px] mb-[10px] font-bold"
                >
                  Fourth Project
                </a>
                <span className="text-white text-[15px]">
                  SEO & Advertising
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVideo;
