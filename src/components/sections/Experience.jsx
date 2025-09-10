"use client";
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: "Frontend Developer",
    company: "CyberCorp",
    date: "2023 - Present",
    description: "Developing and maintaining user interfaces for high-traffic web applications, focusing on performance and user experience.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Vercel"]
  },
  {
    role: "UI/UX Intern",
    company: "SynthWave Solutions",
    date: "Summer 2022",
    description: "Assisted the design team in creating wireframes, prototypes, and user flows for a new mobile application.",
    tech: ["Figma", "Adobe XD", "User Research"]
  },
];

const Experience = () => {
  return (
    <section className="w-full py-16 px-8">
      <h2 className="text-4xl text-center font-bold text-cyber-cyan mb-10">/ experience</h2>
      <div className="max-w-4xl mx-auto">
        {experienceData.map((job, index) => (
          <motion.div
            key={index}
            className="mb-8 p-6 border-2 border-synth-purple bg-synth-dark-blue"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-cyber-pink">{job.role} - <span className="text-white">{job.company}</span></h3>
            <p className="text-sm text-gray-400 mb-2">{job.date}</p>
            <p className="mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.tech.map(t => (
                <span key={t} className="text-sm bg-cyber-blue text-cyber-cyan px-2 py-1">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;