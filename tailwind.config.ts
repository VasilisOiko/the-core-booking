import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,jpg}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1600px"
    },
    fontFamily: {
      anton: ["Anton", "arial", "sans-serif"],
    },
    extend: {
      height: {
        'rest-screen': 'calc(100vh - 64px)',
      }
    },
  },
  plugins: [],
};
export default config;
