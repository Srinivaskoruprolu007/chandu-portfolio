import React from "react";
import { useMemo } from "react";
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
import { useImageLoad } from "@/hooks/useImageLoad";

const ImageDetailPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const imageDetails = useMemo(
    () => ({
      portrait: {
        title: "Photography",
        description:
          "Showcasing stunning images that capture moments, emotions, and artistry.",
        images: HeroPageImages.slice(0, 6).map((img) => img.src),
      },
      macro: {
        title: "Macro Photography",
        description:
          "Exploring intricate details of small subjects with precision and depth.",
        images: MacroImages?.map((img) => img.src) || [],
      },
      videos: {
        title: "Videos",
        description:
          "Bringing stories to life through dynamic visuals and compelling narratives.",
        images: HeroPageImages.slice(6, 12).map((img) => img.src),
      },
    }),
    []
  );

  const details = imageDetails[category] || imageDetails.portrait;
  const { isLoading, handleImageLoad } = useImageLoad(details.images);

  const carouselPlugin = useMemo(() => Autoplay({ delay: 3000 }), []);

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
        <Carousel plugins={[carouselPlugin]} className="w-full">
          <CarouselContent className="flex">
            {details.images.map((image, index) => (
              <CarouselItem key={index} className="w-full flex justify-center">
                <IKImage
                  path={image}
                  alt={`${details.title} ${index + 1}`}
                  className="w-full h-auto mt-12 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                  onLoad={() => handleImageLoad(image)}
                  lqip={{ active: true, quality: 20 }}
                  transformation={[
                    {
                      width: 400,
                      quality: 75,
                      format: "webp",
                    },
                  ]}
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
              onLoad={() => handleImageLoad(image)}
              lqip={{ active: true, quality: 20 }}
              transformation={[
                {
                  width: 600,
                  quality: 75,
                  format: "webp",
                },
              ]}
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

export default React.memo(ImageDetailPage);
