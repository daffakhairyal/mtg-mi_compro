import React from 'react';
import { Target, Rocket } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="h-full ">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-300">Our Vision & Mission</h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto ">
          Striving for excellence in the gold mining industry by bringing prosperity to the nation and supporting the global economy.
        </p>
      </div>

      {/* Vision and Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Vision */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 duration-300 hover:scale-105 shadow-lg rounded-xl p-8 md:p-10 transition-transform duration-300 hover:shadow-xl flex flex-col items-center">
          <Target className="w-16 h-16 text-white mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Vision</h2>
          <p className="text-lg leading-relaxed text-gray-800 text-justify">
            Become a leading gold company with a national network and an international brand.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-105 shadow-lg rounded-xl p-8 md:p-10 transition-transform duration-300 hover:shadow-xl flex flex-col items-center">
          <Rocket className="w-16 h-16 text-white mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Mission</h2>
          <p className="text-lg leading-relaxed text-gray-800 text-justify">
            Develop a network in major cities nationwide and internationally, while creating branded products that incorporate gold components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
