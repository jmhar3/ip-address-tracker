import * as React from "react";

import { Text, Stack, StackDivider, Center } from "@chakra-ui/react";

export interface InfoStatProps {
  label: string;
  stat: string;
}

export const InfoCard = () => {
  return (
    <Center h="161px" w="1110px" bg="white" rounded="15px">
      <Stack
        w="full"
        align="flex-start"
        justify="space-evenly"
        divider={<StackDivider />}
        direction={{ base: "column", md: "row" }}
      >
        <InfoStat label="IP ADDRESS" stat="192.212.174.101" />
        <InfoStat label="LOCATION" stat="Brooklyn, NY 10001" />
        <InfoStat label="TIMEZONE" stat="UTC -05:00" />
        <InfoStat label="ISP" stat="SpaceX Starlink" />
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
