"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // The ring lags behind with spring physics
  const springX = useSpring(cursorX, { stiffness: 150, damping: 18, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 150, damping: 18, mass: 0.5 });

  const isHoveringLink = useRef(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleEnter = () => { isHoveringLink.current = true; };
    const handleLeave = () => { isHoveringLink.current = false; };

    window.addEventListener("mousemove", moveCursor);

    // Attach to all interactive elements
    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      {/* Outer ring — spring-lagged */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-purple-light/40 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          width: 36,
          height: 36,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Inner dot — instant */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-teal-light"
        style={{
          x: dotX,
          y: dotY,
          width: 5,
          height: 5,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
