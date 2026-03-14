import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#060610",
        bg2: "#0d0d1a",
        bg3: "#12122a",
        surface: "#1a1a35",
        surface2: "#22223f",
        border: "#2a2a50",
        purple: {
          DEFAULT: "#7c3aed",
          light: "#a78bfa",
        },
        teal: {
          DEFAULT: "#06b6d4",
          light: "#67e8f9",
        },
        pink: {
          DEFAULT: "#ec4899",
        },
        muted: "#94a3b8",
        dim: "#64748b",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-dot": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        "float-delay2": "float 6s ease-in-out 4s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
