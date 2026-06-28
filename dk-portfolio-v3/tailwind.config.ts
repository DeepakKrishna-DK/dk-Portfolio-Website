import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020408",
        surface:    "#040C14",
        "surface-2":"#071525",
        foreground: "#E8F4F8",
        muted:      "#7A93B2",
        "muted-2":  "#3A5270",
        primary:    "#00C8FF",
        "primary-dim":"rgba(0,200,255,0.12)",
        secondary:  "#00FF7F",
        gold:       "#D4AF37",
        "gold-dim": "rgba(212,175,55,0.12)",
        alert:      "#FF3B30",
        violet:     "#8B5CF6",
        orange:     "#FF6B35",
        border:         "rgba(0,200,255,0.08)",
        "border-mid":   "rgba(0,200,255,0.18)",
        "border-hi":    "rgba(0,200,255,0.4)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body:    ["var(--font-inter)", "system-ui", "sans-serif"],
        mono:    ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "blink":       "blink 1.1s step-end infinite",
        "float":       "float 8s ease-in-out infinite",
        "spin-slow":   "spin 60s linear infinite",
        "noise":       "noiseAnim 12s steps(10) infinite",
        "marquee-l":   "marqueeL 30s linear infinite",
        "ping-slow":   "ping 3s cubic-bezier(0,0,.2,1) infinite",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "1" },
          "50%":     { opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-14px)" },
        },
        noiseAnim: {
          "0%":  { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-5%)" },
          "20%": { transform: "translate(-10%,5%)" },
          "30%": { transform: "translate(5%,-10%)" },
          "40%": { transform: "translate(-5%,15%)" },
          "50%": { transform: "translate(-10%,5%)" },
          "60%": { transform: "translate(15%,0)" },
          "70%": { transform: "translate(0,10%)" },
          "80%": { transform: "translate(-15%,0)" },
          "90%": { transform: "translate(10%,5%)" },
          "100%":{ transform: "translate(5%,0)" },
        },
        marqueeL: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
