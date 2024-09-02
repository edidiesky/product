import React, { useEffect, useRef } from "react";
import gsap from "gsap";
const Magnetic = ({ children }) => {
  const magneticRef = useRef(null);
  useEffect(() => {
    const xTo = gsap.quickTo(magneticRef.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(magneticRef.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    magneticRef.current.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        magneticRef.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.5);
      yTo(y * 0.5);
    });
    magneticRef.current.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);
  // const handleMouseMove = (e) => {};
  // const handleMouseLeave = (e) => {};
  return React.cloneElement(children, { ref: magneticRef });
};

export default Magnetic;
