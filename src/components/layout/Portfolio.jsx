import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { HeroPageImages } from "../../data/works";
import { IKImage } from "imagekitio-react";
import { MoveRight } from "lucide-react";

const categories = [
  { title: "Photography", image: HeroPageImages[0].src, route: "/portrait" },
  { title: "Macro", image: HeroPageImages[1].src, route: "/macro" },
  { title: "Videos", image: HeroPageImages[2].src, route: "/videos" },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 sm:p-12 bg-black dark:bg-white text-white dark:text-black border-t border-gray-800 dark:border-gray-200"
    >
      <h1 className="text-xl text-gray-500 dark:text-gray-600">Portfolio</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-semibold text-center sm:text-left">
          EXPLORE MY PHOTOGRAPHY & <br /> EDITING WORK
        </h1>
      </div>
      <div className="block sm:hidden w-full mt-6">
        <Carousel plugins={[Autoplay({ delay: 3000 })]} className="w-full">
          <CarouselContent className="flex gap-4">
            {categories.map((category, index) => (
              <CarouselItem key={index} className="flex-shrink-0 w-full">
                <div className="relative bg-gray-900 dark:bg-gray-100 rounded-lg border border-gray-700 dark:border-gray-300 shadow-lg overflow-hidden">
                  <IKImage src={category.image} alt={category.title} className="w-full h-72 object-cover" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 dark:bg-white/60 p-4 flex justify-between items-center backdrop-blur-sm">
                    <p className="text-white dark:text-black text-sm font-semibold">{category.title}</p>
                    <button
                      onClick={() => navigate(category.route)}
                      className="text-[#4A2CED] dark:text-[#6B4EF7] flex items-center gap-2 hover:text-[#3a22b3] dark:hover:text-[#5437D6] transition duration-300"
                    >
                      <p>View Project</p>
                      <MoveRight size={18} />
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <motion.div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative bg-gray-900 dark:bg-gray-100 rounded-lg border-2 border-gray-700 dark:border-gray-300 shadow-lg overflow-hidden hover:border-[#4A2CED] dark:hover:border-[#6B4EF7] transition-all"
          >
            <img src={category.image} alt={category.title} className="w-full h-80 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 dark:bg-white/60 p-4 flex justify-between items-center backdrop-blur-sm">
              <p className="text-white dark:text-black text-sm font-semibold">{category.title}</p>
              <button
                onClick={() => navigate(category.route)}
                className="text-[#4A2CED] dark:text-[#6B4EF7] flex items-center gap-2 hover:text-[#3a22b3] dark:hover:text-[#5437D6] transition duration-300"
              >
                <p>View Project</p>
                <MoveRight size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;