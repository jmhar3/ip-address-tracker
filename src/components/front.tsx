import * as React from "react";

import { Stack, Heading, useBreakpointValue } from "@chakra-ui/react";

import { InfoCard, SearchResults } from "./InfoCard";
import { SearchInput } from "./SearchInput";

export interface FrontProps {
  onSubmit: (searchQuery?: string) => void;
  searchResults?: SearchResults
}

export const Front = (props: FrontProps) => {
  const { onSubmit, searchResults } = props;

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Stack
      top="0"
      w="full"
      p="33px"
      align="center"
      spacing="33px"
      position="fixed"
      zIndex={99}
    >
      <Heading color="white">IP Address Tracker</Heading>

      <SearchInput onSubmit={onSubmit} />

      {searchResults && <InfoCard searchResults={searchResults} />}
    </Stack>
  );
};
