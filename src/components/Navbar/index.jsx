import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div className="bg-[#FAFAFA] py-12">
        <div className="flex justify-between items-center xl:w-[85%] w-[90%] lg:w-[94%] md:w-[98%] m-auto">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="hidden md:flex">
            <div className="flex xl:gap-[46px] lg:gap-[40px] md:gap-[13px]  items-center">
              <p
                style={{ transition: "all .2s", textTransform: "capitalize" }}
                className="text-[#2a2a2a]  text-[17px] cursor-pointer hover:text-[#FF695F] font-medium"
              >
                Home
              </p>
              <p
                style={{ transition: "all .2s", textTransform: "capitalize" }}
                className="text-[#2a2a2a] text-[17px] cursor-pointer  hover:text-[#FF695F] font-medium"
              >
                Service
              </p>
              <p
                style={{ transition: "all .2s", textTransform: "capitalize" }}
                className="text-[#2a2a2a] text-[17px] cursor-pointer  hover:text-[#FF695F] font-medium"
              >
                About
              </p>
              <p
                style={{ transition: "all .2s", textTransform: "capitalize" }}
                className="text-[#2a2a2a] text-[17px] cursor-pointer  hover:text-[#FF695F] font-medium"
              >
                Portfolio
              </p>
              <p
                style={{ transition: "all .2s", textTransform: "capitalize" }}
                className="text-[#2a2a2a] text-[17px] cursor-pointer  hover:text-[#FF695F] font-medium"
              >
                Videos
              </p>
              <p
                style={{ transition: "all .2s", textTransform: "capitalize" }}
                className="text-[#2a2a2a] text-[17px] cursor-pointer  hover:text-[#FF695F] font-medium"
              >
                Contact Us
              </p>
              <button
                style={{ transition: "all .3s" }}
                className="text-white p-[9px] text-[15px] rounded-[50px] px-[30px] hover:bg-[#03A4ED] bg-[#FF695F]"
              >
                Contact Us Now
              </button>
            </div>
          </div>
          <div className="md:hidden flex ">
            <button
              className="h-[45px]  px-4 rounded-[70px] text-[#7C7C7D] border "
              onClick={() => {
                setOpen(!open);
                setMenu(!menu);
              }}
            >
              ok
            </button>
            <div
              className={`w-[90%] ${
                open ? "h-[335px]" : "h-0"
              }  overflow-hidden mt-[74px]  bg-[#F7F7F7] z-[999] absolute left-[19px] md:left-[40px]  duration-300 transition-all flex flex-col  gap-6 `}
            >
              <hr />
              <p
                style={{ transition: "all .2s", textTransform: "capitalize" }}
                className="text-[#2a2a2a] text-center text-[17px] cursor-pointer hover:text-[#FF695F] font-medium"
              >
                Home
              </p>
              <hr />
              <p
                style={{ transition: "all .2s", textTransform: "capitalize" }}
                className="text-[#2a2a2a] text-center text-[17px] cursor-pointer hover:text-[#FF695F] font-medium"
              >
                Services
              </p>
              <hr />
              <p
                style={{ transition: "all .2s", textTransform: "capitalize" }}
                className="text-[#2a2a2a] text-center text-[17px] cursor-pointer hover:text-[#FF695F] font-medium"
              >
                About
              </p>
              <hr />
              <p
                style={{ transition: "all .2s", textTransform: "capitalize" }}
                className="text-[#2a2a2a] text-center text-[17px] cursor-pointer hover:text-[#FF695F] font-medium"
              >
                Portfolio
              </p>
              <hr />
              <p
                style={{ transition: "all .2s", textTransform: "capitalize" }}
                className="text-[#2a2a2a] text-center text-[17px] cursor-pointer hover:text-[#FF695F] font-medium"
              >
                Videos
              </p>
              <hr />
              <p
                style={{ transition: "all .2s", textTransform: "capitalize" }}
                className="text-[#2a2a2a] text-center text-[17px] cursor-pointer hover:text-[#FF695F] font-medium"
              >
                Contact Us
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
