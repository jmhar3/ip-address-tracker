import * as React from "react";

import {
  Image,
  Stack,
  Heading,
  useToast,
  ChakraProvider,
  useBreakpointValue,
} from "@chakra-ui/react";

import extendedTheme from "./theme";
import { Map } from "./components/Map";
import { InfoCard, SearchResults } from "./components/InfoCard";
import { SearchInput } from "./components/SearchInput";
import { useFetch } from "usehooks-ts";
import { LatLngTuple } from "leaflet";

export const App = () => {
  const IpGeoApiUrl =
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_yrSadvZJztUqq6lVAHT6vTXDRg2f8";

  // const isMobile = useBreakpointValue({ base: true, md: false });

  const toast = useToast();

  const [queryUrl, setQueryUrl] = React.useState<string | undefined>(
    IpGeoApiUrl
  );

  const [searchResults, setSearchResults] = React.useState<SearchResults>();

  const { data, error } = useFetch<SearchResults>(queryUrl);

  const location = React.useMemo<LatLngTuple | undefined>(
    () =>
      searchResults && [searchResults.location.lat, searchResults.location.lng],
    [searchResults]
  );

  const onSubmit = React.useCallback(
    (searchQuery: string | undefined) => {
      if (searchQuery) {
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

  React.useEffect(() => {
    if (data) {
      setSearchResults(data);
    } else {
      toast({
        title: "Invalid Query",
        description: "No results have been found matching your query",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [data]);

  return (
    <ChakraProvider theme={extendedTheme}>
      <Stack direction="column" gap="0">
        <Image src="/images/pattern-bg-desktop.png" />
        {location && <Map location={location} />}
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

        {searchResults && <InfoCard searchResults={searchResults} />}
      </Stack>
    </ChakraProvider>
  );
};
