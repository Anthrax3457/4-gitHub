import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import ProjectSlider from "../portfolio";
import Manage from "../../components/Management";
import Loaded from "../../components/Loaded";

const Home = () => {
  return (
    <div id="home">
      <Loaded />
      <Navbar />
      <Header />
      <div className="mt-[700px]">
        <ThreeCarousel />
      </div>
      <Planprojects />
      <ProjectSlider />
      <div>
        <ContactForm />
        <Manage />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
