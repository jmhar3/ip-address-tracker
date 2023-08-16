import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Icon, LatLngTuple, Point } from "leaflet";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

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
    <Box h="600px" w="100%" bg="gray.100">
      <MapContainer
        style={{ height: "100%", zIndex: 1 }}
        center={mapState.center}
        zoom={mapState.zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location} icon={CustomIcon} />
      </MapContainer>
    </Box>
  );
};

const CustomIcon = new Icon({
  iconUrl: require("../images/icon-location.svg"),
  iconRetinaUrl: require("../images/icon-location.svg"),
  iconSize: new Point(60, 75),
  className: "leaflet-div-icon",
});
