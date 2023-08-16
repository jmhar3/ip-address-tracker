import * as React from "react";

import { Stack, Heading, useBreakpointValue } from "@chakra-ui/react";

import { InfoCard, SearchResults } from "./InfoCard";
import { SearchInput } from "./SearchInput";

export interface FrontProps {
  onSubmit: (searchQuery?: string) => void;
  searchResults?: SearchResults;
}

export const Front = (props: FrontProps) => {
  const { onSubmit, searchResults } = props;

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Stack
      top="0"
      w="full"
      zIndex={99}
      align="center"
      position="fixed"
      p={{ base: "21px", md: "33px" }}
      spacing={{ base: "21px", md: "33px" }}
    >
      <Heading color="white" fontSize={{ base: "26", md: "32" }}>
        IP Address Tracker
      </Heading>

      <SearchInput onSubmit={onSubmit} />

      {searchResults && <InfoCard searchResults={searchResults} />}
    </Stack>
  );
};
