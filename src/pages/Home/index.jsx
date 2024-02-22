import React from "react";
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
        <Manage />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
