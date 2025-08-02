/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dna-a': '#FF6B6B', // Adenine
        'dna-t': '#4ECDC4', // Thymine
        'dna-c': '#FFD166', // Cytosine
        'dna-g': '#06D6A0', // Guanine
        'neon-blue': '#00f5ff',
        'neon-pink': '#ff00ff',
        'neon-pink': '#ec4899',
        'pink-500': '#ec4899',
        'orange-500': '#f97316',
        'neon-blue': '#00f5ff', 
        'cyan-400': '#22d3ee',
        'blue-500': '#3b82f6',
        cyan: {
        400: '#22d3ee',
        },
        purple: {
        500: '#a855f7',
        }
      },
      dropShadow: {
        'neon': '0 0 6px rgba(34, 211, 238, 0.8)',
      },
      boxShadow: {
        'glow-pink': '0 0 10px #ec4899',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f5ff' },
          '100%': { boxShadow: '0 0 20px #00f5ff, 0 0 30px #ff00ff' },
        }
      }
    },
  },
  plugins: [],
}