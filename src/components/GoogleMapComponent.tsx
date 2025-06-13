"use client";

import { useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { Skeleton } from "@heroui/react";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

// HextaSphere office coordinates based on the address
// TF2, VUDA Complex, Seethammadara, Visakhapatnam
const center = {
  lat: 17.739234, 
  lng: 83.313129,
};

// Static libraries array to prevent reloading warnings
const libraries: ("marker")[] = ["marker"];

// Function to check if business is currently open
const getBusinessStatus = () => {
  const now = new Date();
  
  // Convert to IST (UTC+5:30)
  const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
  
  const dayOfWeek = istTime.getUTCDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hours = istTime.getUTCHours();
  const minutes = istTime.getUTCMinutes();
  const totalMinutes = hours * 60 + minutes;
  
  // Business hours: Monday (1) to Friday (5), 9:30 AM to 6:30 PM
  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
  const openTime = 9 * 60 + 30; // 9:30 AM in minutes
  const closeTime = 18 * 60 + 30; // 6:30 PM in minutes
  
  const isOpen = isWeekday && totalMinutes >= openTime && totalMinutes < closeTime;
  
  return {
    isOpen,
    isWeekday,
    nextOpenTime: "9:30 AM on Monday"
  };
};

export default function GoogleMapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries, // Use static array
  });

  const mapOptions = useMemo(
    () => ({
      zoom: 16,
      center: center,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
      mapId: "f38ee9bfeb5fff05894f86fa ", // Required for Advanced Markers
      // Remove styles property when using mapId - styles should be controlled via Google Cloud Console
    }),
    []
  );

  // Function to create advanced marker when map loads
  const onMapLoad = (map: google.maps.Map) => {
    const businessStatus = getBusinessStatus();
    
    // Create modern custom marker content
    const markerContent = document.createElement('div');
    markerContent.className = 'modern-marker';
    markerContent.innerHTML = `
      <div style="
        position: relative;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 16px;
        padding: 16px 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05);
        min-width: 200px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        transform-origin: bottom center;
      ">
        <!-- Header with logo area -->
        <div style="
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        ">
          <div style="
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
          ">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
            </svg>
          </div>
          <div>
            <div style="
              font-size: 16px;
              font-weight: 600;
              color: #1a1a1a;
              line-height: 1.2;
              margin-bottom: 2px;
            ">
              HextaSphere
            </div>
            <div style="
              font-size: 12px;
              color: #6b7280;
              font-weight: 500;
            ">
              Technologies
            </div>
          </div>
        </div>
        
        <!-- Address -->
        <div style="
          font-size: 13px;
          color: #4b5563;
          line-height: 1.4;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
        ">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#9ca3af">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          TF2, VUDA Complex, Seethammadara
        </div>
        
        <!-- Business Hours -->
        <div style="
          font-size: 12px;
          color: #6b7280;
          margin-bottom: 8px;
          line-height: 1.3;
        ">
          Mon-Fri: 9:30AM - 6:30PM IST
        </div>
        
        <!-- Status indicator -->
        <div style="
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: ${businessStatus.isOpen ? '#059669' : '#dc2626'};
          font-weight: 500;
        ">
          <div style="
            width: 8px;
            height: 8px;
            background: ${businessStatus.isOpen ? '#10b981' : '#ef4444'};
            border-radius: 50%;
            ${businessStatus.isOpen ? 'animation: pulse 2s infinite;' : ''}
          "></div>
          ${businessStatus.isOpen ? 'Open Now' : `Closed • Opens ${businessStatus.nextOpenTime}`}
        </div>
        
        <!-- Pointer tail -->
        <div style="
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-top: none;
          border-left: none;
          transform: translateX(-50%) rotate(45deg);
          backdrop-filter: blur(10px);
        "></div>
      </div>
    `;

    // Add modern hover and interaction effects
    const markerDiv = markerContent.querySelector('div') as HTMLElement;
    
    markerContent.addEventListener('mouseenter', () => {
      if (markerDiv) {
        markerDiv.style.transform = 'translateY(-4px) scale(1.02)';
        markerDiv.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15), 0 8px 24px rgba(0, 0, 0, 0.1)';
      }
    });

    markerContent.addEventListener('mouseleave', () => {
      if (markerDiv) {
        markerDiv.style.transform = 'translateY(0) scale(1)';
        markerDiv.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05)';
      }
    });

    // Create advanced marker element with modern content
    const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: center,
      content: markerContent,
      title: "HextaSphere Technologies - IT & Engineering Solutions",
    });

    // Simple click handler without alert - just log or add subtle feedback
    advancedMarker.addListener("gmp-click", () => {
      
      // Add a subtle click feedback animation
      if (markerDiv) {
        markerDiv.style.transform = 'translateY(-2px) scale(0.98)';
        setTimeout(() => {
          markerDiv.style.transform = 'translateY(0) scale(1)';
        }, 150);
      }
      
      // Optional: Add any other click functionality here
      // - Navigate to contact page
      // - Open info window
      // - Show company details in a modal
    });

    // Add CSS animations
    if (!document.querySelector('#modern-marker-styles')) {
      const style = document.createElement('style');
      style.id = 'modern-marker-styles';
      style.textContent = `
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .modern-marker > div {
          animation: slideInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `;
      document.head.appendChild(style);
    }
  };

  if (loadError) {
    return (
      <div className="w-full h-full bg-light flex items-center justify-center rounded-lg">
        <p className="text-gray-500">Failed to load maps</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-full">
        <Skeleton className="w-full h-full rounded-lg" />
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={16}
      options={mapOptions}
      onLoad={onMapLoad}
    >
      {/* No children needed - marker is created in onLoad */}
    </GoogleMap>
  );
}