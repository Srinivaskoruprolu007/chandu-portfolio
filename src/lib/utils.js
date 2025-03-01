import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import ImageKit from "imagekitio-react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const imageKit = new ImageKit({
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  endpoint: process.env.IMAGE_KIT_ENDPOINT,
});
