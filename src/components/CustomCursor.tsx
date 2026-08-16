import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [viewText, setViewText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on touch devices or if reduced motion is preferred
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    setIsVisible(true);
    document.body.classList.add('custom-cursor-active');

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Expand on interactive elements
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null || 
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer');
        
      setIsHovered(!!isInteractive);

      // Check if hovering a project card or item that requires "VIEW" text
      const viewElement = target.closest('[data-cursor="view"]');
      if (viewElement) {
        setViewText("VIEW");
        setIsHovered(true);
      } else {
        setViewText("");
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot pointer */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
      {/* Outer ring cursor */}
      <motion.div
        className="fixed top-0 left-0 border border-indigo-600/30 dark:border-indigo-400/30 rounded-full pointer-events-none z-50 flex items-center justify-center bg-indigo-600/0 text-[8px] font-bold tracking-wider text-white"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          width: viewText ? 52 : isHovered ? 36 : 24,
          height: viewText ? 52 : isHovered ? 36 : 24,
          backgroundColor: viewText ? "rgba(79, 70, 229, 0.9)" : "rgba(79, 70, 229, 0)",
          borderColor: viewText ? "rgba(79, 70, 229, 1)" : isHovered ? "rgba(79, 70, 229, 0.8)" : "rgba(79, 70, 229, 0.25)"
        }}
        transition={{ type: 'tween', duration: 0.15 }}
      >
        {viewText && <span className="animate-fade-in font-display">{viewText}</span>}
      </motion.div>
    </>
  );
};
