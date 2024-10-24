
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      // duration: 1.7,
      // easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      // direction: "vertical",
      // smooth: true,
      // smoothTouch: true,
      // touchMultiplier: 2,
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(3, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 1, // Adjusts touch scroll sensitivity (higher for more responsiveness)
      infinite: false, // Disable infinite scrolling
      direction: "vertical", // Vertical scrolling direction
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return children;
};

export default SmoothScroll;
