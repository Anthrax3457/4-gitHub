import React from "react";
import Manage from "../../components/Management";
import Footer from "../../components/Footer";
import ThreeCarousel from "../../components/ThreeCarousel";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

const Home = () => {
  return (
    <div id="home">
      <div>
        <Navbar />
        <Header />
        <Manage />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
