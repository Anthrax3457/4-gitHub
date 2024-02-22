import React from "react";
import Planprojects from "../../components/PlanProjects";
import ThreeCarousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import ProjectSlider from "../portfolio";
import ProjectVideo from "../Video";
import Manage from "../../components/Management";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Header />
      <div className="mt-[700px]">{/* <ThreeCarousel /> */}</div>
      <Manage />
      {/* <Planprojects /> */}
      <div>
        <section className="portfolio pt-[17px] flex flex-col items-center pb-[100px]">
          <div className="portfolio__heading w-[636px] px-[50px] text-center mb-[60px] max-[991px]:w-[90%] max-[574px]:w-full max-[574px]:px-[12px]">
            <h2 className="text-[30px] text-[#2a2a2a] capitalize leading-[1.46] font-bold mb-[-5px]">
              Our Recent <span className="text-[#03a4ed]">Projects</span> & Case
              Studies <span className="text-[#ff695f]">For Clients</span>
            </h2>
            <span className="text-[30px] uppercase font-bold text-[#ff695f] opacity-25">
              Our Portfolio
            </span>
          </div>
          <div className="slider-content w-full px-[12px] mb-[100px]">
            <ProjectSlider />
          </div>
          <div>
            <ProjectVideo />
            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
