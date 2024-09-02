import React from "react";
import Button from "../common/Button";
const Hero = () => {
  return (
    <div className="w-full min-h-[800px] flex items-center justify-center">
      <div className="w-[80%] flex items-start flex-col h-full gap-8 justify-between max-w-custom mx-auto">
        <h1 className="text-6xl md:text-8xl font-semibold">Building the future</h1>
        <div className="flex">
          <div className="h-32 w-[360px] md:w-[400px] text-2xl md:text-7xl">
            <Button>Together</Button>
          </div>
        </div>
        <span className="text-xl md:text-4xl max-w-[1000px] leading-[1.4]">
          Mirego is a multidisciplinary development, strategy, and design team
          that powers the digital transformation of its partners.
        </span>
        <div className="p-2 family1 px-4 bg-[#000] hover:opacity-[.7] text-base text-white md:text-sm rounded-md">Learn more about the company</div>
      </div>
    </div>
  );
};

export default Hero;
