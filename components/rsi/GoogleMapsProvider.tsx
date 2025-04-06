"use client";

import { LoadScript } from "@react-google-maps/api";
import { ReactNode } from "react";

export default function GoogleMapsProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAP_KEY as string}>
      {children}
    </LoadScript>
  );
}
