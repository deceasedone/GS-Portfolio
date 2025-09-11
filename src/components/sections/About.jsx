"use client"; // <-- CORRECTED: Changed "use-client" to "use client"

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import thinkingAnimation from "../Lottie/thinking.json"; // Update the path if needed
import { TextScramble } from "../ui/TextScramble";
import { TextRoll } from "../ui/TextRoll";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section ref={sectionRef} className="w-full py-20 px-6 md:px-12 bg-cyber-blue">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl text-center font-bold text-cyber-pink mb-14">
        <TextRoll trigger={isInView}>{"About Me"}</TextRoll>
      </h2>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        
        {/* LEFT: Text Section */}
        <motion.div
          className="lg:col-span-2 space-y-8 text-center lg:text-left px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <TextScramble
            as="p"
            className="text-xl md:text-2xl leading-relaxed text-gray-300"
            trigger={isInView}
          >
            I'm a <span className="text-cyber-pink font-semibold">Full-Stack Developer</span>, 
            backed by a B.Tech in Information Technology from NSUT with a specialization in{" "}
            <span className="text-cyber-cyan font-semibold">Machine Learning</span>. 
            My approach is to engineer robust, scalable, and efficient end-to-end solutions that live at the intersection of technology and creativity. Inspired by art, music, and{" "}
            <span className="text-cyber-green font-semibold">great design</span>
            —from UI/UX to software and games—I'm actively exploring the worlds of{" "}
            <span className="text-cyber-orange font-semibold">Game Development and Artificial Intelligence</span>, 
            always looking for new ways to build more immersive and intelligent digital experiences.
          </TextScramble>
        </motion.div>

        {/* RIGHT: Lottie Animation */}
        <motion.div
          className="lg:col-span-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Lottie
            animationData={thinkingAnimation}
            loop={true}
            className="w-[20rem] h-[20rem] md:w-[26rem] md:h-[26rem] lg:w-[30rem] lg:h-[30rem]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;