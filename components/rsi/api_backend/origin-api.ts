import { Origin } from "./types";

export const fetchOrigins = async (): Promise<Origin[]> => {
  try {
    const res = await fetch("https://rsi-backend-kl8gfthcr-floras-projects-0cf04884.vercel.app/apivercel/data"); 
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
