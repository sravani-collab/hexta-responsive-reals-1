"use client";

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

// HextaSphere office coordinates based on the address
// TF2, VUDA Complex, Seethammadara, Visakhapatnam
const center = {
  lat: 17.7401233,
  lng: 83.3124458,
};

export default function GoogleMapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const mapOptions = useMemo(
    () => ({
      zoom: 17,
      center: center,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    }),
    []
  );

  if (loadError) {
    return (
      <div className="w-full h-full bg-light flex items-center justify-center">
        <p className="text-gray-500">Failed to load maps</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-full bg-light flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={16}
      options={mapOptions}
    >
      <Marker position={center} title="HextaSphere Technologies" />
    </GoogleMap>
  );
}
