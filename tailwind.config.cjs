/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "60-40": "60% 40%",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["night", "autumn"],
  },
};
