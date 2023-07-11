import { extendTheme } from "@chakra-ui/react";

const extendedTheme = extendTheme({
  fonts: {
    heading: `'Rubik', sans-serif`,
    input: `'Rubik', sans-serif`,
  },
  colors: {
    custom: {
      darkGray: "hsl(0, 0%, 59%)",
      veryDarkGray: "hsl(0, 0%, 17%)",
    },
  },
  breakpoints: {
    base: "375px",
    md: "1440px",
  },
  components: {
    Input: {
      baseStyle: {
        fontSize: "18px",
      },
    },
  },
});

export default extendedTheme;
