import { MoveRight } from "lucide-react";
import React from "react";
import linkedIn from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/Instagram.png";
import { socialLinks } from "../../data/works";
import { IKImage } from "imagekitio-react";

const About = () => {
  return (
    <div className="p-6 sm:p-12 bg-black dark:bg-white text-white dark:text-black min-h-screen flex flex-col justify-center border-t border-gray-800 dark:border-gray-200">
      <h1 className="text-xl text-gray-500 dark:text-gray-600">About</h1>

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-center sm:text-left">
          I'M CHANDU
        </h1>
        <button className="bg-gray-800 dark:bg-gray-200 flex items-center gap-2 text-white dark:text-black px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-300 transition duration-300">
          <p>Know more</p>
          <MoveRight size={18} />
        </button>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <IKImage
            path={`/cp/Hero.JPG`}
            alt="Chandu Photography"
            className="rounded-md border-2 border-gray-700 dark:border-gray-300 max-w-xs sm:max-w-lg lg:max-w-lg object-cover hover:border-[#4A2CED] dark:hover:border-[#6B4EF7] transition-colors"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col gap-6">
          <div className="p-4 bg-black dark:bg-white border-2 border-gray-800 dark:border-gray-300 rounded-md hover:border-[#4A2CED] dark:hover:border-[#6B4EF7] transition-all">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 dark:text-gray-700">
              Hi there! I'm Kilaparthi Chandra Sekhar, a passionate and budding
              photographer and editor, eager to capture the world's beauty
              through my lens and creative edits. I am committed to transforming
              moments into timeless memories.
            </p>
            <br />
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 dark:text-gray-700">
              My enthusiasm and dedication drive me to refine my craft. I
              specialize in portrait, landscape, brand, and event photography,
              bringing a fresh perspective and a natural approach to every
              project.
            </p>
          </div>

          <div className="p-4 bg-black dark:bg-white border-2 border-gray-800 dark:border-gray-300 rounded-md hover:border-[#4A2CED] dark:hover:border-[#6B4EF7] transition-all">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-sm text-gray-300 dark:text-gray-700">
                chandu9kilaparthi@gmail.com
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Mobile</h3>
                <p className="text-sm text-gray-300 dark:text-gray-700">
                  +91 96403 66123
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center mt-6">
              <div className="flex items-center gap-4">
                {[linkedIn, twitter, instagram].map((social, index) => (
                  <div
                    key={index}
                    className="rounded-full p-2 border border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-100 shadow-xl"
                  >
                    <a
                      href={
                        social === instagram
                          ? socialLinks.instagram
                          : social === linkedIn
                          ? socialLinks.linkedIn
                          : socialLinks.twitter
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={social}
                        alt="social"
                        className="w-6 h-6 dark:invert"
                      />
                    </a>
                  </div>
                ))}
              </div>

              <button className="bg-gray-800 dark:bg-gray-200 flex items-center gap-2 text-white dark:text-black px-4 py-2 rounded hover:bg-gray-900 dark:hover:bg-gray-300 transition duration-300">
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
