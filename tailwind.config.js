module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  // Hover styles only on pointers that can hover, so a tap never leaves a
  // "stuck" hover state on touch screens.
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        tablet: "1.5rem",
        laptop: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Hind", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
