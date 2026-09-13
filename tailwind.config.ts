import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hack: {
          bg: "#0a0a0a",
          panel: "#0d1110",
          border: "#1a2e1a",
          green: "#00ff41",
          dim: "#4a6a4a",
          amber: "#ffb000",
          cyan: "#00d4aa",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "Consolas", "Courier New", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
