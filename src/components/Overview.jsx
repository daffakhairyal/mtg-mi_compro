import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Overview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="min-h-screen p-6 md:p-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Overview</h1>
        <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          Realizing real movement, building the economy of the family, people, nation and state, 
          for the sake of the rise of the global economy.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="mb-10">
        <Slider {...settings}>
          <div className="w-full h-[500px]">
            <div className="w-full h-full overflow-hidden">
              <img
                src="https://mtg.gold/img/about/over.png"
                alt="Gold Mining 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full h-[500px]">
            <div className="w-full h-full overflow-hidden">
              <img
                src="https://m-mtoday.com/wp-content/uploads/sites/12/2023/10/benefits-of-gold-mining-image-800x445.jpeg"
                alt="Gold Mining 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full h-[500px]">
            <div className="w-full h-full overflow-hidden">
              <img
                src="https://investingnews.com/media-library/close-up-lump-of-gold-mine-background-texture.jpg?id=33607737&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C1"
                alt="Gold Mining 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Slider>
      </div>

      {/* Content Section */}
      <div className="shadow-lg rounded-lg p-6 md:p-10 text-justify">
        <h2 className="text-3xl font-bold mb-4">Gold Mining in Indonesia</h2>
        <p className="text-lg leading-relaxed mb-4">
          Gold mining in Indonesia began more than a thousand years ago with the arrival of immigrants 
          from China who mined gold in several areas, followed by the Hindu Age, Dutch and Japanese 
          occupation. During the Dutch colonial era (1600-1942) the development of gold mining was very limited. 
          Several gold ore reserves discovered during this period were in the Lebong area, namely Lebong 
          Donok and Lebong Tandai, Bengkulu Province. Another gold deposit discovery was in the South 
          Banten area known as the Cikotok gold mine owned by PT Aneka Tambang. Apart from that, there 
          were also other relatively small discoveries of gold deposits.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          In 1939, total gold metal production was recorded at 2.5 tons, half of which came from Lebong Tandai. 
          During World War II, all of these gold mines were closed and after the war only a few mines were 
          reopened including the Cikotok Gold Mine. Gold production since the end of World War II until the 
          mid-1980s did not show a significant increase. Total recorded production in 1985 amounted to around 
          2.6 tons, with more than 90% of this amount being a by-product of copper concentrate produced by 
          PT Freeport Indonesia in Papua (formerly Irian Jaya).
        </p>
      </div>
    </div>
  );
};

export default Overview;
