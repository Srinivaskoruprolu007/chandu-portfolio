import React, { useState, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Volume2,
  VolumeX,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { HeroPageImages } from "@/data/works.js";
import { IKImage } from "imagekitio-react";
import { imageKit } from "@/lib/utils.js";

const videoData = [
  {
    id: 1,
    title: "Nature Documentary",
    thumbnail: `${imageKit.endpoint}cp/PBG.JPG`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Wildlife Adventure",
    thumbnail: `${imageKit.endpoint}cp/PBG.JPG`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Urban Exploration",
    thumbnail: `${imageKit.endpoint}cp/PBG.JPG`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Mountain Trek",
    thumbnail: `${imageKit.endpoint}cp/PBG.JPG`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Ocean Life",
    thumbnail: `${imageKit.endpoint}cp/PBG.JPG`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "City Lights",
    thumbnail: `${imageKit.endpoint}cp/PBG.JPG`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

// Memoized Video Card Component
const VideoCard = React.memo(({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = useCallback(() => setIsMuted((prev) => !prev), []);
  const startPlaying = useCallback(() => setIsPlaying(true), []);

  return (
    <div className="relative group rounded-xl overflow-hidden bg-[#1C1C21] dark:bg-gray-100">
      {!isPlaying ? (
        <>
          <IKImage
            path={video.thumbnail}
            alt={video.title}
            className="w-full h-[250px] object-cover"
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              onClick={startPlaying}
            >
              <PlayCircle className="w-10 h-10 text-white" />
            </Button>
          </div>
        </>
      ) : (
        <div className="relative h-[250px]">
          <iframe
            width="100%"
            height="250"
            src={`${video.videoUrl}?autoplay=1&mute=${isMuted ? 1 : 0}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/70"
              onClick={toggleMute}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-white" />
              ) : (
                <Volume2 className="w-4 h-4 text-white" />
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
});

// Memoized Navigation Components
const CarouselNavigation = React.memo(({ onPrev, onNext }) => (
  <div className="flex justify-center items-center p-[2px] gap-2 w-[110px] h-[55px] bg-[#070708] dark:bg-white border border-[#1C1C21] dark:border-gray-200 rounded-full">
    <Button
      variant="ghost"
      size="icon"
      className="flex items-center p-[12px] w-[40px] h-[40px] bg-[#1C1C21] dark:bg-gray-100 rounded-full border-none hover:bg-[#2a2a2a] dark:hover:bg-gray-200 transition-all"
      onClick={onPrev}
    >
      <ChevronLeft className="w-[30px] h-[30px] text-white dark:text-black stroke-2" />
    </Button>
    <Button
      variant="ghost"
      size="icon"
      className="flex items-center p-[12px] w-[40px] h-[40px] bg-[#1C1C21] dark:bg-gray-100 rounded-full border-none hover:bg-[#2a2a2a] dark:hover:bg-gray-200 transition-all"
      onClick={onNext}
    >
      <ChevronRight className="w-[30px] h-[30px] text-white dark:text-black stroke-2" />
    </Button>
  </div>
));

const SectionHeading = React.memo(({ title, navigationControls }) => (
  <div className="flex justify-between items-center mb-2">
    <h1 className="text-[#e0e0e0] dark:text-[#1a1a1a] text-xl uppercase sm:text-2xl font-bold tracking-tight border-b border-[#1C1C21] dark:border-gray-200">
      {title}
    </h1>
    {navigationControls}
  </div>
));

const ImageItem = React.memo(({ image, onLoad }) => (
  <div className="relative aspect-auto group">
    <IKImage
      path={image.src}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      className="w-full h-[300px] sm:h-[300px] lg:h-[350px] object-cover rounded-xl transition-all duration-300 group-hover:scale-105"
      onLoad={() => onLoad(image.src)}
    />
  </div>
));

const PortfolioPage = () => {
  const carouselOptions = useMemo(
    () => ({
      align: "start",
      loop: true,
      slidesToScroll: 1,
      dragFree: true,
      breakpoints: {
        "(min-width: 768px)": { slidesPerView: 2 },
        "(min-width: 1024px)": { slidesPerView: 3 },
      },
    }),
    []
  );

  const [photosRef, photosApi] = useEmblaCarousel(carouselOptions);
  const [videosRef, videosApi] = useEmblaCarousel(carouselOptions);

  const handlePhotoNext = useCallback(
    () => photosApi?.scrollNext(),
    [photosApi]
  );
  const handlePhotoPrev = useCallback(
    () => photosApi?.scrollPrev(),
    [photosApi]
  );
  const handleVideoNext = useCallback(
    () => videosApi?.scrollNext(),
    [videosApi]
  );
  const handleVideoPrev = useCallback(
    () => videosApi?.scrollPrev(),
    [videosApi]
  );

  // Memoize background style
  const heroBackgroundStyle = useMemo(
    () => ({
      backgroundImage: `url(${imageKit.endpoint}cp/PBG.JPG)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }),
    []
  );

  return (
    <div className="bg-[#111111] dark:bg-[#f5f5f5]">
      <div className="flex flex-col">
        {/* Hero Image */}
        <div
          style={heroBackgroundStyle}
          className="h-[300px] md:h-[500px] w-full bg-center bg-cover"
        />

        {/* Text Content - Will appear below image on mobile, absolute on desktop */}
        <div className="bg-black md:bg-transparent text-white p-4 md:p-2 md:absolute md:top-0 md:left-0 md:mt-[100px]">
          <div className="flex flex-col justify-center items-start p-2 gap-4 w-full md:w-[750px] bg-black rounded-full rounded-l-none">
            <p className="text-sm uppercase text-gray-600 font-semibold">
              Portfolio
            </p>
            <h1 className="text-3xl uppercase">Visual Poetry in Pixels</h1>
            <p className=" text-sm text-gray-500 tracking-tight">
              Step into a visual journey that encapsulates the essence of my
              lens.
              <br />
              Each photograph in this portfolio is a narrative, a frozen moment
              in time, and a testament to the artistry and passion poured into
              every frame.
              <br />
              Explore the diverse tapestry of stories I've had the privilege to
              capture and witness the world through my lens.
            </p>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden md:block absolute bottom-2 right-0">
          <p className="text-sm text-gray-500 bg-black px-4 py-2 rounded-xl border-none rounded-r-none">
            Scroll Down To <br />
            See The Works
          </p>
        </div>
      </div>

      {/* Photos Section */}
      <div className="bg-[#111111] dark:bg-[#f5f5f5] p-2 mt-2">
        <div className="max-w-7xl px-2">
          <SectionHeading
            title="Photos"
            navigationControls={
              <CarouselNavigation
                onPrev={handlePhotoPrev}
                onNext={handlePhotoNext}
              />
            }
          />

          <div className="overflow-hidden dark:bg-white mb-2" ref={photosRef}>
            <div className="flex">
              {HeroPageImages.map((image) => (
                <div
                  key={image.id}
                  className="flex-[0_0_calc(100%-12px)] sm:flex-[0_0_calc(50%-30px)] lg:flex-[0_0_calc(33.33%-40px)] min-w-0 pl-3 sm:pl-4"
                >
                  <div className="relative aspect-auto group">
                    <IKImage
                      path={image.src}
                      loading="lazy"
                      lqip={{ active: true, quality: 20 }}
                      className="w-full h-[300px] sm:h-[300px] lg:h-[350px] object-cover rounded-xl transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-[#111111] dark:bg-[#f5f5f5] m-0">
        <div className="max-w-7xl px-2">
          <SectionHeading
            title="Videos"
            navigationControls={
              <CarouselNavigation
                onPrev={handleVideoPrev}
                onNext={handleVideoNext}
              />
            }
          />

          <div className="overflow-hidden dark:bg-white" ref={videosRef}>
            <div className="flex -ml-3 sm:-ml-4">
              {videoData.map((video) => (
                <div
                  key={video.id}
                  className="flex-[0_0_calc(100%-12px)] sm:flex-[0_0_calc(50%-16px)] lg:flex-[0_0_calc(33.33%-16px)] min-w-0 pl-3 sm:pl-4"
                >
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PortfolioPage);
