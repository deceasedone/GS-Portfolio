
"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
    outline: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
    }
  };

  return (
    <>
      <motion.div className="custom-cursor-dot" variants={variants} animate="default" />
      <motion.div className="custom-cursor-outline" variants={variants} animate="outline" />
    </>
  );
};

export default CustomCursor;