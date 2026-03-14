import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      "#030712",
        bg2:     "#060b1a",
        bg3:     "#0a1128",
        surface: "rgba(255,255,255,0.03)",
        border:  "rgba(255,255,255,0.08)",
        indigo: {
          DEFAULT: "#6366f1",
          light:   "#a5b4fc",
          dark:    "#4f46e5",
        },
        emerald: {
          DEFAULT: "#10b981",
          light:   "#34d399",
        },
        amber: {
          DEFAULT: "#f59e0b",
          light:   "#fcd34d",
        },
        text:  "#f1f5f9",
        muted: "#94a3b8",
        dim:   "#475569",
      },
      fontFamily: {
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
