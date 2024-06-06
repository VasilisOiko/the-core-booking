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
      height: {
        'rest-screen': 'calc(100vh - 64px)',
      }
    },
  },
  plugins: [],
};
export default config;
