import { Link } from "react-router-dom";
import Slider from "react-slick"; // Import Slider from react-slick
import { pricingOptions } from "../constants";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const Pricing = () => {
  const sliderRef = useRef(null); 
  
  // Konfigurasi settings untuk slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Tampilkan 3 item di layar besar
    slidesToScroll: 1,
    autoplay: true, // Aktifkan autoplay
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // untuk layar medium
        settings: {
          slidesToShow: 2, // Tampilkan 2 item di layar medium
        },
      },
      {
        breakpoint: 640, // untuk layar kecil
        settings: {
          slidesToShow: 1, // Tampilkan 1 item di layar kecil
        },
      },
    ],
  };

  return (
    <div className="relative mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Services
      </h2>
      <Slider ref={sliderRef} {...settings}> {/* Tambahkan ref di sini */}
        {pricingOptions.map((option, index) => (
          <div key={index} className="p-2">
            <div className="p-10 border border-neutral-700 rounded-xl flex flex-col h-full">
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={option.image}
                  className="absolute duration-300 hover:scale-110 object-cover w-full h-full"
                  alt=""
                />
              </div>

              <div className="flex-grow">
                <Link to={`/services#${option.id}`} className="duration-300 hover:text-yellow-500">
                  <p className="text-4xl py-3">{option.title}</p>
                </Link>
                <p className="text-md">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
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

export default Pricing;
