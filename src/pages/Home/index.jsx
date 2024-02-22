import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

const Home = () => {
  return (
    <div id="home">
      <ThreeCarousel />
      <Planprojects />
      <div>
        <Navbar />
        <Header />
        <ContactForm />
        <Manage />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
