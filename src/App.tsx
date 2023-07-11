import * as React from "react";

import { ChakraProvider, Stack } from "@chakra-ui/react";

import extendedTheme from "./theme";

export const App = () => (
  <ChakraProvider theme={extendedTheme}>
    <Stack></Stack>
  </ChakraProvider>
);
