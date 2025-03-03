import { useState, useEffect } from "react";

export const useImageLoad = (images = []) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setLoadedImages(new Set());
  }, [images]);

  const handleImageLoad = (imagePath) => {
    setLoadedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(imagePath);
      if (newSet.size === images.length) {
        setIsLoading(false);
      }
      return newSet;
    });
  };

  return { isLoading, handleImageLoad };
};
