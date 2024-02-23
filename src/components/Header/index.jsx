import { FaPhoneAlt } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

function Header() {
  return (
    <div id="home">
      <div className="lg:flex block mt-11">
        <div className="HedBG lg:w-[50%]  md:w-[100%] w-[100%] pt-52 lg:mt-10 xl:mt-0 lg:pl-[111px] pl-[20px]">
          <div>
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="headerCarousel"
            >
              <SwiperSlide>
                <div>
                  <p className="text-[18px] text-[#ff695f]">Online Marketing</p>
                </div>
                <div>
                  <p className="text-[50px] font-bold">
                    <span className="text-[#2A2A2A]"></span>
                    <span className="text-[#03A4ED] ml-2 ">Get the</span>{" "}
                    <span className="text-[#FB675E]">best ideas</span>{" "}
                    <span className="text-[#2A2A2A]">your website</span>
                  </p>
                </div>
                <div>
                  <p className="text-[15px] text-[#2A2A2A]">
                    {" "}
                    You are NOT allowed to redistribute this template ZIP file
                    on any Free CSS collection websites. Contact us for more
                    info. Thank you.
                  </p>
                </div>
                <div className="mt-10 md:flex block  gap-9">
                  <div>
                    <button
                      style={{ transition: "all .3s" }}
                      className="text-white p-[11px] text-[15px] rounded-[50px] px-[30px] bg-[#03A4ED] hover:bg-[#FF695F]"
                    >
                      Our Services
                    </button>
                  </div>
                  <div className="flex items-center gap-4 mt-7 lg:mt-0 xl:mt-0 md:mt-0">
                    <button
                      style={{ transition: "all .3s" }}
                      className="w-[45px]  h-[45px] hover:bg-[#03A4ED] text-white bg-[#FF695F] rounded-full border flex justify-center items-center"
                    >
                      <FaPhoneAlt />
                    </button>
                    <p className="text-[#ff695f] text-[15px]"> 010-020-0340</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <p className="text-[18px] text-[#ff695f]">
                    Welcome to Onix Digital
                  </p>
                </div>
                <div>
                  <p className="text-[50px] font-bold">
                    <span className="text-[#2A2A2A]">Build </span>
                    <span className="text-[#03A4ED] ml-2 ">
                      your website
                    </span>{" "}
                    <span className="text-[#2A2A2A]"> the best in </span>{" "}
                    <span className="text-[#FB675E]" >SEO</span> <span className="text-[#333]">?</span>
                  </p>
                </div>
                <div>
                  <p className="text-[15px] text-[#2A2A2A]">
                    {" "}
                    You are NOT allowed to redistribute this template ZIP file
                    on any Free CSS collection websites. Contact us for more
                    info. Thank you.
                  </p>
                </div>
                <div className="mt-10 md:flex block  gap-9">
                  <div>
                    <button
                      style={{ transition: "all .3s" }}
                      className="text-white p-[11px] text-[15px] rounded-[50px] px-[30px] bg-[#03A4ED] hover:bg-[#FF695F]"
                    >
                      Our Services
                    </button>
                  </div>
                  <div className="flex items-center gap-4 mt-7 lg:mt-0 xl:mt-0 md:mt-0">
                    <button
                      style={{ transition: "all .3s" }}
                      className="w-[45px]  h-[45px] hover:bg-[#03A4ED] text-white bg-[#FF695F] rounded-full border flex justify-center items-center"
                    >
                      <FaPhoneAlt />
                    </button>
                    <p className="text-[#ff695f] text-[15px]"> 010-020-0340</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <p className="text-[18px] text-[#ff695f]">Video Tutorials</p>
                </div>
                <div>
                  <p className="text-[50px] font-bold">
                    <span className="text-[#2A2A2A]">Get the</span>
                    <span className="text-[#03A4ED] ml-2 ">best ideas</span>
                    <span className="text-[#FB675E]">your website</span>{" "}
                    <span className="text-[#2A2A2A]">for</span>
                  </p>
                </div>
                <div>
                  <p className="text-[15px] text-[#2A2A2A]">
                    You are NOT allowed to redistribute this template ZIP file
                    on any Free CSS collection websites. Contact us for more
                    info. Thank you.
                  </p>
                </div>
                <div className="mt-10 md:flex block  gap-9">
                  <div>
                    <button
                      style={{ transition: "all .3s" }}
                      className="text-white p-[11px] text-[15px] rounded-[50px] px-[30px] bg-[#03A4ED] hover:bg-[#FF695F]"
                    >
                      Our Services
                    </button>
                  </div>
                  <div className="flex items-center gap-4 mt-7 lg:mt-0 xl:mt-0 md:mt-0">
                    <button
                      style={{ transition: "all .3s" }}
                      className="w-[45px]  h-[45px] hover:bg-[#03A4ED] text-white bg-[#FF695F] rounded-full border flex justify-center items-center"
                    >
                      <FaPhoneAlt />
                    </button>
                    <p className="text-[#ff695f] text-[15px]"> 010-020-0340</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="HedBG2 mt-10 md:mt-0 lg:mt-0 xl:mt-2 lg:w-[60%] xl:w-[54%] md:hidden hidden lg:flex"></div>
      </div>
    </div>
  );
}

export default Header;
