import Image from "next/image";
import React from "react";

interface FrameProps {
  image: string;
  buttonText: string;
  buttonUrl: string;
}

const Frameforunisex: React.FC<FrameProps> = ({
  image,
  buttonText,
  buttonUrl,
}) => {
  return (
    <div className="flex-none px-2- md:px-0-">
      <div className="relative flex justify-center">
        <Image
          src={image}
          alt="/"
          height={266}
          width={203}
          className="border border-black rounded-xl"
        />
        <a
          href={buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4"
        >
          <button className="bg-black font-normal text-xs text-white h-[34px] w-[137px] rounded-[5px] flex justify-center items-center transition-transform hover:scale-105 transform">
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Frameforunisex;
