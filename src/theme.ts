import { extendTheme } from "@chakra-ui/react";

const extendedTheme = extendTheme({
  fonts: {
    body: `'Rubik', sans-serif`,
  },
  colors: {
    darkGray: "hsl(0, 0%, 59%)",
    veryDarkGray: "hsl(0, 0%, 17%)",
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
