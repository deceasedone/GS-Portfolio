"use client";

import { motion } from "framer-motion";
import Loader from "../ui/Loader"; // adjust path if needed

const ComingSoon = ({ title }) => {
  return (
    <motion.div
      className="p-8 border-2 border-dashed border-cyber-orange/50 text-center rounded-xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Replace Lock with Loader */}
      <div className="mx-auto flex justify-center">
        <Loader />
      </div>

      {/* Title */}
      <h3 className="text-2xl mt-6 font-bold text-white">{title}</h3>

      {/* Status */}
      <p className="text-cyber-orange text-xl mt-3 font-semibold uppercase tracking-wide">
        🚧 In Progress — To be implemented later 🚧
      </p>

 
    </motion.div>
  );
};

export default ComingSoon;
