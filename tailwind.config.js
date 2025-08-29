/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#38B6FF", // teal/blue gradient base
          dark: "#1E4D6B",   // darker shade for navbar/footer
          light: "#E6F7FF",  // light accent bg
        },
        secondary: {
          DEFAULT: "#C5FF41", // neon green accent (Medora text / CTA)
          dark: "#8CCF00",
          light: "#E9FFC9",
        },
        background: {
          DEFAULT: "#0B2C3D", // dark blue-green bg
          card: "#123F52",    // card / section backgrounds
        },
        neutral: {
          DEFAULT: "#F4F7FA", // general light gray
          dark: "#333333",
        },
        success: {
          DEFAULT: "#4ADE80", // progress green
        },
        warning: {
          DEFAULT: "#FACC15", // yellow accent
        },
        info: {
          DEFAULT: "#38BDF8", // cyan info
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
