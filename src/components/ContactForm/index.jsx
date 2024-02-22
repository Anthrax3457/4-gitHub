import React from "react";
// import Imgs from "../../assets/images/contact-form-bg.png";

function ContactForm() {
  return (
    <div>
      <div className="TwoBG w-full mt-[300px] h-[100vh]">
        <div className="Therr   h-[100vh]">
          <div className="w-[85%] lg:flex block  m-auto">
            <div className="lg:w-[50%] w-full ">
              <div>
                <p className="text-[30px] w-[90%] text-center md:text-left font-bold">
                  <span className="text-[#2A2A2A]">Feel Free To</span>
                  <span className="text-[#03A4ED] ml-2 ">Contact </span>{" "}
                  <span className="text-[#2A2A2A]">Us Via The</span>
                  <span className="text-[#FB675E] ml-2">HTML Form</span>{" "}
                </p>
              </div>
              <iframe
                className="w-[100%] lg:rounded-l-[40px] rounded-[30px] lg:rounded-[0px] lg:h-[70%] h-[400px] lg:mt-[60px] xl:mt-[0px]"
                src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                // frameborder="0"
                style={{ border: "0" }}
                // allowfullscreen=""
              ></iframe>
            </div>
            <div className=" xl:w-[42%] shad h-[455px] p-[68px] lg:w-[40%] w-full mt-20 lg:mt-0 xl:mt-0 ">
              <div className="flex flex-col gap-11">
                <input
                  className="outline-0 p-4 border-l-0 border-t-0 border-r-0 bg-transparent border w-full"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="outline-0 p-4 border-l-0 border-t-0 border-r-0 bg-transparent border w-full"
                  type="text"
                  placeholder="Surname"
                />
                <input
                  className="outline-0 p-4 border-l-0 border-t-0 border-r-0 bg-transparent border w-full"
                  type="text"
                  placeholder="Your Email"
                />
                <input
                  className="outline-0 p-4 border-l-0 border-t-0 border-r-0 bg-transparent border w-full"
                  type="text"
                  placeholder="Your Web Site URL"
                />
                <button
                  style={{ transition: "all .3s" }}
                  className="text-white p-[9px] text-[15px] xl:w-[40%] lg:w-[80%] rounded-[50px] px-[20px] hover:bg-[#03A4ED] bg-[#FF695F]"
                >
                  Submit Reque
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
