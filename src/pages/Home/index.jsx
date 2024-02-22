import React from "react";
import Planprojects from "../../components/PlanProjects";
import ThreeCarousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";
// import Manage from "../../components/Management";

const Home = () => {
  return (
    <div id="home">
      <ThreeCarousel />
      <Planprojects />
      <div>
        <Navbar />
        <Header />
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
