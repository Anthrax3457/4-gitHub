import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import ProjectVideo from "../Video";
import Manage from "../../components/Management";
import Loading from "../../components/loading";
import Planprojects from "../../components/PlanProjects";
import ThreeCarousel from "../../components/Carousel";
import ProjectSlider from "../portfolio";

const Home = () => {
  return (
    <div id="home">
      <Loading />
      <Navbar />
      <Header />
      <div className="mt-[900px]">
        <ThreeCarousel />
      </div>
      <Manage />
      <div>
        <Planprojects />
        <ProjectSlider/>
        <div className="mt-[300px]">
          <ProjectVideo />
        </div>

        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
