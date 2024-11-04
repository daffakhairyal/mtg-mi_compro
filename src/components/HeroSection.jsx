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
      title: "TUJUAN JANGKA PANJANG UNTUK KEBERLANJUTAN",
      description: "Memberdayakan purna bakti Kementerian Keuangan dengan visi jangka panjang yang berkelanjutan.",
      image: "https://www.djkn.kemenkeu.go.id/files/images/2023/01/Kemenkeu.jpeg",
    },
    {
      title: "MENGEMBANGKAN BISNIS JASA DAN PERDAGANGAN",
      description: "Mengembangkan sektor jasa dan perdagangan untuk memberi manfaat ekonomi bagi pemegang saham dan pemangku kepentingan.",
      image: "https://forumkeadilan.com/wp-content/uploads/2023/02/setoran-pajak-karbon-diprediksi-tak-besar-ini-kata-staf-khusus-menkeu-220915102945.jpg",
    },
    {
      title: "MEMFASILITASI KONTRIBUSI SOSIAL",
      description: "Memfasilitasi kontribusi sosial bagi purna bakti Kemenkeu untuk memberikan manfaat bagi negeri dan masyarakat.",
      image: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/krjogja/news/2022/10/27/478512/pindah-ke-ikn-gedung-pemerintahan-di-jakarta-bakal-disewakan-221027z.jpg",
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
