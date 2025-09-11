"use client";
import { motion } from "framer-motion";
import PathDrawing from "../ui/PathDrawing";
import MinimalHero from "../ui/hero-minimalism";
import Lottie from "lottie-react";
import workingAnimation from "../Lottie/Working.json"; // 🔹 adjust path if needed

const Hero = () => {
  const text = "Hi, I'm Gaurav Sinha. I build things for the web.".split("");
  
  // Define the start and end index for "Gaurav Sinha" in the text array
  const nameStartIndex = 8;
  const nameEndIndex = 19;

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black px-6 overflow-hidden">
      {/* Background Component */}
      <div className="absolute inset-0 z-0">
        <MinimalHero />
      </div>

      {/* Path drawings in corners */}
      <div className="absolute top-0 left-0 w-[300px] opacity-15 z-10">
        <PathDrawing />
      </div>
      <div className="absolute bottom-0 right-0 w-[300px] opacity-50 z-10">
        <PathDrawing />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
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
                // 🔹 CHANGED COLOR HERE
                className={i >= nameStartIndex && i <= nameEndIndex ? "text-pink-500" : ""}
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
                Crafting interactive worlds and seamless applications, from game prototypes to full-stack web solutions.
          </motion.p>
        </div>

        {/* Lottie Animation */}
        <motion.div
          className="flex-1 mt-10 md:mt-0 md:ml-10 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 3, duration: 0.6 }}
        >
          <div>
            <Lottie
              animationData={workingAnimation}
              loop
              autoplay
              className="w-[350px] h-[350px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;