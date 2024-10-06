import React from 'react';

const CompanyInfo = () => {
  return (
    <div className=" p-6  ">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-yellow-500 to-yellow-800 text-transparent bg-clip-text">Contact Us</h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Get in touch with us for any inquiries or information about our services.
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Contact Details */}
        <div className=" shadow-lg rounded-xl p-8 md:p-10 flex flex-col">
          <h2 className="text-3xl font-bold mb-4 text-yellow-600">Contact Information</h2>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Address:</strong>
            <br />
            Main Office
            <br />
            <p className='font-thin italic text-sm mb-2'>
            Taman Tekno BSD Blok F1/FG, Kelurahan Setu Kecamatan Setu, Kota Tangerang Selatan Provinsi Banten
            </p>
            Workshop
            <br />
            <p className='font-thin italic text-sm'>
            Jl. Semarang No. 2 Karang Mulia Nabire – Papua Tengah
            </p>
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Phone:</strong>
            <br />
            +62 21 1234 5678
          </p>
          <p className="text-lg leading-relaxed mb-4">
            <strong>Email:</strong>
            <br />
            contact@mtg.com
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="shadow-lg rounded-xl overflow-hidden">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.4591637762496!2d106.67203161035128!3d-6.334515461952728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5004ac790a3%3A0x5860c2d110207087!2sPT.%20Mulia%20Timur%20Global!5e0!3m2!1sen!2sid!4v1728188587726!5m2!1sen!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
