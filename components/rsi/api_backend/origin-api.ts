import { Origin } from "./types";

export const fetchOrigins = async (): Promise<Origin[]> => {
  try {
    const res = await fetch("https://rsi-backend-us1f.onrender.com/api/data");
    const data = await res.json();
    console.log("origin data:", data);

    return data.origins.map((origin: any) => ({
      OriginName: origin.originName, 
      id: origin.id, 
    }));
  } catch (error) {
    console.error("Error fetching origins:", error);
    return [];
  }
};
