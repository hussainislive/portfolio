import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-manrope)"],
        mono: ["var(--font-ibm-plex-mono)"]
      },
      colors: {
        surface: "rgb(var(--surface) / <alpha-value>)",
        surfaceAlt: "rgb(var(--surface-alt) / <alpha-value>)",
        textMain: "rgb(var(--text-main) / <alpha-value>)",
        textMuted: "rgb(var(--text-muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accentSoft: "rgb(var(--accent-soft) / <alpha-value>)"
      },
      boxShadow: {
        card: "0 20px 60px -20px rgba(3, 14, 38, 0.28)"
      },
      backgroundImage: {
        "radial-fade":
          "radial-gradient(circle at 20% 20%, rgba(77, 188, 252, 0.16), transparent 38%), radial-gradient(circle at 80% 0%, rgba(240, 97, 40, 0.12), transparent 34%)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        }
      },
      animation: {
        marquee: "marquee 34s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
