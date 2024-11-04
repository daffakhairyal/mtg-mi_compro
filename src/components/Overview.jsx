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
    <div className="min-h-screen p-6">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Overview</h1>
        <p className="text-lg md:text-lg font-thin leading-relaxed mb-12 max-w-5xl mx-auto">
        PT. Arta Bakti Nusantara disingkat PT. ABN adalah badan usaha yang didirikan dalam rangka
 memenuhi amanat Anggaran Dasar/Anggaran Rumah Tangga Perkumpulan Purna Bakti Pegawai
 Kementerian Keuangan (P2BBP Kemenkeu). 
        </p>
      </div>

      {/* Carousel Section */}
      <div className="mb-5">
        <Slider {...settings}>
          <div className="w-full h-[500px]">
            <div className="w-full h-full overflow-hidden">
              <img
                src="https://akcdn.detik.net.id/visual/2024/01/10/suasana-gedung-kementerian-keuangan-kemenkeu-di-jakarta-rabu-1012024-3_169.jpeg?w=715&q=90"
                alt="Gold Mining 1"
                className="w-full h-full object-cover duration-300 hover:scale-110"
              />
            </div>
          </div>
          <div className="w-full h-[500px]">
            <div className="w-full h-full overflow-hidden">
              <img
                src="https://fiskal.kemenkeu.go.id/images/gedung-bkf.jpg?&s=m"
                alt="Gold Mining 2"
                className="w-full h-full object-cover duration-300 hover:scale-110"
              />
            </div>
          </div>
          <div className="w-full h-[500px]">
            <div className="w-full h-full overflow-hidden">
              <img
                src="https://garuda.industry.co.id/uploads/berita/detail/1407.jpg"
                alt="Gold Mining 3"
                className="w-full h-full object-cover duration-300 hover:scale-110"
              />
            </div>
          </div>
        </Slider>
      </div>

      {/* Content Section */}
      <div className="shadow-lg rounded-lg p-6 md:p-10 text-justify">
        <h2 className="text-3xl font-bold mb-4">Sekilas Tentang <span className='text-yellow-600'>PT. Arta Bakti Nusantara</span></h2>
        <p className="text-lg font-thin leading-relaxed mb-4">
        PT. Arta Bakti Nusantara disingkat PT. ABN adalah badan usaha yang didirikan dalam rangka
 memenuhi amanat Anggaran Dasar/Anggaran Rumah Tangga Perkumpulan Purna Bakti Pegawai
 Kementerian Keuangan (P2BBP Kemenkeu). PT. ABN berdiri tanggal 6 Maret 2019 berdasarkan
 Akta Notaris Khanief, SH, MKn Nomor 4 dimana 85% (delapan puluh lima persen) saham dimiliki
 oleh P2BP Kemenkeu yang saat ini dipimpin oleh Dr. Hadiyanto, SH, LLM.
        </p>
        <p className="text-lg font-thin leading-relaxed mb-4">
        PT ABN didirikan untuk menjalankan bisnis jasa dan perdagangan, dengan tujuan memperoleh
 dana bagi pembiayaan kegiatan P2BP Kemenkeu dalam rangka mencapai misinya yaitu
 mewujudkan kehidupan Purna Bakti Kemenkeu yang sehat lahir batin, semangat, produktif,
 sejahtera, dan yang berkontribusi bagi negeri dan sesama. 
        </p>
        <p className="text-lg font-thin leading-relaxed mb-4">
        Pada tanggal 17 Juli 2024 diadakan Rapat Umum Pemegang Saham Luar Biasa yang merombak
 susunan Dewan Direksi dan Dewan Komisaris, yang disahkan melalui Pernyataan Keputusan
 Rapat Umum Pemegang Saham Luar Biasa  Nomor 15, dibuat oleh Notaris/PPAT Abdul Haris,
 dengan susunan sebagai berikut: (1) Direktur Utama: Cecilia Risyana, SE, Dipl. DF; (2) Direktur
 Keuangan dan Operasi: Ir. Nuning Sri Rejeki Wulandari, MBA; (3) Komisaris Utama: Dr. Puspita
 Wulandari, SE, MM, dan (4) Komisaris: Bambang Karuliawasto, Ak. MBA. Perombakan Dewan
 Direksi dan Dewan Komisaris tersebut dalam rangka meningkatkan kinerja PT. ABN untuk
 menuju lebih baik. 
        </p>

      </div>
    </div>
  );
};

export default Overview;
