import React from "react";

export const ImageLoader = ({ className = "" }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <div className="relative w-full h-full bg-black/10 dark:bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
          <p className="text-white dark:text-black text-sm font-medium">
            Loading...
          </p>
        </div>
      </div>
      <div className="animate-pulse bg-gray-200 dark:bg-gray-700 w-full h-full"></div>
    </div>
  </div>
);

export const GridLoader = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <ImageLoader key={i} className="h-[300px]" />
    ))}
  </div>
);

export const CarouselLoader = () => (
  <div className="w-full">
    <ImageLoader className="h-[250px]" />
  </div>
);
