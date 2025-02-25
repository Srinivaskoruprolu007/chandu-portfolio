import { works, footerNavLinks } from "../../data/works";
import icon from "../../assets/Icon.png";
import linkedIn from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/Instagram.png";
import { MoveUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// added social links for footer
import { socialLinks } from "../../data/works";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center  bg-black text-white font-manrova w-full px-4 md:px-8">
      <Carousel
        plugins={[plugin.current]}
        className="flex justify-center items-center border-b w-full"
      >
        <CarouselContent className="flex gap-2 sm:gap-20 items-center">
          {works.map((work, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 flex items-center m-2 md:basis-1/6"
            >
              <img src={icon} alt="icon" className="size-10 bg-inherit" />
              <span className="p-2 uppercase text-sm truncate">{work}</span>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* fixed the footer layout for mobile and desktop */}
      <div className="flex flex-col md:flex-row items-center mt-4 text-center px-4">
        <div className="py-10 flex flex-col items-center gap-4 max-w-3xl">
          <p className="text-gray-500 font-semibold text-xl uppercase">
            A more meaningful home for photography & video editing
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 mt-6">
            <p className="text-white text-4xl uppercase">Let’s</p>
            <Button onClick = {() => navigate('/contact')} className="bg-[#4A2CED] rounded-full py-4 px-8 shadow-lg">
              <MoveUpRight size={32} />
            </Button>
          </div>
          <p className="uppercase text-4xl font-semibold">Work Together</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 w-full max-w-4xl">
          {footerNavLinks.map((link, index) => (
            <div className="flex flex-col items-center gap-4" key={index}>
              <Link
                to = "/"
                className="px-4 text-gray-500 hover:text-white transition duration-300 ease-in-out uppercase"
              >
                {link.label}
              </Link>
              {link.links.map((subLink, subIndex) => (
                <Link
                  to={subLink.href}
                  key={subIndex}
                  className="text-white uppercase text-sm"
                >
                  {subLink.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between text-gray-600 items-center mt-10 border-t p-8 border-gray-700 w-full max-w-6xl">
        <p className="text-sm text-center md:text-left">
          Terms & Conditions | Privacy Policy
        </p>
        <div className="flex items-center gap-4 border rounded-full border-gray-700 p-1">
          {[linkedIn, twitter, instagram].map((social, index) => (
            <div
              key={index}
              className="rounded-full p-2 bg-gray-900  border border-gray-700 shadow-xl"
            >
              <a
                href={
                  social === instagram
                    ? socialLinks.instagram
                    : social === linkedIn
                    ? socialLinks.linkedIn
                    : socialLinks.twitter
                }
                target="_blank"
              >
                <img src={social} alt="social" className="w-6 h-6" />
              </a>
            </div>
          ))}
        </div>
        <p className="text-sm text-center md:text-right">
          © 2024 Chandu Kilaparthi Photography and editing. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
