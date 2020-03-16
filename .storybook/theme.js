import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "#0038ff",
  colorSecondary: "#0038ff",

  // UI
  appBg: "#f8f9fa",
  appContentBg: "white",
  appBorderColor: "silver",
  appBorderRadius: 4,

  // Typography
  fontBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "#495057",
  barSelectedColor: "#495057",
  barBg: "white",

  brandTitle: "SmDataViz",
  brandUrl: "https://github.com/hvanova/dataviz"
});
