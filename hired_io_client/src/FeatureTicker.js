import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  "Track your interviews",
  "Prep for your interview",
  "Job search analytics",
];

export default function FeatureTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#f5f7fa] py-2 sm:py-4 md:py-6 flex justify-center items-center shadow-inner">
      <div className="max-w-7xl w-full flex justify-center mx-auto px-2 sm:px-4 md:px-6">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg font-medium text-[#1C375B] text-center"
          >
            {features[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
