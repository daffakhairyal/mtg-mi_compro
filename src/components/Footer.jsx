import { resourcesLinks, platformLinks, communityLinks, businessLink } from "../constants";
import pdf from "../statics/Sekilas PT. ABN.pdf"
import { FaDownload } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-20 mb-10 py-10 px-10">
      <div className="flex flex-col md:flex-row justify-between border-b border-neutral-700">
      <div className="flex items-center flex-shrink-0">
      <p className="text-yellow-600 text-xl font-semibold">LOGO</p>
            </div>
      <a href={pdf} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-3 py-5 border border-neutral-500 text-xl my-2 duration-300 hover:text-yellow-600 hover:border-yellow-600"><FaDownload className="mx-3"/>DOWNLOAD COMPANY PROFILE</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 place-content-center pt-4">
        <div className="flex flex-col"> 
          <h3 className="text-md font-semibold mb-4">Our Location</h3>
          <p className="font-semibold text-sm text-justify italic">Main Office</p>
          <p className="font-thin text-xs text-justify mb-4 italic">Menara Salemba Lantai 8 Suite 5B Jalan Salemba Raya Nomor 5 Paseban, Kecamatan Senen Jakarta Pusat (10440)n</p>
        </div>
        {/* <div>
          <h3 className="text-md font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
        <div>
          <h3 className="text-md font-semibold mb-4">Short Links</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <div>
          <h3 className="text-md font-semibold mb-4">Core Business</h3>
          <ul className="space-y-2">
            {businessLink.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
