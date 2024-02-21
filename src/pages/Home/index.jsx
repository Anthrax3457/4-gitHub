import React from "react";
import Planprojects from "../../components/PlanProjects";
import ThreeCarousel from "../../components/Carousel";

const Home = () => {
  return (
    <div id="home">
      <ThreeCarousel />
      <Planprojects />
    </div>
  );
};

export default Home;
