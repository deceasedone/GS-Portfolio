"use client";
import { motion } from 'framer-motion';
import { FiLock } from 'react-icons/fi';

const ComingSoon = ({ title }) => {
    return (
        <motion.div 
          className="p-8 border-2 border-dashed border-cyber-orange/[0.5] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            <FiLock className="mx-auto h-12 w-12 text-cyber-orange animate-flicker" />
            <h3 className="text-2xl mt-4 font-bold text-white">{title}</h3>
            <p className="text-cyber-orange text-4xl mt-2 font-extrabold animate-glitch">[LOCKED]</p>
        </motion.div>
    );
};

export default ComingSoon;