import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        purple: "#a855f7",
        blue: "#3b82f6",
        cyan: "#06b6d4",
        green: "#22c55e",
        muted: "#64748b",
      },
      animation: {
        float: "floatAnim 6s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "spin-orbit": "spinOrbit 25s linear infinite",
        "spin-orbit-rev": "spinOrbitRev 40s linear infinite",
      },
      keyframes: {
        floatAnim: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        spinOrbit: {
          from: { transform: "translate(-50%,-50%) rotate(0deg)" },
          to: { transform: "translate(-50%,-50%) rotate(360deg)" },
        },
        spinOrbitRev: {
          from: { transform: "translate(-50%,-50%) rotate(0deg)" },
          to: { transform: "translate(-50%,-50%) rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
