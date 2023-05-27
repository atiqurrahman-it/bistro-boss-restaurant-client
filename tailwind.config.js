/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#34efa1",

          secondary: "#c40bae",

          accent: "#f4d32c",

          neutral: "#312834",

          "base-100": "#E3E0F0",

          info: "#619DD1",

          success: "#48E587",

          warning: "#DEB212",

          error: "#E8715E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
