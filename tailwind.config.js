/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      100: "100",
      300: "300",
      400: "400",
      700: "700",
      900: "900",
    },
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(300px,1fr))",
      },
      spacing: {
        container: `max(
            1rem,
            calc((100vw - calc(1440px - 1rem * 2)) / 2)
            )`,
        "sm-container": `max(
            1rem,
            calc((100vw - calc(550px - 1rem * 2)) / 2)
            )`,
      },
      colors: {
        blackX: "#212121",
        pinkX: "#FFEFEF",
        redX: "#D24648",
        whiteX: "#FFFFFF",
        darkred: "#9E2E33",
        darkPinkX: "#F39297",
        greyX: "#f5f5f5",
        peach: "#FFD7D7",
        line: "#E4A9A9",
      },
      backgroundImage: {
        banner: "url('../../public/images/bannerImage.png')",
        bannerLaserSkin: "url('../../public/images/laser-skin.png')",
      },
      aspectRatio: {
        sliderDragableImage: "3/1",
      },
    },
  },
  plugins: [],
};
