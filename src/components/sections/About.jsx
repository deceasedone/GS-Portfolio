"use client";
import { motion } from 'framer-motion';

const aboutData = {
  bio: "I am a frontend developer based in Neo-Kyoto, with a strong passion for creating immersive and visually stunning digital experiences. My journey into code began with a fascination for cyberpunk aesthetics and interactive storytelling, leading me to specialize in crafting fluid, futuristic user interfaces.",
  timeline: [
    { year: 2021, event: "Started my coding journey, diving deep into JavaScript and modern web frameworks." },
    { year: 2023, event: "Graduated from the OmniTech University with a degree in Digital Systems Design." },
    { year: 2024, event: "Joined CyberCorp as a Junior Frontend Developer, contributing to next-gen interfaces." },
    { year: 2025, event: "Began freelancing to explore more creative and unconventional projects in the digital space." },
  ]
};

const About = () => {
  return (
    <section className="w-full py-16 px-8 bg-cyber-blue">
      <h2 className="text-4xl text-center font-bold text-cyber-pink mb-10">/ about-me</h2>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-lg text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {aboutData.bio}
        </motion.p>
        <div className="relative border-l-2 border-cyber-cyan">
          {aboutData.timeline.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span className="absolute flex items-center justify-center w-6 h-6 bg-cyber-cyan rounded-full -left-3"></span>
              <h3 className="text-lg font-semibold text-cyber-pink">{item.year}</h3>
              <p className="text-base text-white">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;