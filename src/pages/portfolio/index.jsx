import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// styles
import "./style.css";

const ProjectSlider = () => {
  const imagesSlide = [
    {
      img: "portfolio-01.jpg",
      title: "First Project",
      type: "Digital Assets",
    },
    {
      img: "portfolio-02.jpg",
      title: "Project Two",
      type: "SEO & Marketing",
    },
    {
      img: "portfolio-03.jpg",
      title: "Third Project",
      type: "SEO & Marketing",
    },
    {
      img: "portfolio-04.jpg",
      title: "Project Four",
      type: "SEO & Marketing",
    },
    {
      img: "portfolio-01.jpg",
      title: "Fifth Project",
      type: "Digital Assets",
    },
    {
      img: "portfolio-02.jpg",
      title: "Sixth Project",
      type: "SEO & Marketing",
    },
    {
      img: "portfolio-03.jpg",
      title: "7th Project",
      type: "SEO & Marketing",
    },
    {
      img: "portfolio-04.jpg",
      title: "8th Project",
      type: "SEO & Marketing",
    },
    {
      img: "portfolio-01.jpg",
      title: "9th Project",
      type: "Digital Assets",
    },
    {
      img: "portfolio-02.jpg",
      title: "Project Ten",
      type: "SEO & Marketing",
    },
    {
      img: "portfolio-03.jpg",
      title: "Project Eleven",
      type: "SEO & Marketing",
    },
    {
      img: "portfolio-04.jpg",
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
    <>
      <div className="slider-container">
        <Slider {...settings} className="relative">
          {imagesSlide.map((slide, index) => {
            return (
              <div
                key={index}
                className="flex justify-center rounded-[20px] px-[15px] transition-all duration-500"
              >
                <div className="project-slide relative mx-auto">
                  <img
                    src={`/images/${slide.img}`}
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
      {/* <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {imagesSlide.map((slide, index) => {
          return (
            <SwiperSlide key={index} className="relative">
              <img src={`/images/${slide.img}`} alt="" />
              <div className="swiper-slide-content absolute w-[239px] h-[210px] transition-all duration-500 bottom-[-240px] right-[30px]">
                <div className="inner-content absolute bottom-[30px] right-[30px] text-right text-white flex flex-col">
                  <a href="#" className="font-bold text-[20px] mb-[15px]">
                    {slide.title}
                  </a>
                  <span className="text-[15px]">{slide.type}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </>
  );
};

export default ProjectSlider;
