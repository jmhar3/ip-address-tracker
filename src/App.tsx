import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import extendedTheme from "./theme";

import { useToast } from "@chakra-ui/react";

import { SearchResults } from "./components/InfoCard";
import { useFetch } from "usehooks-ts";
import { LatLngTuple } from "leaflet";
import { Back } from "./components/back";
import { Front } from "./components/front";

export const App = () => {
  const IpGeoApiUrl =
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_yrSadvZJztUqq6lVAHT6vTXDRg2f8";

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
    (searchQuery?: string) => {
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
      error &&
        toast({
          title: "Invalid Query",
          description: "No results have been found matching your query",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
    }
  }, [data]);

  return (
    <ChakraProvider theme={extendedTheme}>
      <Back location={location} />
      <Front searchResults={searchResults} onSubmit={onSubmit} />
    </ChakraProvider>
  );
};
