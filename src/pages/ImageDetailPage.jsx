import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IKImage } from "imagekitio-react";
import { HeroPageImages, MacroImages } from "@/data/works";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ImageDetailPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const imageDetails = {
    portrait: {
      title: "Photography",
      description:
        "Showcasing stunning images that capture moments, emotions, and artistry.",
      images: [
        HeroPageImages[0].src,
        HeroPageImages[1]?.src,
        HeroPageImages[2]?.src,
        HeroPageImages[3]?.src,
        HeroPageImages[4]?.src,
        HeroPageImages[5]?.src,
      ],
    },
    macro: {
      title: "Macro Photography",
      description:
        "Exploring intricate details of small subjects with precision and depth.",
      images: MacroImages.map((image) => image.src),
    },
    videos: {
      title: "Videos",
      description:
        "Bringing stories to life through dynamic visuals and compelling narratives.",
      images: [
        HeroPageImages[2].src,
        HeroPageImages[5]?.src,
        HeroPageImages[2]?.src,
        HeroPageImages[5]?.src,
        HeroPageImages[2]?.src,
        HeroPageImages[5]?.src,
      ],
    },
  };

  const details = imageDetails[category] || imageDetails.portrait;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 sm:p-12 bg-black dark:bg-white text-white dark:text-black min-h-screen flex flex-col items-center justify-start"
    >
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
        {details.title}
      </h1>

      {/* Mobile Carousel */}
      <div className="sm:hidden w-full max-w-md mb-3">
        <Carousel plugins={[Autoplay({ delay: 3000 })]} className="w-full">
          <CarouselContent className="flex">
            {details.images.map((image, index) => (
              <CarouselItem key={index} className="w-full flex justify-center">
                <IKImage
                  path={image}
                  alt={`${details.title} ${index + 1}`}
                  className="w-full h-auto mt-12 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Grid for larger screens */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 w-full max-w-5xl mt-2">
        {details.images.map((image, index) => (
          <div key={index} className="p-1 sm:p-2">
            <IKImage
              path={image}
              alt={`${details.title} ${index + 1}`}
              className="w-full h-36 sm:h-56 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <p className="text-base sm:text-lg text-gray-400 dark:text-gray-600 mt-2 text-center max-w-3xl">
        {details.description}
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-3 bg-gray-800 dark:bg-gray-200 text-white dark:text-black px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-300 transition duration-300"
      >
        Back to Home
      </button>
    </motion.div>
  );
};

export default ImageDetailPage;
