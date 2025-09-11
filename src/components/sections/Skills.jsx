"use client";
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { TextRoll } from "../ui/TextRoll";
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const skillsData = {
    "SDE": {
        skills: [
            "C++", "Python", "Java", "JavaScript", "TypeScript", "React.js", 
            "Next.js", "Node.js", "Express.js", "Spring Boot",
            "SQL", "PostgreSQL", "MongoDB", "Drupal","Docker", "Git", "GitHub",
            "AWS", "GCP", "WebRTC", "C#", "HTML", "Tailwind CSS"
        ],
        color: "from-indigo-500 to-purple-500"
    },
"ML": {
  skills: [
    "Machine Learning","Deep Learning","Supervised Learning","Unsupervised Learning",
    "Reinforcement Learning","Computer Vision","GenAI", "Python"
    
    
    ,"NumPy","Pandas","Matplotlib","Seaborn","Scikit-learn","TensorFlow","Keras","OpenCV","Jupyter Notebook",
    
  ],
  color: "from-cyan-500 to-blue-500"
},

    "Misc": {
        skills: [
            "System Design","Data Structures & Algorithms", "Object Oriented Programming",
            "Agile", "Figma", "Unity"
        ],
        color: "from-emerald-500 to-green-500"
    }
};

const categoryKeys = Object.keys(skillsData);

const Skills = () => {
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

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
        exit: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.2,
            }
        }
    };

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

    const handleNext = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categoryKeys.length);
    };

    const handlePrev = () => {
        setCurrentCategoryIndex((prevIndex) => (prevIndex - 1 + categoryKeys.length) % categoryKeys.length);
    };

    const currentCategory = categoryKeys[currentCategoryIndex];
    const { skills, color } = skillsData[currentCategory];

    return (
        <section ref={sectionRef} className="w-full py-16 px-10 relative">
            <span className="absolute left-4 top-4 text-sm md:text-base font-semibold uppercase tracking-wider text-black px-3 py-1 rounded-full bg-neon-yellow shadow-[0_0_10px_var(--color-neon-yellow)] transition">
                Skills
            </span>
            <div className="flex items-center justify-center gap-4 mb-10">
                <motion.button
                    onClick={handlePrev}
                    className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronLeft size={24} />
                </motion.button>
                <h2 className="text-4xl text-center font-bold text-cyber-cyan w-48">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <TextRoll trigger={isInView}>{currentCategory}</TextRoll>
                        </motion.div>
                    </AnimatePresence>
                </h2>
                <motion.button
                    onClick={handleNext}
                    className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronRight size={24} />
                </motion.button>
            </div>
            <div className="relative max-w-4xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.ul
                        key={currentCategory}
                        className="flex flex-wrap justify-center gap-4"
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={{}}
                    >
                        {skills.map((skill, index) => (
                            <motion.li
                                key={skill}
                                className="text-lg"
                                variants={fadeInAnimationVariants}
                                custom={index}
                                whileHover={{ scale: 1.05 }}
                            >
                                <button type="button" className="p-[3px] relative">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-lg`} />
                                    <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                                        {skill}
                                    </div>
                                </button>
                            </motion.li>
                        ))}
                    </motion.ul>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Skills;