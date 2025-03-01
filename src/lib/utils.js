import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const imageKit = {
  publicKey: import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY,
  endpoint: import.meta.env.VITE_IMAGE_KIT_ENDPOINT,
};
