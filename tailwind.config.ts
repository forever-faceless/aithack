import { title } from "process";
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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Doto:["Doto", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #7d72ff, #26DDA4)',
      },
    },
  },
  plugins: [],
};
export default config;
