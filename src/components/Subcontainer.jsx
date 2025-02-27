import React from "react";
import { Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { socialLinks } from "@/data/works";

const Subcontainer = () => {
  return (
    <div className='bg-[url("/src/assets/chandhu.jpeg")] bg-cover bg-center bg-black dark:bg-white border-t border-gray-800 dark:border-gray-200 h-[400px] md:h-[746px] w-full relative rounded-sm'>
      {/* Social Media Icons Container - Desktop */}
      <div className="absolute top-16 right-0 z-10 hidden md:block">
        <div className="flex bg-black/90 dark:bg-white/90 pl-8 pt-2 pb-2 border border-gray-800 dark:border-gray-200 rounded-full rounded-r-none gap-2 backdrop-blur-sm">
          <Link
            to={socialLinks.instagram}
            target="_blank"
            className="bg-[#1C1C21] dark:bg-gray-100 p-2 rounded-full hover:bg-[#2A2A30] dark:hover:bg-gray-200 transition-colors"
          >
            <Instagram className="w-6 h-6 text-white dark:text-black hover:text-purple-500 dark:hover:text-purple-600" />
          </Link>
          <Link
            to={socialLinks.twitter}
            target="_blank"
            className="bg-[#1C1C21] dark:bg-gray-100 p-2 rounded-full hover:bg-[#2A2A30] dark:hover:bg-gray-200 transition-colors"
          >
            <Twitter className="w-6 h-6 text-white dark:text-black hover:text-purple-500 dark:hover:text-purple-600" />
          </Link>
          <Link
            to={socialLinks.linkedIn}
            target="_blank"
            className="bg-[#1C1C21] dark:bg-gray-100 p-2 rounded-full hover:bg-[#2A2A30] dark:hover:bg-gray-200 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-white dark:text-black hover:text-purple-500 dark:hover:text-purple-600" />
          </Link>
        </div>
      </div>

      {/* Social Media Icons - Mobile */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 md:hidden">
        <div className="flex gap-4 bg-black/90 dark:bg-white/90 px-6 py-3 rounded-full backdrop-blur-sm">
          <Link
            to={socialLinks.instagram}
            target="_blank"
            className="bg-[#1C1C21] dark:bg-gray-100 p-2 rounded-full"
          >
            <Instagram className="w-5 h-5 text-white dark:text-black" />
          </Link>
          <Link
            to={socialLinks.twitter}
            target="_blank"
            className="bg-[#1C1C21] dark:bg-gray-100 p-2 rounded-full"
          >
            <Twitter className="w-5 h-5 text-white dark:text-black" />
          </Link>
          <Link
            to={socialLinks.linkedIn}
            target="_blank"
            className="bg-[#1C1C21] dark:bg-gray-100 p-2 rounded-full"
          >
            <Linkedin className="w-5 h-5 text-white dark:text-black" />
          </Link>
        </div>
      </div>

      {/* Content Container - Desktop Only */}
      <div className="absolute top-1/3 left-0 z-10 hidden md:block">
        <div className="bg-black/90 dark:bg-white/90 py-10 px-8 border border-gray-800 dark:border-gray-200 rounded-r-3xl flex flex-col gap-4 max-w-xl backdrop-blur-sm">
          <p className="text-gray-400 dark:text-gray-600 text-sm uppercase font-medium">
            Contact Me
          </p>
          <h1 className="text-white dark:text-black text-3xl font-bold uppercase">
            Get in Touch with Me
          </h1>
          <p className="text-gray-300 dark:text-gray-700 text-sm leading-relaxed">
            Step into a world of timeless photography with Chandra sekhar.
            Explore our photography and video editing skills, each crafted to
            tell your unique story through captivating images. Whether it's the
            magic of portraits, the emotion of nature, we're here to bring your
            vision to life.
          </p>
        </div>
      </div>

      {/* Scroll Text - Desktop Only */}
      <div className="absolute right-0 bottom-1/3 z-10 hidden md:block">
        <div className="bg-black/90 dark:bg-white/90 rounded-l-full backdrop-blur-sm">
          <p className="text-white dark:text-black text-sm uppercase font-medium px-4 py-2">
            Scroll Down
            <br />
            To Send me a Message
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subcontainer;
