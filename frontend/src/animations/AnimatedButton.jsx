import React, { useEffect, useRef } from "react";
import gsap from "gsap";
// animattions to staggerText
const AnimatedButton = ({ children }) => {
  const circleRef = useRef(null);
  const timelineRef = useRef(null);
  let timelineId = null;

  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true });
    timelineRef.current
      .to(
        circleRef.current,
        {
          top: "-25%",
          duration: 0.4,
          width: "150%",
          ease: "power3.in",
        },
        "enter"
      )
      .to(
        circleRef.current,
        {
          top: "-150%",
          duration: 0.4,
          width: "125%",
        },
        "leave"
      );
  }, []);
  const handleMouseEnter = () => {
    if (timelineId) {
      clearTimeout(timelineId);
      timelineId = null;
    }
    timelineRef.current.tweenFromTo("enter", "leave");
  };

  const handleMouseLeave = () => {
    timelineId = setTimeout(() => {
      timelineRef.current.play();
    }, 300);
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ borderRadius: "inherit" }}
      className="w-full overflow-hidden cursor-pointer  h-full flex items-center justify-center relative"
    >
      <span className="z-20"> {children}</span>
      <div
        ref={circleRef}
        className="absolute z-10 rounded-[50%] top-[100%] w-full h-[150%] bg-[#3856E0]"
      ></div>
    </div>
  );
};

export default AnimatedButton;
