import React, { useRef, lazy, Suspense } from "react";
import img1 from "/src/assets/FullSizeRender.jpg";
import img2 from "/src/assets/FullSizeRender1.jpg";
import img3 from "/src/assets/FullSizeRender2.jpg";
import img4 from "/src/assets/FullSizeRender3.jpg";
import img5 from "/src/assets/FullSizeRender4.jpg";

import "../styles/Hero.css";

import { works } from "../data/works";
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

const Hero = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full overflow-hidden bg-black text-white">
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
                className="bg-[#4A2CED] rounded-full p-4 shadow-lg"
              >
                <MoveUpRight size={28} />
              </Button>
            </div>
            <p className="uppercase text-2xl sm:text-4xl font-semibold">
              Work Together
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <Carousel
          plugins={[plugin.current]}
          className="border-b w-full overflow-hidden"
        >
          <CarouselContent className="flex gap-3 sm:gap-8 items-center">
            {works.map((work, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/6 flex items-center m-2"
              >
                <img src={icon} alt="icon" className="w-8 h-8" />
                <span className="p-2 uppercase text-sm truncate">{work}</span>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Images Container */}
        <div
          className="relative mx-auto
                    w-[358px] h-[223px]
                    laptop:w-[1280px] laptop:h-[424px]
                    desktop:w-[1596px] desktop:h-[512px]"
        >
          {/* Left top image */}
          <div
            className="absolute 
                      w-[116.64px] h-[154.18px] left-0 top-0
                      laptop:w-[417.04px] laptop:h-[293.16px] laptop:left-0 laptop:top-0
                      desktop:left-[0%] desktop:right-[67.42%] desktop:top-[0%] desktop:bottom-[30.86%]"
          >
            <img
              src={img1}
              alt="Left Top"
              className="w-full h-full object-cover rounded-[10px] laptop:rounded-[17px]"
              loading="lazy"
            />
          </div>

          {/* Center large image */}
          <div
            className="absolute 
                      w-[146.47px] h-[223px] left-[121.13px] top-0
                      laptop:w-[523.71px] laptop:h-[424px] laptop:left-[433.08px] laptop:top-0
                      desktop:w-[653px] desktop:h-[512px] desktop:left-[540px] desktop:top-0"
          >
            <img
              src={img2}
              alt="Center"
              className="w-full h-full object-cover rounded-[10px] laptop:rounded-[13px]"
              loading="lazy"
            />
          </div>

          {/* Center overlay image */}
          <div
            className="absolute 
                      w-[129.43px] h-[154.18px] left-[41.5px] top-[68.82px]
                      laptop:w-[462.76px] laptop:h-[293.16px] laptop:left-[148.37px] laptop:top-[130.84px]
                      desktop:w-[577px] desktop:h-[354px] desktop:left-[185px] desktop:top-[158px]"
          >
            <img
              src={img3}
              alt="Center Overlay"
              className="w-full h-full object-cover rounded-[10px] laptop:rounded-[17px]"
              loading="lazy"
            />
          </div>

          {/* Right top image */}
          <div
            className="absolute 
                      left-[75.56%] right-[0%] top-[0%] bottom-[42.77%]
                      laptop:left-[75.56%] laptop:right-[0%] laptop:top-[0%] laptop:bottom-[42.77%]
                      desktop:left-[75.56%] desktop:right-[0%] desktop:top-[0%] desktop:bottom-[42.77%]"
          >
            <img
              src={img4}
              alt="Right Top"
              className="w-full h-full object-cover rounded-[10px] laptop:rounded-[14px]"
              loading="lazy"
            />
          </div>

          {/* Right bottom image */}
          <div
            className="absolute 
                      left-[75.56%] right-[0%] top-[59.96%] bottom-[0%]
                      laptop:left-[75.56%] laptop:right-[0%] laptop:top-[59.96%] laptop:bottom-[0%]
                      desktop:left-[75.56%] desktop:right-[0%] desktop:top-[59.96%] desktop:bottom-[0%]"
          >
            <img
              src={img5}
              alt="Right Bottom"
              className="w-full h-full object-cover rounded-[10px] laptop:rounded-[7px]"
              loading="lazy"
            />
          </div>

          {/* Left bottom image */}
          <div
            className="absolute 
                      left-[0.06%] right-[89.29%] top-[72.07%] bottom-[0%]
                      laptop:left-[0.06%] laptop:right-[89.29%] laptop:top-[72.07%] laptop:bottom-[0%]
                      desktop:left-[0.06%] desktop:right-[89.29%] desktop:top-[72.07%] desktop:bottom-[0%]"
          >
            <img
              src={img1}
              alt="Left Bottom"
              className="w-full h-full object-cover rounded-[10px] laptop:rounded-[11px]"
              loading="lazy"
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
