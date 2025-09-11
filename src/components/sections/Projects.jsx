"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { TextRoll } from "../ui/TextRoll";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { Loader } from "../common/Loader"; // Make sure this path is correct
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogDescription,
} from "../ui/MorphingDialog";
import { projectsData as allProjects } from "@/utils/projectsData";

const Projects = ({ limit = null, showMoreLink = false }) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  const projectsToRender = Array.isArray(allProjects)
    ? (limit ? allProjects.slice(0, limit) : allProjects)
    : [];

  const handleShowMoreClick = (e) => {
    e.preventDefault();
    setIsNavigating(true);

    setTimeout(() => {
      router.push('/projects');
    }, 1500); // Adjust delay as needed
  };

  return (
    <section ref={sectionRef} className="w-full py-16 px-8 bg-cyber-blue">
      {/* Conditionally render the loader. It will be a full-screen overlay. */}
      {isNavigating && <Loader />}
      
      <h2 className="text-4xl text-center font-bold text-cyber-pink mb-10">
        <TextRoll trigger={isInView} textClassName="underline underline-offset-4 decoration-synth-cyan">{"Projects"}</TextRoll>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectsToRender.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Your MorphingDialog and project card JSX remains the same */}
            <MorphingDialog>
              <MorphingDialogTrigger className="w-full">
                <div className="bg-synth-dark-blue border border-cyber-pink/60 rounded-xl p-6 shadow-lg cursor-pointer hover:scale-[1.02] transition-transform duration-200">
                  <h3 className="text-xl font-bold text-cyber-cyan">
                    {project.title}
                  </h3>
                  <p className="text-sm mt-2 text-gray-300">
                    {project.description}
                  </p>
                  {/* Preview image or emoji fallback */}
                  <div className="h-40 w-full mt-4 bg-cyber-blue rounded-lg flex items-center justify-center overflow-hidden">
                    {Array.isArray(project.images) && project.images.length > 0 ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.images[0]}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-5xl" role="img" aria-label="screenshot placeholder">🖼️</span>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-cyber-blue text-cyber-cyan px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 text-cyber-cyan">
                      <FaGithub className="h-6 w-6" />
                      {project.demo ? (
                        <FiExternalLink className="h-6 w-6" />
                      ) : null}
                    </div>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="relative bg-synth-dark-blue rounded-2xl p-8 max-w-lg w-full border border-cyber-pink/60">
                  <MorphingDialogClose />
                  <MorphingDialogTitle className="text-2xl font-bold text-cyber-cyan mb-4">
                    {project.title}
                  </MorphingDialogTitle>
                  <MorphingDialogDescription className="text-sm text-gray-300 mb-6">
                    {project.description}
                  </MorphingDialogDescription>
                  {/* Simple image carousel with emoji fallback */}
                  <Carousel images={project.images} title={project.title} />
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-cyber-blue text-cyber-cyan px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 text-cyber-cyan hover:text-cyber-pink"
                    >
                      <FaGithub /> GitHub
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        className="flex items-center gap-2 text-cyber-cyan hover:text-cyber-pink"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    ) : null}
                  </div>
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </motion.div>
        ))}
      </div>
      {showMoreLink && (
        <div className="mt-10 text-center">
          <Link 
            href="/projects" 
            onClick={handleShowMoreClick}
            className="inline-block px-6 py-3 border border-cyber-pink/60 rounded-lg text-cyber-cyan hover:text-cyber-pink hover:scale-[1.02] transition"
          >
            Show more projects
          </Link>
        </div>
      )}
    </section>
  );
};

export default Projects;

// Lightweight carousel component for project screenshots
const Carousel = ({ images, title }) => {
  const validImages = Array.isArray(images) ? images : [];
  const [index, setIndex] = useState(0);

  const hasImages = validImages.length > 0;
  const showPrev = () => setIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  const showNext = () => setIndex((prev) => (prev + 1) % validImages.length);

  return (
    <div className="mb-6">
      <div className="relative h-64 w-full bg-cyber-blue rounded-xl flex items-center justify-center overflow-hidden border border-cyber-pink/40">
        {hasImages ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={validImages[index]}
            alt={`${title} screenshot ${index + 1}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-7xl" role="img" aria-label="screenshot placeholder">🖼️</span>
        )}

        {hasImages && (
          <>
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-synth-dark-blue/70 text-cyber-cyan px-3 py-1 rounded hover:bg-synth-dark-blue/90"
              aria-label="Previous screenshot"
            >
              ◀
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-synth-dark-blue/70 text-cyber-cyan px-3 py-1 rounded hover:bg-synth-dark-blue/90"
              aria-label="Next screenshot"
            >
              ▶
            </button>
          </>
        )}
      </div>

      {hasImages && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {validImages.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setIndex(dotIdx)}
              className={`h-2 w-2 rounded-full ${index === dotIdx ? "bg-cyber-pink" : "bg-cyber-cyan/40"}`}
              aria-label={`Go to screenshot ${dotIdx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};