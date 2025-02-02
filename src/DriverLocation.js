import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapStyles = {        
  height: "400px",
  width: "100%"};
  
const defaultCenter = {
  lat: 40.748817, lng: -73.985428
};

const DriverLocation = () => {
  return (
    <LoadScript googleMapsApiKey='YOUR_GOOGLE_MAPS_API_KEY'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        <Marker position={defaultCenter}/>
      </GoogleMap>
    </LoadScript>
  );
}

export default DriverLocation;
