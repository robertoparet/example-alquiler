import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nature: {
          50: '#f7f7f5',
          100: '#ede9e1',
          200: '#ddd4c1',
          300: '#c8b999',
          400: '#b39e6f',
          500: '#a18856',
          600: '#8d764a',
          700: '#73603e',
          800: '#5f4f36',
          900: '#52432f',
        },
        forest: {
          50: '#f4f6f4',
          100: '#e6ebe6',
          200: '#cdd6cd',
          300: '#a9b8a9',
          400: '#7f947f',
          500: '#607760',
          600: '#4b5f4b',
          700: '#3d4e3d',
          800: '#333f33',
          900: '#2b352b',
        },
        earth: {
          50: '#faf9f7',
          100: '#f2f0ea',
          200: '#e4dfd4',
          300: '#d1c8b7',
          400: '#bab094',
          500: '#a89878',
          600: '#978268',
          700: '#7d6a57',
          800: '#67574a',
          900: '#54473d',
        }
      },
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
