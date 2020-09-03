import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { OpenStreetMapProvider, GeoSearchControl } from "leaflet-geosearch";

type State = {
  lat: number;
  lng: number;
  zoom: number;
};

const OnMap = () => {
  const [position, setPosition] = useState({
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  });
  return (
    <Map
      center={[position.lat, position.lng]}
      zoom={position.zoom}
      style={{ height: "60vh" }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[position.lat, position.lng]} draggable={true}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default OnMap;
