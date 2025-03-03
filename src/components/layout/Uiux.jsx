import { MoveUpRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import figma from "../../assets/UIUX.png";

const Uiux = () => {
  return (
    <div className="bg-black dark:bg-white text-white dark:text-black p-6 sm:p-12 w-full flex flex-col justify-center">
      {/* Title and Button (Aligned Properly) */}
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl sm:text-2xl text-left">UI/UX DESIGNER</h1>
        <Button className="bg-[#4A2CED] dark:bg-[#6B4EF7] rounded-full py-3 px-6 sm:py-4 sm:px-8 shadow-lg hover:bg-[#3920B5] dark:hover:bg-[#5437D6] transition-colors">
          <MoveUpRight size={24} className="text-white" />
        </Button>
      </div>

      {/* Image First on Mobile, Text Below */}
      <div className="flex flex-col sm:flex-row-reverse items-center justify-between w-full gap-4">
        {/* Image */}
        <div className="mt-6 w-full">
          <img src={figma} alt="Figma" className="w-full h-auto" />
        </div>

        {/* Description Text */}
        <div className="mt-6 max-w-6xl flex justify-start flex-col text-sm sm:text-base leading-relaxed text-gray-300 dark:text-gray-700">
          <p>
            As a UI/UX designer, I use Figma to create user-friendly and
            visually appealing designs. My process begins with research and
            wireframing, followed by building interactive prototypes to test
            user flows.
          </p>
          <p className="mt-4">
            Figma allows me to collaborate in real-time with team members and
            clients, ensuring constant feedback and smooth iteration. I also use
            Figma's design system features to create reusable components, which
            helps maintain consistency across the project.
          </p>
          <p className="mt-4">
            Through Figma, I'm able to streamline my design process from concept
            to delivery, always keeping the user's needs at the forefront.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Uiux;
