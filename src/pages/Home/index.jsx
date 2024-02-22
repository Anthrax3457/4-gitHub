import React from "react";
import Planprojects from "../../components/PlanProjects";
import ThreeCarousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <Header />
      <div className="mt-[700px]">
        <ThreeCarousel />
      </div>
      <Planprojects />
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
