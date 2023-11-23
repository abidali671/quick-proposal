import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          dark: "#10393B",
        },
        green: {
          light: "#68B06E",
        },
        orange: {
          light: "#F4722C",
          light_hover: '#ff8a43',
          dark: "#FF8945",
        },
      },
    },

  },
  plugins: [],
};
export default config;
