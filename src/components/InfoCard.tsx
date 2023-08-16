import * as React from "react";

import {
  Text,
  Stack,
  StackDivider,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";

export interface SearchResults {
  ip: string;
  isp: string;
  location: {
    lat: number;
    lng: number;
    city: string;
    region: string;
    timezone: string;
    postalCode: string;
  };
}

export interface InfoStatProps {
  label: string;
  stat: string;
}

export interface InfoCardProps {
  searchResults: SearchResults;
}

export const InfoCard = (props: InfoCardProps) => {
  const {
    searchResults: {
      ip,
      isp,
      location: { city, region, postalCode, timezone },
    },
  } = props;

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Center
      p={{ base: "6", md: "9" }}
      bg="white"
      rounded="15px"
      h="fit-content"
      w={{ base: "full", md: "fit-content" }}
    >
      <Stack
        gap={{ base: "4", md: "6" }}
        w="full"
        align="flex-start"
        justify="space-evenly"
        divider={isMobile ? undefined : <StackDivider />}
        direction={{ base: "column", md: "row" }}
      >
        <InfoStat label="IP ADDRESS" stat={ip} />
        <InfoStat
          label="LOCATION"
          stat={
            city &&
            (region || postalCode) &&
            `${city}, ${region.replace(/state of/i, "")} ${postalCode}`
          }
        />
        <InfoStat label="TIMEZONE" stat={timezone && "UTC " + timezone} />
        <InfoStat label="ISP" stat={isp} />
      </Stack>
    </Center>
  );
};

const InfoStat = (props: InfoStatProps) => {
  const { label, stat } = props;
  return (
    <Stack
      gap="0"
      w={{ base: "full", md: "213px" }}
      textAlign={{ base: "center", md: "left" }}
    >
      <Text
        fontSize={{ base: "10", md: "12" }}
        fontWeight="bold"
        color="custom.darkGray"
      >
        {label}
      </Text>

      <Text
        fontSize={{ base: "20", md: "26" }}
        overflow="wrap"
        fontWeight="medium"
        color="custom.veryDarkGray"
      >
        {stat}
      </Text>
    </Stack>
  );
};
