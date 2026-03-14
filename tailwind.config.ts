import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Neutral/Slate background scale (No blue undertones)
        bg:      "#0a0a0a", // Pure dark neutral
        bg2:     "#121212", // Elevated slate
        bg3:     "#1a1a1a", // Deep surface
        surface: "rgba(255,255,255,0.03)",
        border:  "rgba(255,255,255,0.08)",
        
        // Primary Brand Color: Emerald (High Performance)
        emerald: {
          DEFAULT: "#10b981",
          light:   "#34d399",
          dark:    "#059669",
        },

        // High-Impact Accent: Amber (Use for stats like "97%" or "55%")
        amber: {
          DEFAULT: "#f59e0b",
          light:   "#fcd34d",
          dark:    "#d97706",
        },

        // Text Scale
        text:  "#fafafa", // Off-white for clarity
        muted: "#d1d5db", // Light grey — readable on dark bg
        dim:   "#94a3b8", // Medium grey — readable on dark bg
      },
      fontFamily: {
        // Keeps the "Systems Engineer" aesthetic
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "float":        "float 7s ease-in-out infinite",
        "float-delay":  "float 7s ease-in-out 2.5s infinite",
        "float-delay2": "float 7s ease-in-out 5s infinite",
        "blink":        "blink 1.1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%":     { transform: "translateY(-24px) rotate(2deg)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
