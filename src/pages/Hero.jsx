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

const ImageLoader = () => (
  <div className="absolute inset-0 bg-black/20 dark:bg-white/20 backdrop-blur-sm flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
      <p className="text-white dark:text-black text-sm font-medium">
        Loading images...
      </p>
    </div>
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
        <div className="relative mx-auto w-[358px] h-[223px] laptop:w-[1280px] laptop:h-[424px] desktop:w-[1596px] desktop:h-[512px]">
          {imagesLoaded < totalImages && <ImageLoader />}

          {/* Left top image */}
          <div className="absolute w-[116.64px] h-[154.18px] left-0 top-0 laptop:w-[417.04px] laptop:h-[293.16px] laptop:left-0 laptop:top-0 desktop:left-[0%] desktop:right-[67.42%] desktop:top-[0%] desktop:bottom-[30.86%]">
            <IKImage
              path="/cp/p4.jpg"
              loading="lazy"
              lqip={{ active: true, quality: 20 }}
              onLoad={handleImageLoad}
              className="w-full h-full object-cover rounded-[10px] laptop:rounded-[17px] transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Center large image */}
          <div className="absolute w-[146.47px] h-[223px] left-[121.13px] top-0 laptop:w-[523.71px] laptop:h-[424px] laptop:left-[433.08px] laptop:top-0 desktop:w-[653px] desktop:h-[512px] desktop:left-[540px] desktop:top-0">
            <IKImage
              path="cp/p1.JPG"
              loading="lazy"
              lqip={{ active: true, quality: 20 }}
              onLoad={handleImageLoad}
              className="w-full h-full object-cover rounded-[10px] laptop:rounded-[13px] transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Center overlay image */}
          <div className="absolute w-[129.43px] h-[154.18px] left-[41.5px] top-[68.82px] laptop:w-[462.76px] laptop:h-[293.16px] laptop:left-[148.37px] laptop:top-[130.84px] desktop:w-[577px] desktop:h-[354px] desktop:left-[185px] desktop:top-[158px]">
            <IKImage
              path="cp/p2.JPG"
              loading="lazy"
              lqip={{ active: true, quality: 20 }}
              onLoad={handleImageLoad}
              className="w-full h-full object-cover rounded-[10px] laptop:rounded-[17px] transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right top image */}
          <div className="absolute left-[75.56%] right-[0%] top-[0%] bottom-[42.77%] laptop:left-[75.56%] laptop:right-[0%] laptop:top-[0%] laptop:bottom-[42.77%] desktop:left-[75.56%] desktop:right-[0%] desktop:top-[0%] desktop:bottom-[42.77%]">
            <IKImage
              path="cp/p3.JPG"
              loading="lazy"
              lqip={{ active: true, quality: 20 }}
              onLoad={handleImageLoad}
              className="w-full h-full object-cover rounded-[10px] laptop:rounded-[14px] transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right bottom image */}
          <div className="absolute left-[75.56%] right-[0%] top-[59.96%] bottom-[0%] laptop:left-[75.56%] laptop:right-[0%] laptop:top-[59.96%] laptop:bottom-[0%] desktop:left-[75.56%] desktop:right-[0%] desktop:top-[59.96%] desktop:bottom-[0%]">
            <IKImage
              path="cp/p8.JPG"
              loading="lazy"
              lqip={{ active: true, quality: 20 }}
              onLoad={handleImageLoad}
              className="w-full h-auto rounded-[10px] laptop:rounded-[7px] transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Left bottom image */}
          <div className="absolute left-[0.06%] right-[89.29%] top-[72.07%] bottom-[0%] laptop:left-[0.06%] laptop:right-[89.29%] laptop:top-[72.07%] laptop:bottom-[0%] desktop:left-[0.06%] desktop:right-[89.29%] desktop:top-[72.07%] desktop:bottom-[0%]">
            <IKImage
              path="cp/p5.JPG"
              loading="lazy"
              lqip={{ active: true, quality: 20 }}
              onLoad={handleImageLoad}
              className="w-full h-full object-cover rounded-[10px] laptop:rounded-[11px] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
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
