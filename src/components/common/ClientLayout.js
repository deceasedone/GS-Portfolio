// src/components/common/ClientLayout.js
"use client"; // This is crucial! It marks the component as a Client Component.

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './Loader';

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loader after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3000 milliseconds = 3 seconds

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      {!loading && children}
    </>
  );
}