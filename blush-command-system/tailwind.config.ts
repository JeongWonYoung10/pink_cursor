import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: {
          bg: "#FFF7FA",
          soft: "#FFD1DC",
          panel: "#F8C8DC",
          mist: "#EFCFE3",
          action: "#FF4F9A",
          hover: "#FF5DA2",
          coral: "#FF9A9E",
        },
        plum: {
          strong: "#3A2030",
          muted: "#7F5268",
          soft: "#9B6C82",
        },
      },
      borderRadius: {
        bcXs: "var(--bc-radius-xs)",
        bcSm: "var(--bc-radius-sm)",
        bcMd: "var(--bc-radius-md)",
        bcLg: "var(--bc-radius-lg)",
        bcXl: "var(--bc-radius-xl)",
        bc2xl: "var(--bc-radius-2xl)",
        bcShell: "var(--bc-radius-shell)",
      },
      boxShadow: {
        bcSurface: "var(--bc-shadow-surface)",
        bcSoft: "var(--bc-shadow-soft)",
        bcAction: "var(--bc-shadow-action)",
        bcAgent: "var(--bc-shadow-agent)",
      },
    },
  },
  plugins: [],
} satisfies Config;
