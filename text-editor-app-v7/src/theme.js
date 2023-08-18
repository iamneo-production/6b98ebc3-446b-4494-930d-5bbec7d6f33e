export const colorTokens = {
  primary: {
    50: "#eff1fe",
    100: "#e3e5fc", // 100
    200: "#cbd0fa",
    300: "#acb1f5",
    400: "#9796f0", // bg
    500: "#776ee6", // main
    600: "#6853d8",
    700: "#5a44be",
    800: "#49399a", // dark
    900: "#3e357a",
    950: "#251f47",
  },
};

export const themeSettings = () => {
  return {
    palette: {
      primary: {
        ...colorTokens.primary,
        dark: colorTokens.primary[700],
        main: colorTokens.primary[500],
        light: colorTokens.primary[50],
      },
      background: {
        default: colorTokens.primary[400],
      },
    },
  };
};
