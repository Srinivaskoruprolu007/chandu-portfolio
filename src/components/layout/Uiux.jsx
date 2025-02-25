import { MoveUpRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const Uiux = () => {
  return (
    <div className="bg-black text-white p-6 sm:p-12  w-full  flex flex-col justify-center">
      {/* Title and Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full">
        <h1 className="text-xl sm:text-2xl text-center sm:text-left">UI/UX DESIGNER</h1>
        <Button className="bg-[#4A2CED] rounded-full py-3 px-6 sm:py-4 sm:px-8 shadow-lg mt-4 sm:mt-0">
          <MoveUpRight size={24} sm:size={32} />
        </Button>
      </div>

      {/* Description Text */}
      <div className="mt-6 max-w-6xl  text-sm sm:text-base leading-relaxed">
        <p>
          As a UI/UX designer, I use Figma to create user-friendly and visually appealing designs. My process begins with research and wireframing,
          followed by building interactive prototypes to test user flows.
        </p>
        <p>
          Figma allows me to collaborate in real-time with team members and clients, ensuring constant feedback and smooth iteration. I also use Figma’s
          design system features to create reusable components, which helps maintain consistency across the project.
        </p>
        <p>
          Through Figma, I’m able to streamline my design process from concept to delivery, always keeping the user’s needs at the forefront.
        </p>
      </div>
    </div>
  );
};

export default Uiux;
