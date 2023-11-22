import { FC, useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import { GOOGLE_MAPS_API_KEY } from '@config';

interface IMapProps {
  address: string;
}

interface IMap {
  lat: number;
  lng: number;
}

export const GoogleMapWrapper: FC<IMapProps> = ({ address }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    version: 'weekly',
  });

  const inicialValues: IMap = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const [map, setmap] = useState(inicialValues);

  useEffect(() => {
    if (isLoaded) {
      const geoCoder = new window.google.maps.Geocoder();
      geoCoder.geocode({ address }, (results: any, status) => {
        if (status === 'OK') {
          setmap({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        }
      });
    }
  }, [, address, isLoaded]);

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <GoogleMap mapContainerClassName="w-full h-[700px]" center={map} zoom={15}>
      <Marker position={map} />
    </GoogleMap>
  );
};
