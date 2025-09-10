"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="w-full py-16 px-8 bg-synth-dark-blue">
            <h2 className="text-4xl text-center font-bold text-cyber-pink mb-10">/ contact</h2>
            <div className="max-w-xl mx-auto text-center">
                <p className="mb-8">Have a project in mind or just want to say hi? Feel free to reach out. My inbox is always open.</p>
                <form className="flex flex-col gap-4">
                    <input type="text" placeholder="> your_name" className="bg-transparent border-b-2 border-cyber-cyan p-2 focus:outline-none focus:border-cyber-pink" />
                    <input type="email" placeholder="> your_email" className="bg-transparent border-b-2 border-cyber-cyan p-2 focus:outline-none focus:border-cyber-pink" />
                    <textarea placeholder="> your_message" rows="4" className="bg-transparent border-b-2 border-cyber-cyan p-2 focus:outline-none focus:border-cyber-pink"></textarea>
                    <motion.button 
                        type="submit" 
                        className="px-8 py-3 mt-4 border border-cyber-pink text-cyber-pink font-bold self-center"
                        whileHover={{ scale: 1.1, backgroundColor: '#ff49db', color: '#000000', boxShadow: "0px 0px 12px #ff49db" }}
                    >
                        [SEND_MESSAGE]
                    </motion.button>
                </form>

                <div className="mt-12 flex justify-center gap-8">
                    <motion.a href="#" whileHover={{ scale: 1.2, color: '#32f0ff' }}><FaGithub className="h-8 w-8" /></motion.a>
                    <motion.a href="#" whileHover={{ scale: 1.2, color: '#32f0ff' }}><FaLinkedin className="h-8 w-8" /></motion.a>
                    <motion.a href="#" whileHover={{ scale: 1.2, color: '#32f0ff' }}><FaTwitter className="h-8 w-8" /></motion.a>
                </div>
            </div>
        </section>
    );
};

export default Contact;