import React from "react";
import Rasm from "../../assets/images/about-left-image.png";
import Rasm2 from "../../assets/images/service-icon-01.png";
import Rasm3 from "../../assets/images/service-icon-02.png";
import Rasm4 from "../../assets/images/service-icon-03.png";
function Manage() {
  return (
    <div className="flex justify-center my-20 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:gap-24 xl:gap-10 items-center lg:ml-[4%]">
        <div>
          <img src={Rasm} alt="" />
        </div>
        <div>
          <div className="lg:p-0 p-5">
            <h2 className="text-[#2a2a2a] lg:font-extrabold md:justify-items-center font-bold text-[30px] block justify-items-center lg:p-0 lg:w-[85%] w-[95%]">
              Grow your website with our
              <sapn className="text-[#03a4ed] p-3">SEO Tools</sapn> &amp;
              <span className="text-[#ff695f] p-2">Project</span> Management
            </h2>
            <br />
            <br />
            <p
              style={{ lineHeight: "1.9" }}
              className="text-[#2a2a2a] lg:w-[80%] w-[92%]"
            >
              You can browse free HTML templates on Too CSS website. Visit the
              website and explore latest website templates for your projects.
            </p>
            <br />
            <div className="grid lg:grid-cols-3 mx-24 lg:-ml-[1%] grid-cols-1 gap-2 justify-items-center lg:justify-items-start ">
              <div className="lg:text-start text-center grid lg:justify-items-start justify-items-center">
                <img src={Rasm2} alt="" />
                <p className="text-[48px] font-extrabold">320</p>
                <p
                  style={{ lineHeight: "2" }}
                  className="text-[15px] text-[#ff695f] border-b w-[80%] pb-8 mb-8"
                >
                  SEO Projects
                </p>
                <p style={{ lineHeight: "1.8" }} className="w-[80%] lg:w-[90%]">
                  Lorem ipsum dolor sitti amet, consectetur.
                </p>
              </div>
              <div className="lg:text-start text-center grid lg:justify-items-start justify-items-center">
                <img src={Rasm3} alt="" />
                <p className="text-[48px] font-extrabold">640</p>
                <p
                  style={{ lineHeight: "2" }}
                  className="text-[15px] text-[#ff695f] border-b w-[80%] pb-8 mb-8"
                >
                  Websites
                </p>
                <p style={{ lineHeight: "1.8" }} className="w-[80%] lg:w-[90%]">
                  Lorem ipsum dolor sitti amet, consectetur.
                </p>
              </div>
              <div className="lg:text-start text-center grid lg:justify-items-start justify-items-center">
                <img src={Rasm4} alt="" />
                <p className="text-[48px] font-extrabold">120</p>
                <p
                  style={{ lineHeight: "2" }}
                  className="text-[15px] text-[#ff695f] border-b w-[80%] lg:w-[85%] pb-8 mb-8"
                >
                  Satisfied Clients
                </p>
                <p style={{ lineHeight: "1.8" }} className="w-[80%] lg:w-[90%]">
                  Lorem ipsum dolor sitti amet, consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manage;
