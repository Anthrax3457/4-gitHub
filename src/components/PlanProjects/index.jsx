import React from "react";
import BgCarts from "./BgCarts";
import ImageLeft from "../../assets/images/tables-left-dec.png";
import Image from "../../assets/images/tables-right-dec.png";
import Subscribe from "./Subscribe";

const Planprojects = () => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url(${ImageLeft})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          height: "100vh",
          backgroundSize: "contain",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            height: "100vh",
            backgroundSize: "contain",
          }}
        >
          <div className="grid justify-center text-center">
            <p className="text-[20px] font-bold">
              Select A Suitable Plan For <br /> Your Next Projects
            </p>
            <p className="text-[22px] uppercase font-bold text-[#fec6c0] pb-10 pt-6">
              our plans
            </p>
          </div>
          {/* <BgCarts />
          <Subscribe />  */}
        </div>
      </div>
    </div>
  );
};

export default Planprojects;
