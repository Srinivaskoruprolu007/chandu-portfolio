import { MoveRight } from "lucide-react";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { HeroPageImages } from "../../data/works";
import { IKImage } from "imagekitio-react";
const categories = [
  { title: "Portrait Photography", image: HeroPageImages[0].src },
  { title: "Landscape Photography", image: HeroPageImages[1].src },
  { title: "Event Photography", image: HeroPageImages[2].src },
];

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-6 sm:p-12 bg-black dark:bg-white text-white dark:text-black border-t border-gray-800 dark:border-gray-200"
    >
      <h1 className="text-xl text-gray-500 dark:text-gray-600">Portfolio</h1>

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-semibold text-center sm:text-left">
          EXPLORE MY PHOTOGRAPHY & <br /> EDITING WORK
        </h1>
        <button className="bg-gray-800 dark:bg-gray-200 flex items-center gap-2 text-white dark:text-black px-6 py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-300 transition duration-300 mt-4 sm:mt-0">
          <p>View All Works</p>
          <MoveRight size={18} />
        </button>
      </div>

      {/* Carousel for Mobile & Tablets */}
      <div className="block sm:hidden w-full mt-6">
        <Carousel plugins={[Autoplay({ delay: 3000 })]} className="w-full">
          <CarouselContent className="flex gap-4">
            {categories.map((category, index) => (
              <CarouselItem key={index} className="flex-shrink-0 w-full">
                <div className="relative bg-gray-900 dark:bg-gray-100 rounded-lg border border-gray-700 dark:border-gray-300 shadow-lg overflow-hidden">
                  <IKImage
                    src={category.image}
                    alt={category.title}
                    className="w-full h-72 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 dark:bg-white/60 p-4 flex justify-between items-center backdrop-blur-sm">
                    <p className="text-white dark:text-black text-sm font-semibold">
                      {category.title}
                    </p>
                    <button className="text-[#4A2CED] dark:text-[#6B4EF7] flex items-center gap-2 hover:text-[#3a22b3] dark:hover:text-[#5437D6] transition duration-300">
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

      {/* Grid Layout with animations */}
      <motion.div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="relative bg-gray-900 dark:bg-gray-100 rounded-lg border-2 border-gray-700 dark:border-gray-300 shadow-lg overflow-hidden hover:border-[#4A2CED] dark:hover:border-[#6B4EF7] transition-all"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 dark:bg-white/60 p-4 flex justify-between items-center backdrop-blur-sm">
              <p className="text-white dark:text-black text-sm font-semibold">
                {category.title}
              </p>
              <button className="text-[#4A2CED] dark:text-[#6B4EF7] flex items-center gap-2 hover:text-[#3a22b3] dark:hover:text-[#5437D6] transition duration-300">
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
