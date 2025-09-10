"use client";
import { motion } from 'framer-motion';

const Hero = () => {
  const text = "Hi, I'm Jane Doe. I build things for the web.".split("");

  return (
    <section className="h-screen w-full flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-4">
        {text.map((el, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
          >
            {el}
          </motion.span>
        ))}
      </h1>
      <motion.p 
        className="text-lg md:text-2xl text-white mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        A Frontend Developer with a passion for futuristic UI/UX.
      </motion.p>
      <motion.button
        className="px-8 py-3 border border-pink-500 text-pink-500 font-bold"
        whileHover={{
          scale: 1.1,
          backgroundColor: '#ff49db',
          color: '#000000',
          boxShadow: "0px 0px 12px #ff49db"
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.5 }}
      >
        View My Work
      </motion.button>
    </section>
  );
};

export default Hero;