"use client";

import { fetchOrigins } from "./api_backend/origin-api";
import { useEffect, useState } from "react";
import getCountryCoordinates from "./api-map/getCoordinates";
import GoogleMapComponent from "./api-map/GoogleMap";
import { Origin } from "./api_backend/types";

export function GetOrigins() {
  const [origins, setOrigins] = useState<Origin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchOrigins();
        const originsWithCoords = await Promise.all(
          data.map(async (origin) => {
            const coords = await getCountryCoordinates(origin.OriginName);
            return {
              ...origin,
              lat: coords?.lat,
              lng: coords?.lng,
            };
          })
        );
        setOrigins(originsWithCoords);
      } catch (error) {
        console.error("Error fetching origins:", error);
        setError("Failed to fetch origins");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <GoogleMapComponent origins={origins} />
    </div>
  );
}
