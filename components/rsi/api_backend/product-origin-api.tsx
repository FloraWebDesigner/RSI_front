"use client";

import { fetchProducts } from "./product-api";
import { useEffect, useState } from "react";
import getCountryCoordinates from "../api-map/getCoordinates";
import GoogleMapComponent from "../api-map/GoogleMap";
import { Origin } from "./types";

export function GetProductOrigins({ productName }: { productName: string }) {
  const [origins, setOrigins] = useState<Origin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const products = await fetchProducts();
        const targetProduct = products.find(
          (p) => p.ProductName === productName
        );
        const origins = targetProduct?.Origin || [];
        if (!targetProduct) {
          throw new Error(`Product ${productName} not found`);
        }

        const originsWithCoords = await Promise.all(
          origins.map(async (originName: string) => {
            const coords = await getCountryCoordinates(originName);
            return {
              OriginName: originName,
              id: originName,
              lat: coords?.lat,
              lng: coords?.lng,
            };
          })
        );

        setOrigins(originsWithCoords);
      } catch (error) {
        console.error("Error fetching product origins:", error);
        setError(`Failed to fetch origins for product ${productName}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ height: "60vh", width: "100%" }}>
      <GoogleMapComponent origins={origins} />
    </div>
  );
}
