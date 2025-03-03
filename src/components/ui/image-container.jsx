import React from "react";
import { IKImage } from "imagekitio-react";
import { ImageLoader } from "./image-loader";

const ImageContainer = ({  isLoading }) => {
  return (
    <div className="relative mx-auto w-[358px] h-[223px] laptop:w-[1280px] laptop:h-[424px] desktop:w-[1596px] desktop:h-[512px]">
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <ImageLoader className="w-full h-full" />
        </div>
      )}

      {/* Left top image */}
      <div className="absolute w-[116.64px] h-[154.18px] left-0 top-0 laptop:w-[417.04px] laptop:h-[293.16px] laptop:left-0 laptop:top-0 desktop:left-[0%] desktop:right-[67.42%] desktop:top-[0%] desktop:bottom-[30.86%]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-white/20 rounded-[10px] laptop:rounded-[17px]" />
          <IKImage
            path="/cp/p4.JPG"
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            className="w-full h-full object-cover rounded-[10px] laptop:rounded-[17px] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Center large image */}
      <div className="absolute w-[146.47px] h-[223px] left-[121.13px] top-0 laptop:w-[523.71px] laptop:h-[424px] laptop:left-[433.08px] laptop:top-0 desktop:w-[653px] desktop:h-[512px] desktop:left-[540px] desktop:top-0">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-white/20 rounded-[10px] laptop:rounded-[13px]" />
          <IKImage
            path="cp/p1.JPG"
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            className="w-full h-full object-cover rounded-[10px] laptop:rounded-[13px] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Center overlay image */}
      <div className="absolute w-[129.43px] h-[154.18px] left-[41.5px] top-[68.82px] laptop:w-[462.76px] laptop:h-[293.16px] laptop:left-[148.37px] laptop:top-[130.84px] desktop:w-[577px] desktop:h-[354px] desktop:left-[185px] desktop:top-[158px]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-white/20 rounded-[10px] laptop:rounded-[17px]" />
          <IKImage
            path="cp/p2.JPG"
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            className="w-full h-full object-cover rounded-[10px] laptop:rounded-[17px] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Right top image */}
      <div className="absolute left-[75.56%] right-[0%] top-[0%] bottom-[42.77%] laptop:left-[75.56%] laptop:right-[0%] laptop:top-[0%] laptop:bottom-[42.77%] desktop:left-[75.56%] desktop:right-[0%] desktop:top-[0%] desktop:bottom-[42.77%]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-white/20 rounded-[10px] laptop:rounded-[14px]" />
          <IKImage
            path="cp/p3.JPG"
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            className="w-full h-full object-cover rounded-[10px] laptop:rounded-[14px] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Right bottom image */}
      <div className="absolute left-[75.56%] right-[0%] top-[59.96%] bottom-[0%] laptop:left-[75.56%] laptop:right-[0%] laptop:top-[59.96%] laptop:bottom-[0%] desktop:left-[75.56%] desktop:right-[0%] desktop:top-[59.96%] desktop:bottom-[0%]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-white/20 rounded-[10px] laptop:rounded-[7px]" />
          <IKImage
            path="cp/p8.JPG"
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            className="w-full h-auto rounded-[10px] laptop:rounded-[7px] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Left bottom image */}
      <div className="absolute left-[0.06%] right-[89.29%] top-[72.07%] bottom-[0%] laptop:left-[0.06%] laptop:right-[89.29%] laptop:top-[72.07%] laptop:bottom-[0%] desktop:left-[0.06%] desktop:right-[89.29%] desktop:top-[72.07%] desktop:bottom-[0%]">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-white/20 rounded-[10px] laptop:rounded-[11px]" />
          <IKImage
            path="cp/p5.JPG"
            loading="lazy"
            lqip={{ active: true, quality: 20 }}
            className="w-full h-full object-cover rounded-[10px] laptop:rounded-[11px] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ImageContainer);
