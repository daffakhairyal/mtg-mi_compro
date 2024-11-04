import React from 'react';
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

const teamMembers = [
  {
    name: "Cecilia Risyana, SE, Dipl. DF",
    role: "Direktur Utama",
    image: user1, // ganti dengan URL gambar sebenarnya
  },
  {
    name: "Ir. Nuning Sri Rejeki Wulandari, MBA",
    role: "Direktur Keuangan dan Operasi",
    image: user2,
  },
  {
    name: "Dr. Puspita Wulandari, SE, MM,",
    role: "Komisaris Utama",
    image: user6,
  },
  {
    name: "Bambang Karuliawasto, Ak. MBA.",
    role: "Komisaris",
    image: user4,
  },
];

const OurTeam = () => {
  return (
    <div className="h-full mb-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4 text-yellow-600">Management</h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
          Berdasarkan hasil Rapat Umum Pemegang Saham Luar Biasa pada tanggal 17 Juli 2024, berikut adalah susunan Dewan Direksi dan Dewan Komisaris yang disahkan.
        </p>
      </div>

      {/* Jajaran Direksi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-64 h-64 mx-auto rounded-full mb-4"
            />
            <h2 className="text-md text-slate-50">{member.name}</h2>
            <h3 className="text-sm text-yellow-600 mb-2">{member.role}</h3>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
      <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
      Perombakan Dewan
 Direksi dan Dewan Komisaris tersebut dalam rangka meningkatkan kinerja PT. ABN untuk
 menuju lebih baik. 
        </p>
        </div>
    </div>
  );
};

export default OurTeam;
