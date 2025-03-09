import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const API_KEY = process.env.MAP_KEY as string;
const GEOCODING_API_URL = `https://maps.googleapis.com/maps/api/geocode/json`;

const countries = ["USA", "India", "China", "Brazil", "Australia"];

const countryCoordinates: Record<string, { lat: number; lng: number }> = {
  USA: { lat: 37.0902, lng: -95.7129 },
  India: { lat: 20.5937, lng: 78.9629 },
  China: { lat: 35.8617, lng: 104.1954 },
  Brazil: { lat: -14.235, lng: -51.9253 },
  Australia: { lat: -25.2744, lng: 133.7751 },
};

type Location = {
  name: string;
  lat: number;
  lng: number;
};

export default function Maps() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      const countryData = await Promise.all(
        countries.map(async (country) => {
          const res = await fetch(
            `${GEOCODING_API_URL}?address=${country}&key=${API_KEY}`
          );
          const data = await res.json();

          if (data.results && data.results[0]) {
            const location = data.results[0].geometry.location;
            return { name: country, lat: location.lat, lng: location.lng };
          } else {
            // 如果 Geocoding API 没有返回结果，则使用默认坐标
            return { name: country, ...countryCoordinates[country] };
          }
        })
      );
      setLocations(countryData.filter((location) => location !== null));
      setLoading(false);
    };

    fetchLocations();
  }, []);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = { lat: 20.5937, lng: 78.9629 }; // 默认居中位置

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Country Map</h1>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={3}
          center={center}
        >
          {/* 显示所有国家的标记 */}
          {locations.map((location) => (
            <Marker
              key={location.name}
              position={{ lat: location.lat, lng: location.lng }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
