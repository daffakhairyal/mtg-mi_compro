import React from 'react';
import { Target, Rocket } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="h-full mb-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-600">Visi & Misi Kami</h1>
        <p className="text-lg md:text-xl font-thin leading-relaxed max-w-3xl mx-auto ">
        Kami berkomitmen untuk mewujudkan visi dan misi kami dengan inovasi dan dedikasi demi memberikan dampak positif bagi masyarakat.
        </p>
      </div>

      {/* Vision and Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Vision */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 duration-300 hover:scale-105 shadow-lg rounded-xl p-8 md:p-10 transition-transform duration-300 hover:shadow-xl flex flex-col items-center">
          <Target className="w-16 h-16 text-white mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Vision</h2>
          <p className="text-lg leading-relaxed text-gray-800 text-justify">
            Menjadi unit usaha yang handal untuk memberdayakan para purna bakti Kementerian Keuangan menuju kehidupan yang sehat, semagat dan sejahtera.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:scale-105 shadow-lg rounded-xl p-8 md:p-10 transition-transform duration-300 hover:shadow-xl flex flex-col items-center">
          <Rocket className="w-16 h-16 text-white mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Mission</h2>
          <ul className="list-disc pl-5">
  <li className="text-lg leading-relaxed text-gray-800 mb-3">
    Menjalankan usaha di bidang jasa dan perdagangan untuk memberikan manfaat sebesar-besarnya bagi pemegang saham dan pemangku kepentingan.
  </li>
  <li className="text-lg leading-relaxed text-gray-800">
    Memberdayakan para Purna Bakti Kementerian Keuangan untuk memberikan manfaat bagi negeri dan sesama melalui kontribusi pengetahuan, pengalaman, dan kemampuan yang dimilikinya.
  </li>
</ul>

        </div>
      </div>
    </div>
  );
};

export default VisionMission;
