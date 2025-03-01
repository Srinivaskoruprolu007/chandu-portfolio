import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ThemeToggler } from "../theme-toggler";
import { motion } from "framer-motion";
import DarkIcon from "@/assets/Darklogo.svg";
import LightIcon from "@/assets/Lightlogo.svg";
import { useTheme } from "../theme-provider";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const { theme } = useTheme();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  // ✅ Close mobile menu when switching to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setShowMenu(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center px-4 bg-black dark:bg-white text-white dark:text-black h-16 max-w-screen border-b border-gray-800 dark:border-gray-200"
    >
      {/* Logo and Mobile Menu Button */}
      <div className="flex justify-between w-full md:w-auto items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="ml-4 md:ml-0 md:mr-auto">
          <NavLink to="/" className="hover:scale-105">
            {theme === "dark" ? (
              <img
                src={LightIcon}
                alt="Dark Icon"
                className="size-24 dark:text-white text-black"
              />
            ) : (
              <img
                src={DarkIcon}
                alt="Light Icon"
                className="size-24 dark:text-white text-black"
              />
            )}
          </NavLink>
        </motion.div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggler />
          <button className="outline-none menu-button" onClick={toggleMenu}>
            {showMenu ? (
              // Close Icon (Single X Button)
              <svg
                className="w-7 h-7 text-white dark:text-black"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Menu Icon
              <svg
                className="w-7 h-7 text-white dark:text-black"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row border rounded-lg border-gray-700 dark:border-gray-300 divide-x divide-gray-500 dark:divide-gray-300 overflow-hidden">
        {navItems.slice(0, 3).map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-800 dark:bg-gray-200 p-2 text-white dark:text-black text-center px-6"
                : `p-2 text-white dark:text-black text-center px-6 hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300 
                  ${index === 0 ? "first:rounded-l-lg" : ""} 
                  ${index === navItems.slice(0, 3).length - 1 ? "last:rounded-r-lg" : ""}`
            }
            to={item.link}
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Theme Toggler and Contact Button (Desktop) */}
      <div className="hidden md:flex items-center gap-4">
        <ThemeToggler />
        <div className="p-2 rounded-lg">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "px-6 py-3 rounded-lg bg-gray-800 dark:bg-gray-200"
                : "px-6 py-3 rounded-lg"
            }
            to="/contact"
          >
            {navItems[3].name}
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu - Transparent Background */}
      {showMenu && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mobile-menu flex flex-col items-end space-y-3 backdrop-blur-lg bg-transparent text-white dark:text-black w-48 py-3 px-5 rounded-lg shadow-lg absolute right-4 top-16 z-50"
        >
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-800 dark:bg-gray-200 py-2 px-4 rounded text-white dark:text-black text-sm w-full text-right"
                  : "hover:bg-gray-700 dark:hover:bg-gray-300 py-2 px-4 rounded text-white dark:text-black text-sm w-full text-right"
              }
              to={item.link}
              onClick={() => setShowMenu(false)} // Close menu after click
            >
              {item.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Header;
