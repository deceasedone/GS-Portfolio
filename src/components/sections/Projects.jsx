"use client";
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"; // Aceternity UI component
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

// Dummy Data
const projectsData = [
    {
        title: "Project Alpha",
        description: "A futuristic data visualization platform for monitoring network anomalies using Three.js and D3.",
        tags: ["Next.js", "Three.js", "WebSocket"],
        github: "#",
        demo: "#"
    },
    {
        title: "Project Beta",
        description: "An interactive PWA for a neo-noir comic book series, featuring parallax effects and generative art.",
        tags: ["React", "GSAP", "PWA"],
        github: "#",
        demo: "#"
    },
    {
        title: "Project Gamma",
        description: "An online marketplace for cyberpunk digital assets, built with a focus on security and performance.",
        tags: ["SvelteKit", "Stripe", "Auth.js"],
        github: "#",
        demo: "#"
    },
];

// Helper: Let's create the 3d-card component file first
// 1. Create `src/components/ui` directory
// 2. Create `src/components/ui/3d-card.jsx` and paste the code from: https://ui.aceternity.com/components/3d-card

const Projects = () => {
    return (
        <section className="w-full py-16 px-8 bg-cyber-blue">
            <h2 className="text-4xl text-center font-bold text-cyber-pink mb-10">/ projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {projectsData.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <CardContainer>
                            <CardBody className="bg-synth-dark-blue relative group/card border-cyber-pink/[0.6] w-auto h-auto rounded-xl p-6 border">
                                <CardItem translateZ="50" className="text-xl font-bold text-cyber-cyan">
                                    {project.title}
                                </CardItem>
                                <CardItem as="p" translateZ="60" className="text-sm mt-2">
                                    {project.description}
                                </CardItem>
                                <CardItem translateZ="100" className="w-full mt-4">
                                    <div className="h-48 w-full bg-cyber-blue rounded-xl" /> {/* Placeholder for screenshot */}
                                </CardItem>
                                <div className="flex justify-between items-center mt-6">
                                    <CardItem translateZ={20} className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                          <span key={tag} className="text-xs bg-cyber-blue text-cyber-cyan px-2 py-1">{tag}</span>
                                        ))}
                                    </CardItem>
                                    <CardItem translateZ={20} className="flex gap-4">
                                        <a href={project.github} target="_blank"><FaGithub className="h-6 w-6 hover:text-cyber-pink"/></a>
                                        <a href={project.demo} target="_blank"><FiExternalLink className="h-6 w-6 hover:text-cyber-pink"/></a>
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;