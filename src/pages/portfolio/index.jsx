import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import img1 from "../../assets/images/portfolio-left-dec.png";
import img1 from "../../assets/images/portfolio-01.jpg";
import img2 from "../../assets/images/portfolio-02.jpg";
import img3 from "../../assets/images/portfolio-03.jpg";
import img4 from "../../assets/images/portfolio-04.jpg";

// styles
import "./style.css";

const ProjectSlider = () => {
  const imagesSlide = [
    {
      img: img1,
      title: "First Project",
      type: "Digital Assets",
    },
    {
      img: img2,
      title: "Project Two",
      type: "SEO & Marketing",
    },
    {
      img: img3,
      title: "Third Project",
      type: "SEO & Marketing",
    },
    {
      img: img4,
      title: "Project Four",
      type: "SEO & Marketing",
    },
    {
      img: img1,
      title: "Fifth Project",
      type: "Digital Assets",
    },
    {
      img: img2,
      title: "Sixth Project",
      type: "SEO & Marketing",
    },
    {
      img: img3,
      title: "7th Project",
      type: "SEO & Marketing",
    },
    {
      img: img4,
      title: "8th Project",
      type: "SEO & Marketing",
    },
    {
      img: img1,
      title: "9th Project",
      type: "Digital Assets",
    },
    {
      img: img2,
      title: "Project Ten",
      type: "SEO & Marketing",
    },
    {
      img: img3,
      title: "Project Eleven",
      type: "SEO & Marketing",
    },
    {
      img: img4,
      title: "12th Project",
      type: "SEO & Marketing",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 150,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 699,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div id="portfolio" className="slider-container">
      <Slider {...settings} className="relative">
        {imagesSlide.map((slide, index) => {
          return (
            <div
              key={index}
              className="flex justify-center rounded-[20px] px-[15px] transition-all duration-500"
            >
              <div className="project-slide relative mx-auto">
                <img
                  src={slide.img}
                  alt=""
                  className="rounded-[23px] w-full h-full object-cover transition-all duration-500"
                />
                <div className="swiper-slide-content absolute w-[239px] h-[210px] transition-all duration-500 bottom-[-240px] right-[30px]">
                  <div className="inner-content absolute bottom-[30px] right-[30px] text-right text-white flex flex-col">
                    <a href="#" className="font-bold text-[20px] mb-[15px]">
                      {slide.title}
                    </a>
                    <span className="text-[15px]">{slide.type}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
