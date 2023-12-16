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
          text_light: '#03363d',
          text_dark: '#0b363d',
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
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        '2xl': '0 6px 50px -10px rgb(0 0 0 / 0.25)',
      }
    },

  },
  plugins: [],
};
export default config;
