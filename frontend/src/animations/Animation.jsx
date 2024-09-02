import React, { useRef } from "react";
import TextGradient from "./TextGradient";
import AnimatedButton from "./AnimatedButton";
import Magnetic from "./Magnetic";
const Animation = () => {
  return (
    <div className="w-full h-screen bg-[#000] items-center justify-center flex flex-col">
      {/* <TextGradient/> */}
      <Magnetic>
        <span className="text-xl bg-[#eeee] w-64 h-20 rounded-[40px] flex items-center justify-center text-dark">
          <AnimatedButton children={"Hover Me"} />
        </span>
      </Magnetic>
    </div>
  );
};

export default Animation;
