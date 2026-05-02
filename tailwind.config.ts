import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Paleta autoral Integração AJPDB — bordeaux + ouro velho + travertino
        burgundy: {
          50:  "#fdf3f4",
          100: "#fbe4e7",
          200: "#f5c0c7",
          300: "#ed929d",
          400: "#e25b6d",
          500: "#cc3548",
          600: "#7a2030",
          700: "#5e1a22", // PRINCIPAL — cor de marca
          800: "#3e1218",
          900: "#2e0a10", // bordeaux escuríssimo
          950: "#1a0508",
        },
        gold: {
          50:  "#faf6ec",
          100: "#f0dfa8",
          200: "#e8d4a0",
          300: "#d4b87a",
          400: "#c9a96b", // OURO VELHO claro
          500: "#b89968", // OURO VELHO médio
          600: "#a08350",
          700: "#8b7349",
          800: "#6b5530",
          900: "#5a4528",
          950: "#3c2a18",
        },
        travertino: {
          50:  "#f8efd8",
          100: "#f0e6d2", // FUNDO PRINCIPAL claro
          200: "#ead8a8",
          300: "#ddd0a8",
          400: "#c8b896", // BORDA principal
          500: "#a89878",
          600: "#807260",
          700: "#5a4528",
          800: "#3c2a18",
          900: "#2c2018",
          950: "#1a0d10",
        },
        emerald_oliva: {
          400: "#5a6b3e",
          500: "#3c5828",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Fraunces", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter Tight", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.35s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
