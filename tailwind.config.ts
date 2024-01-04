import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: ["Noto Sans"],
    },
    extend: {
      colors: {
        greyish: "#F4F4F6",
        grey: "#E2E2E2",
      },
    },
    margin: {
      "1": "10px",
      "2": "20px",
      "3": "30px",
      "4": "40px",
      "5": "50px",
      "12": "120px",
    },
    padding: {
      "1": "10px",
      "2": "20px",
      "3": "30px",
      "4": "20px",
      "5": "50px",
      "6": "64px",
    },
    gap: {
      "4": "50px",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;
