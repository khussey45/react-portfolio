/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0C10",
          900: "#11141B",
          800: "#1A1F29",
          700: "#2A3140",
        },
        fog: {
          100: "#E8ECF3",
          300: "#A9B4C6",
          500: "#6B7689",
        },
        accent: {
          DEFAULT: "#5EEAD4",
          dim: "#134E4A",
        },
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "Menlo", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}
