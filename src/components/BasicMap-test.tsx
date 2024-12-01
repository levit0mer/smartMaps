import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface BasicMapProps {
  latitude: number;
  longitude: number;
  zoom: number;
  height?: string;
  width?: string;
}

const BasicMap: React.FC<BasicMapProps> = ({
  latitude,
  longitude,
  zoom,
  height = '400px',
  width = '100%',
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      mapboxgl.accessToken = 'pk.eyJ1IjoibGV2aXRvbWVyNTc5IiwiYSI6ImNtNDA5NDI5bTIxZGEyb3Nja3I2aGgwc2cifQ.CUmJWSpfgCigSFoEIAcJ1A'; // Replace with your Mapbox access token
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: zoom,
      });

      return () => {
        map.remove(); // Clean up on unmount
      };
    }
  }, [latitude, longitude, zoom]);

  return <div ref={mapContainerRef} style={{ height, width }} />;
};

export default BasicMap;
