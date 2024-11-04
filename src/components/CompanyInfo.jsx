import React from 'react';

const CompanyInfo = () => {
  return (
    <div className=" p-6  ">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-yellow-500 to-yellow-800 text-transparent bg-clip-text">Contact Us</h1>
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Hubungi kami untuk pertanyaan atau informasi mengenai layanan kami.
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
            Menara Salemba Lantai 8 Suite 5B Jalan Salemba Raya Nomor 5 Paseban, Kecamatan Senen Jakarta Pusat (10440)
            </p>
          </p>
          <p className="text-sm font-thin leading-relaxed mb-2">
            <strong className='text-lg  leading-relaxed'>Kontak Kami:</strong>
            <br />
            hello@artabaktinusantara.co.id
          </p>
          <p className="text-sm font-thin leading-relaxed">
            @artabaktinusantara
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="shadow-lg rounded-xl overflow-hidden">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5371036604242!2d106.84624001038256!3d-6.192632593769099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f443b0ca95bd%3A0x18324ca78ba53e71!2sMenara%20Salemba!5e0!3m2!1sen!2sid!4v1730706585736!5m2!1sen!2sid"
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
