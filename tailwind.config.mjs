// tailwind.config.mjs - CORRECT AND COMPLETE CODE

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#000000',
        'neon-pink': '#ff00c1',
        'neon-yellow': '#fff400',
        'neon-blue': '#00ecff',
        'neon-green': '#22ff00',
        'cyber-pink': '#ff49db',
        'cyber-blue': '#1c1c3e',
        'cyber-cyan': '#32f0ff',
        'cyber-orange': '#ff8132',
        'cyber-purple': '#5a347b',
        'synth-purple': '#711c91',
        'synth-magenta': '#ea00d9',
        'synth-cyan': '#0abdc6',
        'synth-blue': '#133e7c',
        'synth-dark-blue': '#091833',
      },
      fontFamily: {
        'cyber': ['"Orbitron"', 'sans-serif'],
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-5px, 5px)' },
          '40%': { transform: 'translate(-5px, -5px)' },
          '60%': { transform: 'translate(5px, 5px)' },
          '80%': { transform: 'translate(5px, -5px)' },
          '100%': { transform: 'translate(0)' },
        }
      },
      animation: {
        'flicker': 'flicker 1.5s infinite',
        'glitch': 'glitch 0.3s linear infinite alternate-reverse',
      }
    },
  },
  plugins: [],
};

export default config;