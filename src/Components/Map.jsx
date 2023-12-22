import React from 'react';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, useMap ,Marker,Popup} from 'react-leaflet'
import {useSelector} from "react-redux";
const Map = () => {
    const storeCity = useSelector(state => state.selectedCity.current)
    const position = [storeCity.lat, storeCity.lon]

    const hasCoordinates = storeCity.lat && storeCity.lon;

    return (
        <div className="map-container">
            {hasCoordinates ? (
                <MapContainer
                    center={position}
                    zoom={10}
                    style={{ height: '100vh' }}>
                    <TileLayer
                        url="https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png"
                    />
                    <Marker
                        position={position}
                    />
                </MapContainer>
            ) : (
                <div className="preloader">Loading...</div>
            )}
        </div>
    );
};

export default Map;