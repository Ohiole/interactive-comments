import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: {
          DEFAULT: "hsl(238, 40%, 52%)",
          "100": "hsl(228, 33%, 97%)",
          "300": "hsl(239, 57%, 85%)"
        },
        gray: {
          DEFAULT: "hsl(223, 19%, 93%)",
          "400": "hsl(211, 10%, 45%)",
          "500": "hsl(212, 24%, 26%)"
        }
      },
      fontFamily: {
        "rubik": ["var(--font-rubik)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
