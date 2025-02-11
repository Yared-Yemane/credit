/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        custom: ["CustomFont", "sans-serif"], // Custom self-hosted font
        poppins: ["Poppins", "sans-serif"], // Google Font "Poppins"
        roboto: ["Roboto", "sans-serif"], // Google Font "Roboto"
        nunito: ["NunitoSans", "sans-serif"], // Google Font "Nunito-Sans"
      },
    },
  },
  plugins: [],
};
