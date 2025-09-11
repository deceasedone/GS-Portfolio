"use client";

import { AnimatedTabs } from "../ui/animated-tabs";
import { TextRoll } from "../ui/TextRoll";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Lottie from "lottie-react";
import programmingComputer from "../Lottie/ProgrammingComputer.json";

const experienceData = [
  {
    id: "frontend",
    label: "Software Developer Intern",
    logo: "/assets/material.png",
    content: (
      <div className="flex gap-6 items-start">
        {/* Company Logo */}
        <div className="w-16 h-16 flex-shrink-0">
          <img
            src="/assets/material.png"
            alt="Material Logo"
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        {/* Job Details */}
        <div>
          <h3 className="text-2xl font-bold text-cyber-pink">
          Software Developer Intern - <span className="text-white">Material</span>
          </h3>
          <p className="text-sm text-gray-400 mb-2">04/2025 - Present</p>
          <p className="mb-4">
  Developed responsive frontends and contributed to microservice backends, 
  enhancing scalability and user experience while also improving SEO and site performance.
</p>

          <div className="flex flex-wrap gap-2">
            {["Drupal", "React.js", "Spring Boot", "MongoDB", "PostgreSQL", "Docker","AWS"].map(
              (t) => (
                <span
                  key={t}
                  className="text-sm bg-cyber-blue text-cyber-cyan px-2 py-1 rounded"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "intern",
    label: "Full Stack Developer Intern",
    logo: "/assets/ineuron.png",
    content: (
      <div className="flex gap-6 items-start">
        {/* Company Logo */}
        <div className="w-16 h-16 flex-shrink-0">
          <img
            src="/assets/ineuron.png"
            alt="iNeuron Logo"
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        {/* Job Details */}
        <div>
          <h3 className="text-2xl font-bold text-cyber-pink">
          Full Stack Developer Intern -{" "}
            <span className="text-white">iNeuron</span>
          </h3>
          <p className="text-sm text-gray-400 mb-2">09/2024-11/2024</p>
          <p className="mb-4">
  Worked on a survey application with the development team, implementing 
  core features and improving overall user experience.
</p>

          <div className="flex flex-wrap gap-2">
            {["MongoDB", "Express.js", "React.js", "Node.js"].map((t) => (
              <span
                key={t}
                className="text-sm bg-cyber-blue text-cyber-cyan px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? experienceData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === experienceData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section ref={sectionRef} className="w-full py-20 px-8">
      <h2 className="text-4xl text-center font-bold text-cyber-cyan mb-12">
        <TextRoll
          trigger={isInView}
          textClassName="underline underline-offset-4 decoration-cyber-pink"
        >
          {"Experience"}
        </TextRoll>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side: Lottie Animation */}
        <div className="flex justify-center">
          <Lottie
            animationData={programmingComputer}
            loop
            autoplay
            className="w-[400px] md:w-[500px] lg:w-[600px] h-auto"
          />
        </div>

        {/* Right side: Experience Tabs */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-synth-purple text-white hover:bg-synth-dark-blue transition"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-12 top-1/2 -translate-y-1/2 p-2 rounded-full bg-synth-purple text-white hover:bg-synth-dark-blue transition"
          >
            <ChevronRight size={28} />
          </button>

          <AnimatedTabs
            tabs={experienceData.map((job) => ({
              id: job.id,
              label: job.label,
              content: job.content,
            }))}
            activeTab={experienceData[activeIndex].id}
            onTabChange={(id) => {
              const idx = experienceData.findIndex((j) => j.id === id);
              if (idx !== -1) setActiveIndex(idx);
            }}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
