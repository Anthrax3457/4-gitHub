import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

const Home = () => {
  return (
    <div id="home">
      <div>
        <Navbar />
        <Header />
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
