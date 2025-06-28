/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const sharedConfig = require("@repo/tailwind-config")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/shared/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/shared/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/shared/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [sharedConfig],
};
