/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#000000",
          light: "#0a0a0a",
          lighter: "#1a1a1a",
        },
        rice: {
          DEFAULT: "#ffffff",
          dim: "#f5f5f7",
          dark: "#86868b",
        },
        cinnabar: {
          DEFAULT: "#ffffff",
          dark: "#e8e8ed",
          light: "#ffffff",
        },
      },
      fontFamily: {
        display: ['"Inter"', '"Noto Sans SC"', "system-ui", "sans-serif"],
        body: ['"Inter"', '"Noto Sans SC"', "system-ui", "sans-serif"],
        serif: ['"Noto Serif SC"', "serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        superwide: "0.35em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
