import React, { useRef } from "react";
import img1 from "/src/assets/FullSizeRender.jpg";
import img2 from "/src/assets/FullSizeRender1.jpg";
import img3 from "/src/assets/FullSizeRender2.jpg";
import img4 from "/src/assets/FullSizeRender3.jpg";
import img5 from "/src/assets/FullSizeRender.jpg";
import img6 from "/src/assets/FullSizeRender.jpg";

import { works } from "../../data/works";
import icon from "../../assets/Icon.png";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";

const Hero = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="w-full overflow-hidden bg-black text-white">
      {/* Works Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between py-8 px-6 sm:px-12 max-w-screen-xl mx-auto">
        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl">HI I am</h3>
          <h2 className="text-3xl sm:text-4xl font-bold">CHANDRA SEKHAR KILAPARTHI</h2>
        </div>
        <div className="mt-6 sm:mt-0 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p className="text-2xl sm:text-4xl uppercase">Let’s</p>
            <Button className="bg-[#4A2CED] rounded-full p-4 shadow-lg">
              <MoveUpRight size={28} />
            </Button>
          </div>
          <p className="uppercase text-2xl sm:text-4xl font-semibold">Work Together</p>
        </div>
      </div>

      {/* Carousel Section */}
      <Carousel plugins={[plugin.current]} className="border-b w-full overflow-hidden">
        <CarouselContent className="flex gap-3 sm:gap-8 items-center">
          {works.map((work, index) => (
            <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/6 flex items-center m-2">
              <img src={icon} alt="icon" className="w-8 h-8" />
              <span className="p-2 uppercase text-sm truncate">{work}</span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Image Grid Section */}
      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl mx-auto mt-5 px-6 sm:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 border border-gray-700 rounded-lg shadow-md p-2">
            {[img1, img2, img3, img4, img5, img6].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="h-32 sm:h-40 w-full object-cover rounded-md border border-gray-600"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
