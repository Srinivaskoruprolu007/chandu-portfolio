import React, { useRef, lazy, Suspense, useState } from "react";
import { works } from "../data/works";
import { IKImage } from "imagekitio-react";
import "../styles/Hero.css";
import icon from "../assets/Icon.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "../components/ui/button";
import { MoveUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ImageLoader } from "@/components/ui/image-loader";
import ImageContainer from "@/components/ui/image-container";

// Lazy load components
const About = lazy(() => import("../components/layout/About"));
const Uiux = lazy(() => import("../components/layout/Uiux"));
const Portfolio = lazy(() => import("../components/layout/Portfolio"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-[300px] flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
  </div>
);

const Hero = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = 6; // Total number of images in the grid

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  return (
    <>
      <div className="w-full overflow-hidden bg-black dark:bg-white text-white dark:text-black">
        {/* Works Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-8 px-6 sm:px-12 max-w-screen-xl mx-auto">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl">HI I am</h3>
            <h2 className="text-3xl sm:text-4xl font-bold">
              CHANDRA SEKHAR KILAPARTHI
            </h2>
          </div>
          <div className="mt-6 sm:mt-0 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <p className="text-2xl sm:text-4xl uppercase">Let's</p>
              <Button
                onClick={() => navigate("/contact")}
                className="bg-[#4A2CED] dark:bg-[#6B4EF7] rounded-full p-4 shadow-lg hover:bg-[#3920B5] dark:hover:bg-[#5437D6] transition-colors"
              >
                <MoveUpRight size={28} className="text-white" />
              </Button>
            </div>
            <p className="uppercase text-2xl sm:text-4xl font-semibold">
              Work Together
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="transition-transform duration-300 mb-4">
          <Carousel
            plugins={[plugin.current]}
            className="flex justify-center items-center border-b border-gray-800 dark:border-gray-200 w-full"
          >
            <CarouselContent className="flex gap-2 sm:gap-20 items-center">
              {works.map((work, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 flex items-center m-2 md:basis-1/6"
                >
                  <img
                    src={icon}
                    alt="icon"
                    className="size-10 bg-inherit dark:invert"
                  />
                  <span className="p-2 uppercase text-sm truncate">{work}</span>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Images Grid with Loader */}
        <ImageContainer isLoading={imagesLoaded} />
      </div>

      {/* Lazy loaded components */}
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Uiux />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Portfolio />
      </Suspense>
    </>
  );
};

export default Hero;
