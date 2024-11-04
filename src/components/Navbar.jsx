import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
    setActiveMobileMenu(null);
  };

  const handleNavigation = (event, path) => {
    navigate(path); // Gunakan navigate untuk berpindah halaman
    setMobileDrawerOpen(false); // Tutup drawer setelah navigasi
    setActiveMobileMenu(null); // Reset mega menu setelah navigasi
  };

  const toggleSubMenu = (menu) => {
    setActiveMobileMenu(activeMobileMenu === menu ? null : menu);
  };

  return (
    <div className={`fixed top-0 right-0 left-0 z-10 ${mobileDrawerOpen ? 'bg-neutral-900' : 'backdrop-blur-lg'} border-b border-neutral-700/80`}>
      {/* Top Bar */}
      {/* <div className="hidden lg:flex items-center justify-around text-white">
        <p className="py-2 px-3">Active Hour : 09.00 - 17.00 WIB</p>
        <a
          href="/job-opportunity"
          onClick={(e) => handleNavigation(e, "/job-opportunity")}
          className="bg-gradient-to-r from-yellow-500 to-yellow-800 py-2 px-3"
        >
          JOB OPPORTUNITY
        </a>
      </div> */}

      {/* Navbar */}
      <nav className="sticky top-0 z-50 py-5">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <p className="text-yellow-600 text-xl font-semibold">LOGO</p>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="block lg:hidden">
              <button onClick={toggleNavbar} className="text-white focus:outline-none">
                {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-12">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavigation(e, "/")}
                  className="text-white duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800"
                >
                  Home
                </a>
              </li>

              {/* Profile Megamenu */}
              <li className="relative group">
                <a
                  href="#"
                  className="text-white duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800"
                >
                  Profile
                </a>
                <div className="absolute pt-5">
                <div className="hidden group-hover:flex group-hover:flex-col bg-neutral-800 p-5 rounded shadow-lg top-full left-0 w-[200px] space-y-5 duration-300 ">
                <a href="/profile" className="text-white hover:underline duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800">Company</a>
                  <a href="/management" className="text-white hover:underline duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800">Management</a>
                  <a href="#" className="text-white hover:underline duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800">Legality</a>
                </div>
                </div>
              </li>

              {/* Services Megamenu */}
              <li className="relative group">
                <a
                  href="/services"
                  className="text-white duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800"
                >
                  Services
                </a>
              </li>



              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavigation(e, "/contact")}
                  className="text-white duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileDrawerOpen && (
          <div className="fixed h-screen right-0 left-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a 
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)} // Cegah reload dan gunakan navigate
                    className={`${item.label === "Job" ? "block lg:hidden" : "block"}`} // Menampilkan "Job" hanya di md ke bawah
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
