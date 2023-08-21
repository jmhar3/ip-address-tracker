import * as React from "react";
import { Box } from "@chakra-ui/react";
import { Icon, LatLngTuple, Point } from "leaflet";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

export interface MapProps {
  location?: LatLngTuple;
}

export const Map = (props: MapProps) => {
  const { location } = props;

  const displayMap = React.useMemo(
    () => (
      <MapContainer
        zoom={12}
        center={location}
        zoomControl={false}
        style={{ height: "100%", zIndex: 1 }}
      >
        {location && <ChangeView location={location} />}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location && <Marker position={location} />}
      </MapContainer>
    ),
    [location]
  );

  return (
    <Box h={{ base: "450px", md: "600px" }} w="100%" bg="gray.100">
      {displayMap}
    </Box>
  );
};

// const CustomIcon = new Icon({
//   iconUrl: require("../images/icon-location.svg"),
//   iconRetinaUrl: require("../images/icon-location.svg"),
//   iconSize: new Point(60, 75),
//   className: "leaflet-div-icon",
// });

const ChangeView = (props: { location: LatLngTuple }) => {
  const map = useMap();
  map.setView(props.location);
  return null;
};
