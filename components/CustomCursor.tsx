"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  // 1. REMOVED useSpring for coordinates. We want 1:1 instant hardware tracking.
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let wasHovering = false;

    const moveCursor = (e: MouseEvent) => {
      // Offset by 6px to perfectly center the 12px base dot
      cursorX.set(e.clientX - 6); 
      cursorY.set(e.clientY - 6);
      
      if (!isVisible) setIsVisible(true);

      // 2. THE IPADOS EFFECT: Detect if hovering over ANY clickable element
      const target = e.target as HTMLElement;
      const isClickable = !!target.closest('a, button, input, textarea, select, [role="button"]');
      
      if (isClickable !== wasHovering) {
        wasHovering = isClickable;
        setIsHovering(isClickable);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isVisible, cursorX, cursorY]);

  // Completely disables the custom cursor on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      // A pure, solid white dot. Mix-blend-difference makes it black on light backgrounds, and white on dark backgrounds.
      className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        // Expands to 4x its size when hovering over a button
        scale: isHovering ? 4 : 1,
      }}
      transition={{
        // Movement (x/y) is instant. Only the scale morphing uses physics.
        scale: { type: "spring", stiffness: 400, damping: 25 },
        opacity: { duration: 0.2 }
      }}
    />
  );
}