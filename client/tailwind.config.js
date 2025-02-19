/** @type {import('tailwindcss').Config} */
const px0_10 = Object.fromEntries(Array.from({ length: 11 }, (_, i) => [`${i}`, `${i}px`]));
const px0_100 = Object.fromEntries(Array.from({ length: 101 }, (_, i) => [`${i}`, `${i}px`]));
const px0_200 = Object.fromEntries(Array.from({ length: 201 }, (_, i) => [`${i}`, `${i}px`]));

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Tailwind 적용할 파일 경로
  theme: {
    extend: {
      borderWidth: px0_10,
      fontSize: px0_100,
      lineHeight: px0_100,
      minWidth: px0_200,
      minHeight: px0_200,
      spacing: px0_200,
    },
  },
  plugins: [],
};
