import { useEffect, useState } from "react";
import { Origin } from "./api_backend/types";
import { fetchOrigins } from "./api_backend/origin-api";

export function OriginSection() {
    const [origins, setOrigins] = useState<Origin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOrigins();
      setOrigins(data); // 
    };
    fetchData();
  }, []);

  return (
    <div>
      {origins.map((origin, id) => (
        <div key={id}>
          <div>
            <strong>Origin Name:</strong> {origin.OriginName}
          </div>
        </div>
      ))}
    </div>
  );
}
