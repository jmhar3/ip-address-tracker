import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { LatLngTuple } from "leaflet";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export interface MapProps {
  location: LatLngTuple;
}

export const Map = (props: MapProps) => {
  const { location } = props;

  const mapState = {
    center: location,
    zoom: 12,
  };

  return (
    <Box h="3000px" w="100%" bg="gray.100">
      <MapContainer
        center={mapState.center}
        zoom={mapState.zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location} />
      </MapContainer>
    </Box>
  );
};
