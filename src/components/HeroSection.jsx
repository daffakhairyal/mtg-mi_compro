import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import FeatureSection from "./FeatureSection";

const HeroSection = () => {
  const sliderRef = useRef(null); // Membuat referensi untuk slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    pauseOnHover: false,
    arrows: false, // Matikan tombol default dari react-slick
  };

  const slides = [
    {
      title: "REFINING TRADING AND GOLD",
      description: "We carry out detailed processes to produce high quality gold products",
      image: "https://mtg.gold/img/banner/banner2.png",
    },
    {
      title: "A SAFE VALUABLE INVESTMENT IN GOLD",
      description: "Build peace of mind in gold business in any condition and anywhere",
      image: "https://mtg.gold/img/banner/banner3.png",
    },
    {
      title: "EASILY SELL GOLD COINS ON CRYPTO MARKET",
      description: "Participate in creating a gold coin platform for a dynamic trading ecosystem",
      image: "https://mtg.gold/img/banner/banner.png",
    },
  ];

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[900px] object-cover"
            />
            {/* Overlay Gradien Hitam */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-5 z-10 ">
              <h1 className="text-4xl xl:text-6xl font-bold mb-4 w-3/4">{slide.title}</h1>
              <p className="text-lg lg:text-xl max-w-2xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Tombol Next dan Prev */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl bg-gray-800 p-2 rounded-full duration-300 hover:scale-110"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaChevronLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl bg-gray-800 p-2 rounded-full duration-300 hover:scale-110"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaChevronRight />
      </button>

    

    </div>
  );
};

export default HeroSection;
