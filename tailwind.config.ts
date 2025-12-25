import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "portfolio-black": "#000000",
        "portfolio-white": "#f5f5f7",
        "portfolio-gray": "#86868b",
        "portfolio-border": "#1d1d1f",
      },
    },
  },
  plugins: [],
};
export default config;
