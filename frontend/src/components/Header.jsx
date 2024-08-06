// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importuj Link z react-router-dom
import logo1 from '../assets/logo1.png'; // Zaktualizuj ścieżkę do swojego pliku
import logo2 from '../assets/logo2.png'; // Zaktualizuj ścieżkę do swojego pliku

const Header = () => {
  return (
    <div className="w-full h-auto px-4 py-8 bg-[#fcf6f6] flex flex-col items-center md:items-center md:flex-col lg:flex-row lg:justify-between lg:items-center lg:px-24">
      {/* Logo Section */}
      <div className="flex flex-col items-center gap-4 mb-6 lg:mb-0 lg:flex-row lg:items-start lg:gap-4">
        <img className="w-[35%] max-w-[250px] h-auto" src={logo1} alt="Logo 1" />
        <img className="w-[60%] max-w-[250px] h-auto lg:mt-4" src={logo2} alt="Logo 2" />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-6 lg:flex-row lg:gap-10">
        <Link to="/student" className="text-[#519bf3] text-[2rem] font-extrabold font-['Bitter'] mb-2 text-center md:text-left md:mb-0">
          For student
        </Link>
        <Link to="/teacher" className="text-[#519bf3] text-[2rem] font-extrabold font-['Bitter'] mb-2 text-center md:text-left md:mb-0">
          For teacher
        </Link>
        <Link to="/parent" className="text-[#519bf3] text-[2rem] font-extrabold font-['Bitter'] mb-2 text-center md:text-left md:mb-0">
          For parent
        </Link>
        <Link to="/other" className="text-[#519bf3] text-[2rem] font-extrabold font-['Bitter'] mb-2 text-center md:text-left md:mb-0">
          Other
        </Link>
      </div>
    </div>
  );
};

export default Header;
