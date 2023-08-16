import * as React from "react";

import { Image, Stack, useBreakpointValue } from "@chakra-ui/react";

import { Map } from "./Map";
import { LatLngTuple } from "leaflet";

export interface BackProps {
  location: LatLngTuple | undefined;
}

export const Back = (props: BackProps) => {
  const { location } = props;

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Stack direction="column" gap="0">
      <Image
        src={
          isMobile
            ? "/images/pattern-bg-mobile.png"
            : "/images/pattern-bg-desktop.png"
        }
      />
      {location && <Map location={location} />}
    </Stack>
  );
};
