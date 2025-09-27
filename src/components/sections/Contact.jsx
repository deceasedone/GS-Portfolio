"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import contactAnimation from "../Lottie/Contact.json" 
import { TextRoll } from "../ui/TextRoll"

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null)
    const { height } = useDimensions(containerRef)
    const headingRef = useRef(null)

    // 👈 1. ADD STATE FOR FORM INPUTS AND SUBMISSION STATUS
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState(''); 

    // 👈 2. CREATE A HANDLER TO UPDATE STATE ON INPUT CHANGE
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // 👈 3. CREATE THE SUBMISSION HANDLER
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formspree.io/f/mrbadgqr', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); 
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };


    return (
        <div className="relative w-full max-w-7xl mx-auto px-4">
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className="relative rounded-2xl overflow-hidden border border-[#1f1f2e] bg-gradient-to-br from-[#0a0a0f] to-[#0f0f1a] shadow-[0_0_40px_rgba(50,240,255,0.06)]"
                style={{ minHeight: "500px" }}
            >
                {/* Animated Sidebar */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#0d1220] to-[#0a0f1a] z-10"
                    variants={sidebarVariants}
                />
                
                {/* Layout Wrapper */}
                <div className="relative z-0 grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* LEFT: Contact Form */}
                    <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                        
                        {/* Centered Heading & Subtitle */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-2">
                                <TextRoll
                                    trigger={true}
                                    textClassName="bg-gradient-to-r from-neon-green via-neon-green to-neon-green bg-clip-text text-transparent"
                                >
                                    {"Get in Touch"}
                                </TextRoll>
                            </h2>
                            <p className="text-gray-400">
                                Let's connect and discuss opportunities
                            </p>
                        </div>

                        {/* 👈 4. WRAP FORM ELEMENTS IN A <form> TAG WITH THE SUBMIT HANDLER */}
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a]/70 border border-[#22263a] text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#32f0ff]/60 focus:border-[#32f0ff] transition-all"
                                    placeholder="Your full name"
                                    value={formData.name}       
                                    onChange={handleChange}    
                                    required                    
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a]/70 border border-[#22263a] text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#32f0ff]/60 focus:border-[#32f0ff] transition-all"
                                    placeholder="your.email@example.com"
                                    value={formData.email}     
                                    onChange={handleChange}    
                                    required                     
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-[#0b0f1a]/70 border border-[#22263a] text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#32f0ff]/60 focus:border-[#32f0ff] transition-all resize-none"
                                    placeholder="Tell me about your project or opportunity..."
                                    value={formData.message}    
                                    onChange={handleChange}     
                                    required                   
                                />
                            </div>

                            <div className="md:col-span-2">
                                <button
                                    type="submit" // 👈 Change type to "submit"
                                    disabled={status === 'sending'} // 👈 Disable button while sending
                                    className="w-full text-white py-3 px-6 rounded-lg font-medium transition-all bg-cyber-orange disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>

                             {/* 👈 5. ADD USER FEEDBACK MESSAGES */}
                            {status === 'success' && <p className="text-center text-green-500 md:col-span-2">Message sent successfully!</p>}
                            {status === 'error' && <p className="text-center text-red-500 md:col-span-2">Something went wrong. Please try again.</p>}
                        </form>
                    </div>

                    {/* RIGHT: Lottie Animation */}
                    <div className="lg:col-span-2 flex items-center justify-center p-6">
                        <Lottie 
                            animationData={contactAnimation} 
                            loop={true} 
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
                
                {/* Social Links */}
                <SocialNavigation isOpen={isOpen} />
                
                {/* Menu Toggle */}
                <MenuToggle toggle={() => setIsOpen(!isOpen)} />
            </motion.div>
        </div>
    )
}

// ... All the other sub-components (SocialNavigation, MenuToggle, etc.) remain the same
// You can copy them from your original file or leave them as they are below.

/* ====== Motion Variants ====== */
const navVariants = { open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } }, closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } } };
const itemVariants = { open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } }, closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } } };
const sidebarVariants = { open: (height = 1000) => ({ clipPath: `circle(${height * 2 + 200}px at 40px 40px)`, transition: { type: "spring", stiffness: 20, restDelta: 2 } }), closed: { clipPath: "circle(30px at 40px 40px)", transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 } } };

/* ====== Social Navigation ====== */
const socialLinks = [ { name: "LinkedIn", url: "https://www.linkedin.com/in/gaurav-sinha-aa4706270/", icon: "💼", color: "#0077B5" }, { name: "Email", url: "gauravsinha01ft@gmail.com", icon: "📧", color: "#EA4335" }, { name: "GitHub", url: "https://github.com/deceasedone", icon: "💻", color: "#333333" }, { name: "Coding", url: "https://deceasedone.github.io/hl-page/", icon: "🧩", color: "#FFA116" }, { name: "Resume", url: "https://drive.google.com/file/d/1auvTVk28_Y25JEH2OVKKG_NUUH8HcD40/view?usp=sharing", icon: "📝", color: "#008000" } ];
const SocialNavigation = ({ isOpen }) => ( <motion.ul className="absolute top-24 left-6 z-20 space-y-4" variants={navVariants} style={{ pointerEvents: isOpen ? 'auto' : 'none' }} > {socialLinks.map((link) => ( <SocialMenuItem key={link.name} link={link} /> ))} </motion.ul> );
const SocialMenuItem = ({ link }) => { const [copied, setCopied] = useState(false); const handleClick = () => { const isEmail = link.name === "Email" || link.url.includes("@"); if (isEmail) { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(link.url) .then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500) }) .catch(() => {}) } } else { window.open(link.url, "_blank") } }; return ( <motion.li className="flex items-center cursor-pointer" variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleClick} aria-label={link.name} title={link.name} > <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4 shadow-[0_0_14px_rgba(50,240,255,0.15)]" style={{ backgroundColor: link.color + '20', border: `2px solid ${link.color}` }} > {link.icon} </div> <div className="px-4 py-2 rounded-lg border-2 min-w-28 bg-[#0b0f1a]/70 text-white shadow-[0_0_14px_rgba(255,73,219,0.08)]" style={{ borderColor: link.color }} > <span className="font-medium text-gray-100">{copied ? "Copied!" : link.name}</span> </div> </motion.li> ) };

/* ====== Menu Toggle Button ====== */
const Path = (props) => ( <motion.path fill="transparent" strokeWidth="3" stroke="#e5e7eb" strokeLinecap="round" {...props} /> );
const MenuToggle = ({ toggle }) => ( <button onClick={toggle} className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#0b0f1a] border border-[#2a2f45] shadow-[0_0_16px_rgba(50,240,255,0.15)] hover:shadow-[0_0_22px_rgba(255,73,219,0.18)] transition-shadow outline-none cursor-pointer z-30 flex items-center justify-center" > <svg width="20" height="20" viewBox="0 0 20 20"> <Path variants={{ closed: { d: "M 2 2.5 L 18 2.5" }, open: { d: "M 3 16.5 L 17 2.5" } }} /> <Path d="M 2 9.423 L 18 9.423" variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} transition={{ duration: 0.1 }} /> <Path variants={{ closed: { d: "M 2 16.346 L 18 16.346" }, open: { d: "M 3 2.5 L 17 16.346" } }} /> </svg> </button> );

/* ====== Hook for Dimensions ====== */
const useDimensions = (ref) => { const dimensions = useRef({ width: 0, height: 0 }); useEffect(() => { if (ref.current) { dimensions.current.width = ref.current.offsetWidth; dimensions.current.height = ref.current.offsetHeight } }, [ref]); return dimensions.current };
