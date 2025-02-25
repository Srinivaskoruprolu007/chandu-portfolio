import { MoveRight } from "lucide-react";
import React from "react";
import img1 from "/src/assets/FullSizeRender.jpg";
import img2 from "/src/assets/FullSizeRender1.jpg";
import img3 from "/src/assets/FullSizeRender2.jpg";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const categories = [
  { title: "Portrait Photography", image: img1 },
  { title: "Landscape Photography", image: img2 },
  { title: "Event Photography", image: img3 },
];

const Portfolio = () => {
  return (
    <div className="p-6 sm:p-12 bg-black text-white ">
      <h1 className="text-xl text-gray-500">Portfolio</h1>

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-semibold text-center sm:text-left">
          EXPLORE MY PHOTOGRAPHY & <br /> EDITING WORK
        </h1>
        <button className="bg-gray-800 flex items-center gap-2 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300 mt-4 sm:mt-0">
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
                <div className="relative bg-gray-900 rounded-lg border border-gray-700 shadow-lg overflow-hidden">
                  <img src={category.image} alt={category.title} className="w-full h-72 object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 flex justify-between items-center">
                    <p className="text-white text-sm font-semibold">{category.title}</p>
                    <button className="text-[#4A2CED] flex items-center gap-2 hover:text-[#3a22b3] transition duration-300">
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

      {/* Grid Layout for Larger Screens */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-6">
        {categories.map((category, index) => (
          <div key={index} className="relative bg-gray-900 rounded-lg border border-gray-700 shadow-lg overflow-hidden">
            <img src={category.image} alt={category.title} className="w-full h-80 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 flex justify-between items-center">
              <p className="text-white text-sm font-semibold">{category.title}</p>
              <button className="text-[#4A2CED] flex items-center gap-2 hover:text-[#3a22b3] transition duration-300">
                <p>View Project</p>
                <MoveRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
   