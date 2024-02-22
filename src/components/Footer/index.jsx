import { TbBrandTelegram } from "react-icons/tb";
import { ImInstagram } from "react-icons/im";
import { FaBehance } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import React from "react";
import Rasm from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <div className="w-full h-[334px] border">
      <div className="grid grid-cols-1 text-start justify-items-start gap-4 pl-5 lg:grid-cols-4 lg:justify-items-center">
        <div>
          <div className="text-start">
            <div>
              <img src={Rasm} alt="" />
            </div>
            <br />
            <div>
              <p className="text-[#afafaf] text-[16px]">info@company.com</p>
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
              <p>SEO Development</p>
              <p>Business Growth</p>
              <p>Social Media Management</p>
              <p>Website Otimization</p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-start">
            <div>
              <p className="text-[18px] font-bold">Community</p>
            </div>
            <br />
            <div className="text-[15px] text-[#afafaf] grid gap-5">
              <p>Digital Marketing</p>
              <p>Business Ideas</p>
              <p>Website Checkup</p>
              <p>Page Speed Test</p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-start">
            <div>
              <p className="text-[18px] font-bold">Subcribe Newsletters</p>
            </div>
            <br />
            <div className="text-[15px] text-[#afafaf] grid gap-5 lg:w-[90%] xl:w-[80%] md:w-full w-[95%]">
              <p className="text-[15px]">
                Get our latest news and ideas to your inbox
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full p-4 bg-blue-500 rounded-full placeholder:text-white pl-7"
                />
                <button className="absolute right-[14%] xl:right-[7.5%] lg:right-[4%] pt-4">
                  <TbBrandTelegram size={20} color="white" />
                </button>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-24 text-center">
        <p className="text-[#afafaf]">
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
