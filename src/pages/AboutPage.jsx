import { imageKit } from "@/lib/utils";
import { IKContext, IKImage } from "imagekitio-react";

const AboutPage = () => {
  return (
    <div className="bg-black  p-2 ">
      <div>
        <span className="text-white  top-10 left-1/2 font-bold text-sm w-FULL flex-grow bg-none  md:text-2xl">
          CHANDRA SEKHAR KILAPARTHI
        </span>

        <IKImage
          src={`${imageKit.endpoint}/cp/Hero.JPG`}
          alt="Chandu Photography"
          className="w-full rounded-none"
        />
        <h1 className="text-center text-sm font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 bg-black py-10 rounded-lg w-full hidden md:block md:text-2xl ">
          I AM A PASSIONATE CREATIVE PHOTOGRAPHER AND VIDEO EDITOR
        </h1>
      </div>
      <div className="text-gray-400 w-full bg-black rounded-lg flex flex-col items-start space-y-2 pb-4">
        <h1 className=" text-xl md:text-2xl font-bold">My Biography</h1>
        <p className=" text-sm md:text-xl">
          Chandra Sekhar Kilaparthi is a passionate and highly creative
          photographer and video editor known for his eye-catching visuals and
          compelling storytelling through his work. With a keen interest in
          capturing moments, Chandra Sekhar specializes in transforming ordinary
          scenes into extraordinary pieces of art, using photography and video
          editing techniques that highlight the beauty of everyday life.
          <br />
          <br />
          With a deep appreciation for the art of photography and video editing,
          Chandra Sekhar Kilaparthi brings a unique perspective to his work,
          blending technical expertise with creative vision to create visually
          stunning and emotionally engaging content.
        </p>
        <h1 className="text-sm md:text-xl font-semibold">EDUCATION</h1>
        <ul className=" text-sm md:text-xl list-disc list-inside">
          <li>
            <span>
              2023
              <br /> B.Tech Electronics and Communication at RGUKT Srikakulam
            </span>
          </li>
          <li>
            <span>
              2019
              <br />
              PUC at RGUKT Srikakulam
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
