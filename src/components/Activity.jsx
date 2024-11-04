import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Menggunakan React Icons untuk ikon
import Slider from 'react-slick'; // Pastikan Anda menginstal react-slick dan slick-carousel

// Contoh data untuk gambar di carousel
const images = [
    'https://www.djkn.kemenkeu.go.id/files/images/2023/08/DSC04720-min.JPG',
    'https://djpb.kemenkeu.go.id/kppn/pangkalanbun/images/KM/IMG_2010_copy.jpg',
    'https://djpb.kemenkeu.go.id/portal/images/2023/03/kaltim1.jpg',
    'https://sidoarjoterkini.com/wp-content/uploads/2024/10/IMG-20241007-WA0012-scaled-e1728300961297.jpg',
    'https://lampungprov.go.id/uploads//photos/1/IMG-20221018-WA0055.jpg',
];

const Activity = () => {
    // Pengaturan untuk slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="container mx-auto p-4 pt-10">
            {/* Bagian Video */}
            <h1 className="flex justify-center items-center font-medium text-4xl md:text-6xl font-semibold mb-4 text-yellow-600 pt-10">Events</h1>
            <div className="mb-8">
                <video className="w-full h-90 object-cover rounded-lg" controls>
                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Bagian Carousel Gambar */}
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="relative">
                <Slider {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={src} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Activity;