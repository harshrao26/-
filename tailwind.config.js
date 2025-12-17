// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#e6f9ff",
          100: "#ccf3ff",
          200: "#99e7ff",
          300: "#66dbff",
          400: "#33cfff",
          500: "#00d0ff",
          600: "#00a3cc",
          700: "#007a99",
          800: "#005266",
          900: "#002933",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        "dot-pattern":
          "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
        dot: "20px 20px",
      },
    },
  },
};
