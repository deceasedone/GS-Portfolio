// Centralized projects data used by homepage section and projects page

export const projectsData = [
  {
    title: "Lumora",
    description:
      "A full-stack productivity app designed to unify your workflow. It combines a Pomodoro timer, journal, and task manager with an immersive media experience. The core feature is a real-time Focus Lobby, enabling collaborative work sessions with synchronized timers, live chat, and voice, powered by Next.js and LiveKit.",
    tags: ["Next.js", "TypeScript", "NeonDB", "Framer Motion", "API's"],
    github: "https://github.com/deceasedone/Lumora",
    demo: "https://lumora-pink.vercel.app/",
    images: [
      "/assets/Lumora1.png",
      "/assets/Lumora2.png",
      "/assets/Lumora3.png"
    ],
  },
  {
    title: "LearnAI",
    description:
      "Forge your own AI tutor for any subject. This app transforms real-time voice conversations into a dynamic learning experience, instantly generating smart notes, live transcripts, and custom quizzes from your dialogue. It’s a seamless bridge between curiosity and knowledge, powered by Vapi and the Gemini API.",
    tags: [" Next.js", "Supabase", "Vapi", "Clerk", "Gemini API","TypeScript"],
    github: "https://github.com/deceasedone/saas-lms",
    demo: "https://saas-lms-omega.vercel.app/",
    images: [
      "/assets/Learn1.png",
      "/assets/Learn2.png",
      "/assets/Learn3.png"
    ],
  },
  {
    title: "Second Brain",
    description:
      "A personal workspace designed to tame digital chaos. This application allows you to capture, categorize, and instantly retrieve knowledge from across the web. Engineered to scale, it transforms scattered content into a powerful, searchable library, making your digital life an extension of your memory.",
    tags: ["TypeScript", "React.js","Node.js","Express.js","MongoDB"],
    github: "https://github.com/deceasedone/secondbrain",
    demo: "https://secondbrain-pi.vercel.app/",
    images: [
      "/assets/second1.png",
      "/assets/second2.png",
      "/assets/second3.png"
    ],
  },
  {
    title: "Sign Language Translator",
    description:
      "Engineered to classify sign language from raw video, this project harnesses an Inception v3 CNN for spatial feature extraction and an LSTM network for temporal sequence modeling. This dual-network architecture allows the system to accurately interpret the complex, dynamic patterns of sign language, creating a robust model for human-computer interaction.",
    tags: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/deceasedone/sign_lang_translator_BTP",
    images: [
      "/assets/ml.png",
    ],
  },
  {
    title: "Djikstra Visualizer",
    description:
      "An interactive web application that demystifies one of computer science's most fundamental pathfinding algorithms. This visualizer, built with React, allows users to create mazes and watch in real-time as the algorithm explores nodes and calculates the shortest path, transforming a complex concept into an intuitive and engaging experience.",
    tags: ["React", "JavaScript"],
    github: "https://github.com/deceasedone/djikstravite",
    images: [
      "/assets/sw.png"
    ],
  },

  {
    title: "Bone Fracture Detection",
    description:
      "This project leverages the ResNet50 architecture to create a highly accurate bone fracture detection model. It first classifies the bone type with 99.5% precision, then applies a specialized model to identify fractures. This innovative two-step approach significantly enhances diagnostic accuracy, demonstrating a powerful application of deep learning in medical imaging.",
    tags: ["Python", "TensorFlow", "Keras", "ResNet50", "OpenCV", "Jupyter Notebooks"],
    github: "https://github.com/deceasedone/Bone-fracture-det",
    images: [
      "/assets/ml.png"
    ],
  },
  {
    title: "Survey App",
    description:
      "This MERN stack application empowers users to build and manage surveys effortlessly. It features a secure user system, a versatile survey creator, and a powerful dashboard that visualizes responses in real-time. It’s a practical and powerful tool for gathering actionable insights from any audience.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/deceasedone/surveyappl",
    demo: "https://surveyappl.vercel.app/",
    images: [
"/assets/survey.png"
    ],
  },

  {
    title: "Text Classification Using CNN",
    description:
      "This project uses a CNN to build a text classification model. By leveraging Keras and TensorFlow, it provides an effective solution for automatically sorting and understanding large volumes of text, making it a valuable tool for data-driven applications.",
    tags: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
    github: "https://github.com/deceasedone/textclassif",
    images: [
      "/assets/ml.png"
    ],
  },


{
  title: "Adblock ext",
  description:
    "A lightweight Chrome extension that restores a clean and fast browsing experience by blocking intrusive ads and trackers. It uses a dual approach of blocking ad network requests and dynamically removing ad elements to ensure a seamless, ad-free web.",
  tags: ["JavaScript"],
  github: "https://github.com/deceasedone/adblockext",
  images: [
    "/assets/sw.png",
  ],
},  {
  title: "Food Website",
  description:
    "A Simple interactive Food Restaurent Website",
  tags: ["HTML", "CSS","Bootstrap","JavaScript"],
  github: "github.com/deceasedone/foodweb",
  demo: "https://deceasedone.github.io/foodweb/",
  images: [
    "/assets/food00.png",
    "/assets/food1.png",
  ],
}, 
 {
  title: "Customer Personality Analysis",
  description:
    "An end-to-end data science project that transforms raw customer data into actionable business intelligence. It employs machine learning and clustering techniques to identify distinct personality segments, culminating in a web app for easy analysis.",
  tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Flask"],
  github: "https://github.com/deceasedone/Customer-personality-analysis",
  images: [
    "/assets/ml.png",
  ],
},
{
  title: "AW BLOG",
  description:
    "A blog app made using Appwrite as Backend and Database",
  tags: ["React.js","AppWrite","Redux"],
  github: "https://github.com/deceasedone/Wavelink-connect-new",
  demo: "https://awblog.vercel.app/",
  images: [
    "/assets/blog1.png",
    "/assets/blog2.png"
  ],
},
{
  title: "Wavelink",
  description:
    "A real-time communication platform that enables users to initiate seamless voice and video calls with integrated, low-latency chat. It leverages the power of Agora RTC for high-quality streaming and WebSockets to ensure an interactive and connected user experience.",
  tags: ["React.js","Agora","WebRTC","Websocket"],
  github: "https://github.com/deceasedone/Wavelink-connect-new",
  images: [
    "/assets/sw.png",
  ],
},
];
export default projectsData;