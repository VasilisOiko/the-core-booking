import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,jpg}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      anton: ["Anton", "arial", "sans-serif"],
    },
    extend: {
      colors: {
        neptune: "#67BDAE",
        "blue-zodiac": "#14225a",
        azure: "#00a0ff",
        "light-gray": "#a1a8ad",
        "dark-gray": "##212121",
        // red
        shiraz: "#BA122B",
        "firebrick": "#7D0C1D",
        // green
        "greenish-blue": "#2a8979",
        "sea-mist": "#bcdcd7",
        "dark-green-blue": "#1e6156",
        "gable-green": "#123b34"
      },
      scale: {
        "20": "0.20"
      },
      safelist: [
        "brand-red", // Add more classes as needed
        // Patterns are also supported
        "brand-*", // Safelists all brand color utilities
      ],
      backgroundImage: {
        "glass-effect":
          "shadow-[0_8px_32px_0_rgba(_31,38,135,0.37_)] backdrop-blur-[_10px_] rounded-[10px]",
        "blurry-gradient": "url[('./public/blurry-gradient-haikei')]",
      },
    },
  },
  plugins: [],
};
export default config;
