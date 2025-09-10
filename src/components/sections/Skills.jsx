"use client";
import { motion } from 'framer-motion';

const skillsData = [ "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "TailwindCSS", "Framer Motion", "Figma", "Git", "Docker"];

const Skills = () => {
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            },
        }),
    };

    return (
        <section className="w-full py-16 px-8">
            <h2 className="text-4xl text-center font-bold text-cyber-cyan mb-10">/ skills</h2>
            <ul className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        className="border border-cyber-pink px-6 py-3 text-lg"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                        whileHover={{ scale: 1.1, backgroundColor: '#ff49db', color: '#000000', boxShadow: "0px 0px 12px #ff49db"}}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;