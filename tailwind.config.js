// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         desktop: "url('./background.jpg')",
//         mobile: "url('/path/to/mobile-background.jpg')",
//       },
//     },
//     fontFamily: {
//       sans: [
//         "Inter",
//         "ui-sans-serif",
//         "system-ui",
//         "-apple-system",
//         "BlinkMacSystemFont",
//         "Segoe UI",
//         "Roboto",
//         "Helvetica Neue",
//         "Arial",
//         "Noto Sans",
//         "sans-serif",
//         "Apple Color Emoji",
//         "Segoe UI Emoji",
//         "Segoe UI Symbol",
//         "Noto Color Emoji",
//       ],
//     },

//     theme: {
//       extend: {
//         backgroundImage: {
//           "gradient-blue":
//             "radial-gradient(ellipse at center, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)",
//         },

//         backgroundPosition: {
//           polka: "8px 8px",
//         },
//         backgroundSize: {
//           polka: "16px 16px",
//         },
//         backgroundColor: {
//           polka: "rgb(15, 15, 30)",
//         },

//       },
//     },
//   },
//   plugins: [require("@tailwindcss/aspect-ratio")],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-blue":
          "radial-gradient(ellipse at center, rgba(70, 130, 180, 0.5) 0%, rgba(15, 15, 30, 0) 70%)",
        desktop: "url('./background.jpg')",
        mobile: "url('/path/to/mobile-background.jpg')",
      },
      backgroundPosition: {
        polka: "8px 8px",
      },
      backgroundSize: {
        polka: "16px 16px",
      },
      backgroundColor: {
        polka: "rgb(15, 15, 30)",
      },
    },
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],

      fontWeight: {
        hairline: 100,
        "extra-light": 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        "extra-bold": 800,
        black: 900,
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
