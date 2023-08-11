import * as React from "react";

import { Text, Stack, StackDivider, Center } from "@chakra-ui/react";

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

  return (
    <Center h="161px" w="1110px" bg="white" rounded="15px">
      <Stack
        w="full"
        align="flex-start"
        justify="space-evenly"
        divider={<StackDivider />}
        direction={{ base: "column", md: "row" }}
      >
        <InfoStat label="IP ADDRESS" stat={ip} />
        <InfoStat
          label="LOCATION"
          stat={`${city}, ${region.replace(/state of/i, "")} ${postalCode}`}
        />
        <InfoStat label="TIMEZONE" stat={"UTC " + timezone} />
        <InfoStat label="ISP" stat={isp} />
      </Stack>
    </Center>
  );
};

const InfoStat = (props: InfoStatProps) => {
  const { label, stat } = props;
  return (
    <Stack textAlign="left">
      <Text fontSize="12" fontWeight="bold" color="custom.darkGray">
        {label}
      </Text>
      <Text
        fontSize="26"
        overflow="wrap"
        fontWeight="medium"
        color="custom.veryDarkGray"
      >
        {stat}
      </Text>
    </Stack>
  );
};
