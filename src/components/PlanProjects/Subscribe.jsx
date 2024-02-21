import React from "react";
import ImageRoccet from "../../assets/images/subscribe-dec.png";
import Image from "../../assets/images/subscribe-bg.png";

const Subscribe = () => {
  return (
    <div
      className="w-[90%] xl:w-[86%] m-auto mt-20 h-[50vh] rounded-[20px] md:h-[40vh] xl:h-[40vh]"
      style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="grid justify-center items-center text-white h-[20vh] xl:h-[20vh]"
        style={{
          backgroundImage: `url(${ImageRoccet})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "contain",
        }}
      >
        <p className="text-[32px] capitalize font-bold text-center pt-32">
          know your website SEO score by Email
        </p>
        <div className="bg-[#F5FEF9] rounded-[50px] py-2 my-10 px-4 items-center flex xl:w-[1100px]">
          <input type="text" placeholder=" Your Website URL" className="w-[40%] rounded-l-[50px] py-10 bordr-r-[1px] border-r-black"/>
          <input type="text" placeholder=" Your Email" className="w-[40%] py-10"/>
          <button className="bg-[#07A0EF] rounded-full h-20 -ml-2 w-[20%] text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
