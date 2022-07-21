import React, { Component } from "react";
//Added for carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Carousal() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: true
  };
  return (
    <div>
      <h2 className="text-3xl font-bold underline">Web 3.0</h2>
      <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-inner relative w-full overflow-hidden">
          <Slider {...settings}>

            <div className="carousel-item active relative float-left w-full">
              <img
                // src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                src="./images/hero_bg.jpg"
                className="block w-full carousalimg"
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                // src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                src="./images/img_1_horizontal.jpg"
                className="block w-full carousalimg"
                alt="Camera"
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="./images/img_2_horizontal.jpg"
                className="block w-full carousalimg"
                alt="Exotic Fruits"
              />
            </div>


          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Carousal;