import { TbBrandTelegram } from "react-icons/tb";
import { ImInstagram } from "react-icons/im";
import { FaBehance } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import React from "react";
import Rasm from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-[334px]">
      <div
        style={{ marginInline: "5%" }}
        className="grid grid-cols-1 text-start justify-items-start gap-4 lg:grid-cols-4 lg:justify-items-center"
      >
        <div>
          <div className="text-start">
            <div>
              <img src={Rasm} alt="" />
            </div>
            <br />
            <div>
              <p className="text-[#afafaf] text-[16px] cursor-pointer">
                info@company.com
              </p>
              <br />
            </div>
            <div className="flex gap-3">
              <div className="w-[32px] h-[32px] bg-[#03a4eD] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#ff695f]">
                <CgFacebook color="white" />
              </div>
              <div className="w-[32px] h-[32px] bg-[#03a4eD] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#ff695f]">
                <AiOutlineTwitter color="white" />
              </div>
              <div className="w-[32px] h-[32px] bg-[#03a4eD] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#ff695f]">
                <FaBehance color="white" />
              </div>
              <div className="w-[32px] h-[32px] bg-[#03a4eD] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#ff695f]">
                <ImInstagram color="white" size={15} />
              </div>
            </div>
            <br />
          </div>
        </div>
        <div>
          <div className="text-start">
            <div>
              <p className="text-[18px] font-bold">Services</p>
            </div>
            <br />
            <div className="text-[15px] text-[#afafaf] grid gap-5">
              <p className="hover:text-[#ff695f] cursor-pointer">
                SEO Development
              </p>
              <p className="hover:text-[#ff695f] cursor-pointer">
                Business Growth
              </p>
              <p className="hover:text-[#ff695f] cursor-pointer">
                Social Media Management
              </p>
              <p className="hover:text-[#ff695f] cursor-pointer">
                Website Otimization
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-start">
            <div>
              <p className="text-[18px] font-bold">Community</p>
            </div>
            <br />
            <div className="text-[15px] text-[#afafaf] flex flex-col gap-5">
              <p className="hover:text-[#ff695f] cursor-pointer">
                Digital Marketing
              </p>
              <p className="hover:text-[#ff695f] cursor-pointer">
                Business Ideas
              </p>
              <p className="hover:text-[#ff695f] cursor-pointer">
                Website Checkup
              </p>
              <p className="hover:text-[#ff695f] cursor-pointer">
                Page Speed Test
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="text-start ">
            <div>
              <p className="text-[18px] font-bold">Subcribe Newsletters</p>
            </div>
            <br />
            <div className="text-[15px] text-[#afafaf] grid gap-5 lg:w-[90%] xl:w-[88%] md:w-full w-[95%]">
              <p className="text-[15px]">
                Get our latest news and ideas to your inbox
              </p>
              <div className="w-full flex items-center justify-center bg-[#03A4ED] rounded-full px-[5%] h-[45px]">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="lg:w-full md:w-[95%] xl:w-full outline-none sm:w-full w-full bg-[#03A4ED]   placeholder:text-white pl-7"
                  className="w-full text-white outline-none p-4 bg-blue-500 rounded-full placeholder:text-white pl-7"
                />
                <button className="absolute right-[14%] xl:right-[9.5%] lg:right-[4%] ">
                  <TbBrandTelegram size={20} color="white" />
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center border-t justify-center my-16 pt-[2%] text-center">
        <p className="text-[#afafaf] text-[15px] pb-[5%] lg:pb-[0%]">
          Copyright © 2021 Onix Digital Co., Ltd. All Rights Reserved.
          <br />
          Designed by
          <a
            rel="nofollow"
            href="https://templatemo.com"
            title="free CSS templates"
            className="text-[#ff695f] p-2"
          >
            TemplateMo
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
