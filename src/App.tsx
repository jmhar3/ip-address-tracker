import * as React from "react";

import {
  Image,
  Stack,
  Heading,
  ChakraProvider,
  useBreakpointValue,
} from "@chakra-ui/react";

import extendedTheme from "./theme";
import { Map } from "./components/Map";
import { InfoCard, SearchResults } from "./components/InfoCard";
import { SearchInput } from "./components/SearchInput";
import { useFetch } from "usehooks-ts";

export const App = () => {
  const IpGeoApiUrl =
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_yrSadvZJztUqq6lVAHT6vTXDRg2f8";

  // const isMobile = useBreakpointValue({ base: true, md: false });

  const [queryUrl, setQueryUrl] = React.useState<string | undefined>(
    IpGeoApiUrl
  );

  const { data: searchResults } = useFetch<SearchResults>(queryUrl);

  const onSubmit = React.useCallback(
    (searchQuery: string | undefined) => {
      console.log("Submit searchQuery", searchQuery);
      if (searchQuery) {
        console.log("searchQuery exists");
        if (/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/.test(searchQuery)) {
          setQueryUrl(`${IpGeoApiUrl}&ipAddress=${searchQuery}`);
        } else {
          setQueryUrl(`${IpGeoApiUrl}&domain=www.${searchQuery})`);
        }
        return;
      }
      setQueryUrl(IpGeoApiUrl);
    },
    [setQueryUrl, IpGeoApiUrl]
  );

  return (
    <ChakraProvider theme={extendedTheme}>
      {searchResults && (
        <>
          <Stack direction="column">
            <Image src="/images/pattern-bg-desktop.png" />
            <Map
              location={[
                searchResults.location.lat,
                searchResults.location.lng,
              ]}
            />
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

            <SearchInput onSubmit={onSubmit} />

            <InfoCard searchResults={searchResults} />
          </Stack>
        </>
      )}
    </ChakraProvider>
  );
};
