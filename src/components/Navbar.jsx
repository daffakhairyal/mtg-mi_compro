import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavigation = (event, path) => {
    event.preventDefault(); // Cegah reload halaman
    navigate(path); // Gunakan navigate untuk berpindah halaman
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-10 backdrop-blur-lg border-b border-neutral-700/80">
      {/* Top Bar */}
      <div className=" text-white hidden bg-slate-900 md:flex items-center justify-around">
        <p className="py-2 px-3 ">Active Hour : 09.00 - 17.00 WIB</p>
        <a href="/job-opportunity" onClick={(e) => handleNavigation(e, "/job-opportunity")} className="bg-gradient-to-r from-yellow-500 to-yellow-800 py-2 px-3">JOB OPPORTUNITY</a>
      </div>
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 py-3 ">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <img className="mr-2 w-2/3 md:w-full" src="https://mtg.gold/img/logo.png" alt="Logo" />
            </div>
            
            {/* Desktop Menu */}
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)} // Cegah reload dan gunakan navigate
                    className="text-white duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-800"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Search and Mobile Menu Toggle */}

            
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
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
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
