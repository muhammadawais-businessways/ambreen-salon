/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: "#d9d9d9",
        lavenderblush: { "100": "#fdedfb", "200": "#faf0f8", "300": "#f7eaf7" },
        violet: { "100": "#f175e4", "200": "rgba(252, 101, 232, 0.42)" },
        gray: { "100": "#fffdfd", "200": "#060606" },
        thistle: "rgba(245, 199, 238, 0.5)",
        lavender: "#fce7fa",
        pink: "#e9bace",
        snow: "#fef7f7",
        fuchsia: { "100": "#f331e0", "200": "#fa07ff" },
        darkgray: "#a4a2a2",
      },
      fontFamily: {
        kalam: "Kalam",
        "josefin-slab": "'Josefin Slab'",
        jomolhari: "Jomolhari",
        "abhaya-libre": "'Abhaya Libre'",
        "josefin-sans": "'Josefin Sans'",
        inherit: "inherit",
        judson: "Judson",
        jejuhallasan: "JejuHallasan",
      },
    },
    fontSize: {
      "2xs": "20px",
      xs: "22px",
      sm: "25px",
      base: "30px",
      lg: "40px",
      xl: "50px",
    },
  },
  corePlugins: { preflight: false },
};
