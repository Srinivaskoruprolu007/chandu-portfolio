import React, { useState, useEffect } from "react";
import logo from "/src/assets/logo.svg";
import {  NavLink } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  const navItems =[{name : "Home", link : "/"}, {name : "About", link : "/about"}, {name : "Portfolio", link : "/portfolio"}, {name : "Contact", link : "/contact"}];
  // ✅ Close mobile menu when switching to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setShowMenu(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMenu]);

  return (
<div className="sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center px-4 bg-black text-white h-16  max-w-screen">
{/* Logo and Mobile Menu Button */}
      <div className="flex justify-between w-full md:w-auto">
        <div className="logo mb-4 md:mb-0 ml-4 md:ml-0 md:mr-auto flex justify-start">
          <NavLink to="/" className="hover:scale-105">
            <img src={logo} alt="logo" className="h-16 w-16" />
          </NavLink>
        </div>
        <div className="md:hidden flex">
          <button className="outline-none menu-button" onClick={toggleMenu}>
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
      <div className="hidden md:flex flex-row border rounded-lg border-gray-700 divide-x divide-gray-500 overflow-hidden">
        {navItems.slice(0, 3).map((item, index) => (
          <NavLink
            key={index}
            className={({isActive}) =>isActive ? "bg-gray-800 p-2 text-white text-center px-8 hover:bg-gray-800 transition duration-300" : `p-2 text-white text-center px-8 hover:bg-gray-800 transition duration-300 
              ${index === 0 ? "first:rounded-l-lg" : ""} 
              ${
                index === navItems.slice(0, 3).length - 1
                  ? "last:rounded-r-lg"
                  : ""
              }`}
            to ={item.link}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Contact Me Button (Desktop) */}
      <div className="hidden md:block p-2  rounded-lg">
        <NavLink  className = {({isActive}) => isActive ? "   px-6 py-3   rounded-lg bg-gray-800" : " px-6 py-3 rounded-lg"} to = "/contact" >{navItems[3].name}</NavLink>
      </div>

      {/* Mobile Menu (Fixed Overflow Issue) */}
      {showMenu && (
        <div className="mobile-menu flex flex-col items-center space-y-4 bg-black w-full px-4 py-2 absolute left-0 top-full shadow-lg transition-all duration-300 z-50">
          {navItems.map((item, index) => (
            <a
              key={index}
              className="border hover:bg-gray-800 p-2 rounded text-white text-center w-full"
              href={item.link}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
