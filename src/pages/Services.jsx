import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Services = () => {
  const { hash } = useLocation(); // Mendapatkan hash dari URL

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', '')); // Mengambil elemen berdasarkan ID
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY; // Mendapatkan posisi elemen relatif terhadap viewport
        const offset = window.innerWidth < 768 ? 60 : 120; // Mengatur offset berdasarkan ukuran layar
        window.scrollTo({ top: top - offset, behavior: 'smooth' }); // Melakukan scroll ke elemen dengan offset yang sesuai
      }
    }
  }, [hash]); // Menjalankan efek ini ketika hash berubah

  return (
    <div className='text-white max-w-7xl mx-auto pt-20 px-6'>
      <div className='md:pt-10'>
        <div id='fine' className='h-screen bg-blue-500'>Fine</div>
        <div id='refining' className='h-screen bg-green-500'>Refining</div>
        <div id='trading' className='h-screen bg-red-500'>Trading</div>
      </div>
    </div>
  );
};

export default Services;
