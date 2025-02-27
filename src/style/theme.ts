const theme = {
  dark: {
    body: {
      100: "#161c24",
    },
    grey: {
      100: "#fff",
      200: "#c2c2c2",
      300: "#a3a3a3",
      400: "#858585",
      500: "#666666",
      600: "#525252",
      700: "#3d3d3d",
      800: "#292929",
      900: "#141414",
    },
    card: {
      100: "#212b36",
      200: "#1B1827",
      300: "#222034",
      400: "#30304D",
      500: "#8C74CF",
      600: "#795EC7",
      700: "#6647BF",
      800: "#4F3599",
      900: "#39276F",
    },
    button: {
      100: "#cbd5e1",
    },
    description: { 100: "#cbd5e1" },
  },
  light: {
    body: {
      100: "#FFF",
    },
    grey: {
      100: "#000",
      200: "#292929",
      300: "#3d3d3d",
      400: "#252525",
      500: "#666666",
      600: "#858585",
      700: "#a3a3a3",
      800: "#c2c2c2",
      900: "#e0e0e0",
    },
    card: {
      100: "#ffff",
      200: "#D8CAFF",
      300: "#C4B3F4",
      400: "#D8CAFF",
      500: "#8C74CF",
      600: "#795EC7",
      700: "#6647BF",
      800: "#4F3599",
      900: "#39276F",
    },
    button: {
      100: "#0C1324",
    },
    description: { 100: "#64748b" },
  },
};

// eslint-disable-next-line
//@ts-ignore
export const tokens = (mode) => theme[mode];
