import React, {useEffect, useState} from 'react';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, useMap ,Marker,Popup} from 'react-leaflet'
import {useSelector} from "react-redux";
const Map = () => {
    const storeCity = useSelector(state => state.selectedCity.current)


    const [coords,setCoords] = useState([])

    useEffect(()=>{
        const position = [storeCity?.lat || 0, storeCity?.lon || 0]
        setCoords(position)
    },[storeCity])

    const hasCoordinates = storeCity.lat && storeCity.lon;
// Добавляем ключ, который будет изменяться при изменении координат
    const keyForRerender = `${coords[0]}${coords[1]}`;
    return (
        <div className="map-container">
            {hasCoordinates ? (
                <MapContainer
                    center={[storeCity.lat,storeCity.lon]}
                    zoom={10}
                    style={{ height: '100vh' }}
                    key={keyForRerender}
                >
                    <TileLayer
                        url="https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png"
                    />
                    <Marker
                        position={[storeCity.lat,storeCity.lon]}
                    />
                </MapContainer>
            ) : (
                <div className="preloader">Loading...</div>
            )}
        </div>
    );
};

export default Map;