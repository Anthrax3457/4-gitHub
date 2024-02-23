import React from "react";
import Image from "../../assets/images/first-plan-bg.png";
import Image2 from "../../assets/images/second-plan-bg.png";
import Image3 from "../../assets/images/third-plan-bg.png";

const BgCarts = () => {
  return (
    <div className="w-[100%] lg:w-[90%] m-auto xl:m-auto mt-28 grid md:grid lg:flex xl:flex justify-center gap-10">
      <div
        className="grid text-center justify-center py-20 cartochka rounded-[50px] w-[300px] md:w-[700px] xl:w-[30%] lg:h-[59vh] xl:h-[70vh] h-[70vh]"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="font-bold text-[20px]"> Starter Plan</p>
        <del className="text-[16px]"> $160/mo</del>
        <p className="text-[36px] font-extrabold text-[#FB6458] -mt-10">$140</p>
        <div className="text-[#B2B2B2] grid">
          <p> 10 Projects</p>
          <p> 100 GB space</p>
          <p> 20 SEO Checkups</p>
          <p> Basic Support</p>
        </div>
        <button className="bg-[#07A0EF] rounded-full h-16 mt-4 text-white">
          Get Started
        </button>
      </div>


      <div
        className="grid text-center justify-center py-20 cartochka rounded-[50px] w-[300px] md:w-[700px] xl:w-[30%] lg:h-[59vh] xl:h-[70vh] h-[70vh]"
        style={{
          backgroundImage: `url(${Image2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="font-bold text-[20px]"> Starter Plan</p>
        <del className="text-[16px]"> $160/mo</del>
        <p className="text-[36px] font-extrabold text-[#FB6458] -mt-10">$200</p>
        <div className="text-[#B2B2B2] grid gap-">
          <p> 10 Projects</p>
          <p> 100 GB space</p>
          <p> 20 SEO Checkups</p>
          <p> Basic Support</p>
        </div>
        <button className="bg-[#07A0EF] rounded-full h-16 mt-4 text-white">
          Get Started
        </button>
      </div>
      <div
        className="grid text-center justify-center py-20 cartochka rounded-[50px] w-[300px] md:w-[700px] xl:w-[30%] lg:h-[59vh] xl:h-[70vh] h-[70vh]"
        style={{
          backgroundImage: `url(${Image3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="font-bold text-[20px]"> Starter Plan</p>
        <del className="text-[16px]"> $160/mo</del>
        <p className="text-[36px] font-extrabold text-[#FB6458] -mt-10">
          $140
        </p>
        <div className="text-[#B2B2B2] grid gap-">
          <p> 10 Projects</p>
          <p> 100 GB space</p>
          <p> 20 SEO Checkups</p>
          <p> Basic Support</p>
        </div>
        <button className="bg-[#07A0EF] rounded-full h-16 mt-4 text-white"> Get Started</button>
      </div>
    </div>
  );
};

export default BgCarts;
