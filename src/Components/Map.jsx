import React from 'react';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, useMap ,Marker,Popup} from 'react-leaflet'
const Map = () => {
    const position = [51.505, -0.09]
    return (
        <div className="map-container">
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[51.505, -0.09]}></Marker>
            </MapContainer>
        </div>
    );
};

export default Map;