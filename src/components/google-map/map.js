import React from "react";
import './map.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import mapStyle from './map-style';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 35.185231,
  lng: -80.908375
};

const options = {
  styles: mapStyle, 
  disableDefaultUI: true,
  zoomControl: true,
  fullscreenControl: true,
  scrollwheel:false,
  streetViewControl:true
}

const map = () => {
    return (
      <React.Fragment>
          <div id="map">
          <div className="address">
            <h4>Charlotte, NC</h4>
          </div>
          <div id="cd-google-map">
            <LoadScript
              googleMapsApiKey="AIzaSyCnwHRpPZJeVHZbrLhyMqP6XTG3S00xNqw"
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
                options={options}
              >
                <Marker
                  position={center}
                  icon={{ url: '/assets/images/map-marker-icon.png' }}
                />
                <></>
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </React.Fragment>
    );
};

export default map;
