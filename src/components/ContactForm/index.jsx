import { MdEmail } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

import Imgs from "../../assets/images/contact-form-bg.png";

function ContactForm() {
  return (
    <div>
      <div className="TwoBG  w-full mt-[900px] h-[100vh]">
        <div className="Therr absolute w-full h-[100vh]">
          <div className="w-[85%] lg:flex block  m-auto">
            <div className="lg:w-[55%] w-full ">
              <div>
                <p className="text-[30px] mt-[-40px] w-[90%] text-center md:text-left font-bold">
                  <span className="text-[#2A2A2A]">Feel Free To</span>
                  <span className="text-[#03A4ED] ml-2 ">Contact </span>{" "}
                  <span className="text-[#2A2A2A]">Us Via The</span>
                  <span className="text-[#FB675E] ml-2">HTML Form</span>{" "}
                </p>
              </div>
              <div className="h-full">
                <iframe
                  className="w-[100%] lg:rounded-l-[40px] rounded-[30px] lg:rounded-[0px] lg:h-[70%] h-[400px]  lg:mt-[22px] xl:mt-[20px]"
                  src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
            <div className=" xl:w-[50%] shad h-[455px] p-[68px] xl:px-[6%] lg:w-[50%] w-full mt-20 lg:mt-0 xl:mt-0 ">
              <div className="flex flex-col gap-11">
                <input
                  className="outline-0 p-4 border-l-0 border-[0.5px] border-t-0 border-[#38B7F1] border-r-0 bg-transparent w-full"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="outline-0 p-4 border-l-0 border-[0.5px] border-t-0 border-r-0 border-[#38B7F1] bg-transparent w-full"
                  type="text"
                  placeholder="Surname"
                />
                <input
                  className="outline-0 p-4 border-l-0 border-[0.5px] border-t-0 border-r-0 border-[#38B7F1] bg-transparent w-full"
                  type="text"
                  placeholder="Your Email"
                />
                <input
                  className="outline-0 p-4 border-l-0 border-[0.5px] border-t-0 border-r-0 border-[#38B7F1] bg-transparent w-full"
                  type="text"
                  placeholder="Your Web Site URL"
                />
                <button
                  style={{ transition: "all .3s" }}
                  className="text-white p-[12px] text-[15px] xl:w-[36%] lg:w-[80%] rounded-[50px] px-[10px] hover:bg-[#03A4ED] bg-[#FF695F]"
                >
                  Submit Reque
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex block w-[80%] lg:mt-0 xl:mt-0  xl:w-[82%] lg:w-[80%] md:w-[80%] md:mt-16  gap-[80px] m-auto">
            <div className="flex items-center gap-4 mt-7 lg:mt-0 xl:mt-0 md:mt-0">
              <button
                style={{ transition: "all .3s" }}
                className="w-[45px]  h-[45px] hover:bg-[#03A4ED] text-white bg-[#FF695F] rounded-full border flex justify-center items-center"
              >
                <FaPhoneAlt />
              </button>
              <div>
                <p className="text-[#ff695f] text-[15px]"> 010-020-0340</p>
                <p className="text-[#ff695f] text-[15px]"> 010-020-0340</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-7 lg:mt-0 xl:mt-0 md:mt-0">
              <button
                style={{ transition: "all .3s" }}
                className="w-[45px]  h-[45px] hover:bg-[#03A4ED] text-white bg-[#FF695F] rounded-full border flex justify-center items-center"
              >
                <MdEmail size={"25px"} />
              </button>
              <div>
                <p className="text-[#ff695f] text-[15px]"> 010-020-0340</p>
                <p className="text-[#ff695f] text-[15px]"> 010-020-0340</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
