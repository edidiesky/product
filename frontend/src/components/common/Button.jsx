import React from "react";
import Curtain from "../../animations/Curatin";
const Button = ({ children, bgColor, color, type }) => {
  if (type === "dark") {
    return (
      <button
        style={{ transition: "all .6s" }}
        className={`
              text-dark  w-full h-full rounded-full hover:text-[#fff] text-[ #000] text-light`}
      >
        <Curtain bgColor={bgColor}> {children}</Curtain>
      </button>
    );
  }
  if (type === "white") {
    return (
      <button
        style={{ transition: "all .6s", background: `transparent` }}
        className={`
              text-dark border border-[rgba(255,255,255,.2)]
               hover:text-white w-full h-full rounded-full text-light`}
      >
        <Curtain bgColor={bgColor}> {children}</Curtain>
      </button>
    );
  }
  return (
    <button
      style={{ transition: "all .6s" }}
      className={` border rounded-full border-[rgb(230,229,229)] 
              text-dark  w-full h-full hover:text-[#fff] text-light`}
    >
      <Curtain bgColor={bgColor}> {children}</Curtain>
    </button>
  );
};

export default Button;
