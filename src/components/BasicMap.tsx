// src/components/BasicMap.tsx
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibGV2aXRvbWVyNTc5IiwiYSI6ImNtNDA5NDI5bTIxZGEyb3Nja3I2aGgwc2cifQ.CUmJWSpfgCigSFoEIAcJ1A';

interface BasicMapProps {
  center?: [number, number];
  zoom?: number;
  style?: string;
}

const BasicMap: React.FC<BasicMapProps> = ({
  center = [0, 0],
  zoom = 1,
  style = 'mapbox://styles/mapbox/streets-v11',
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize the map
    mapInstanceRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style,
      center,
      zoom,
    });

    return () => {
      mapInstanceRef.current?.remove();
    };
  }, [center, zoom, style]);

  return (
    <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />
  );
};

export default BasicMap;
