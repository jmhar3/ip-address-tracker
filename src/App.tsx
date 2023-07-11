import * as React from "react";

import {
  Image,
  Stack,
  Heading,
  ChakraProvider,
  useBreakpointValue,
} from "@chakra-ui/react";

import extendedTheme from "./theme";
import { SearchInput } from "./components/SearchInput";
import { InfoCard } from "./components/InfoCard";

export const App = () => {
  // const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <ChakraProvider theme={extendedTheme}>
      <Stack>
        <Image src="/images/pattern-bg-desktop.png" />
      </Stack>

      <Stack
        top="0"
        w="full"
        p="33px"
        align="center"
        spacing="33px"
        position="fixed"
      >
        <Heading color="white">IP Address Tracker</Heading>

        <SearchInput />

        <InfoCard />
      </Stack>
    </ChakraProvider>
  );
};
