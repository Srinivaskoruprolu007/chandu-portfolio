import React from "react";
import logo from "/src/assets/react.svg";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navItems = ["Home", "About me", "Portfolio", "Contact me"];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-black text-white h-16 relative">
      {/* Logo and Mobile Menu Button */}
      <div className="flex justify-between w-full md:w-auto">
        <div className="logo mb-4 md:mb-0 ml-8 md:ml-0 md:mr-auto flex justify-center md:justify-start w-full md:w-auto">
          <img src={logo} alt="logo" className="h-8 w-8 ml-4" />
        </div>
        <div className="md:hidden flex justify-center w-full md:w-auto">
          <button className="outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row mr-6 border rounded-lg border-gray-700 divide-x divide-gray-500 overflow-hidden">
  {navItems.slice(0, 3).map((item, index) => (
    <a
      key={index}
      className={`p-2 text-white text-center px-8 hover:bg-gray-800 transition duration-300 
        ${index === 0 ? "first:rounded-l-lg" : ""} 
        ${index === navItems.slice(0, 3).length - 1 ? "last:rounded-r-lg" : ""}`}
      href="#"
    >
      {item}
    </a>
  ))}
</div>


      {/* Contact Me Button (Desktop) */}
      <div className="hidden md:block p-2 rounded hover:bg-gray-800 hover:border hover:border-gray-500 mr-4">
        <h2>{navItems[3]}</h2>
      </div>

      {/* Mobile Menu (Fix: Smooth Visibility Toggle) */}
      <div
        className={`mobile-menu flex flex-col space-y-4 mt-4 bg-black w-full p-4 absolute top-16 left-0 shadow-lg transition-all duration-300 ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            className="border hover:bg-gray-800 p-2 rounded text-white text-center"
            href="#"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
