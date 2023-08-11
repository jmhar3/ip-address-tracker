import * as React from "react";
import { Box } from "@chakra-ui/react";
import { LatLngTuple } from "leaflet";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export interface MapProps {
  location: LatLngTuple;
}

export const Map = (props: MapProps) => {
  const { location } = props;

  const [mapState, setMapState] = React.useState({
    center: location,
    zoom: 12,
  });

  return (
    <Box h="3000px" w="100%">
      <MapContainer
        center={mapState.center}
        zoom={mapState.zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};
