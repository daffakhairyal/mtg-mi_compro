import React from 'react';

const Overview = () => {
  return (
    <div className="min-h-screen p-6 md:p-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold  mb-6">Overview</h1>
        <p className="text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          Realizing real movement, building the economy of the family, people, nation and state, 
          for the sake of the rise of the global economy
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-10">
        <img
          src="https://mtg.gold/img/about/over.png" // Replace with your image path
          alt="Indonesian Gold Mining"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div className=" p-6 md:p-10 text-justify">
        <h2 className="text-3xl font-bold mb-4">Gold Mining in Indonesia</h2>
        <p className=" text-lg leading-relaxed mb-4">
          Gold mining in Indonesia began more than a thousand years ago with the arrival of immigrants 
          from China who mined gold in several areas, followed by the Hindu Age, Dutch and Japanese 
          occupation. During the Dutch colonial era (1600-1942) the development of gold mining was very limited. 
          Several gold ore reserves discovered during this period were in the Lebong area, namely Lebong 
          Donok and Lebong Tandai, Bengkulu Province. Another gold deposit discovery was in the South 
          Banten area known as the Cikotok gold mine owned by PT Aneka Tambang. Apart from that, there 
          were also other relatively small discoveries of gold deposits.
        </p>
        <p className=" text-lg leading-relaxed mb-4">
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
