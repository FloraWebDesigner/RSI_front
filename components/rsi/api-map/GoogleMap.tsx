import React from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Origin } from "../api_backend/types";
import { manualDescriptions } from "../api_backend/types";

const containerStyle = {
  width: "100%",
  height: "100%",
}

interface GoogleMapProps {
  origins: Origin[];
}

console.log("API Key:", process.env.NEXT_PUBLIC_MAP_KEY);

const GoogleMapComponent: React.FC<GoogleMapProps> = ({ origins }) => {
  const [selectedOrigin, setSelectedOrigin] = React.useState<null | number>(
    null
  );
  const center = origins.find((origin) => origin.lat && origin.lng)
    ? {
        lat: origins[0]?.lat || 0,
        lng: origins[0]?.lng || 0,
      }
    : { lat: 0, lng: 0 };

  const getDescription = (origin: Origin) => {
    return (
      manualDescriptions[origin.OriginName] || origin.Desc || "no description"
    );
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
      {origins.map((origin, index) => {
        if (!origin.lat || !origin.lng) return null;

        return (
          <Marker
            key={index}
            position={{ lat: origin.lat, lng: origin.lng }}
            onClick={() => setSelectedOrigin(index)}
          >
            {selectedOrigin === index && (
              <InfoWindow onCloseClick={() => setSelectedOrigin(null)}>
                <div className="space-y-1">
                  <h3 className="text-gray-800 text-lg font-bold">
                    {origin.OriginName}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {getDescription(origin)}
                  </p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
