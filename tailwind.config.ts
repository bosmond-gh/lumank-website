import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { brand: { orange: "#E87722", dark: "#1A1A1A" } },
      fontFamily: { sans: ["DM Sans", "sans-serif"], serif: ["Playfair Display", "serif"] },
    },
  },
  plugins: [],
} satisfies Config;
