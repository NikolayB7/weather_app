import React, {useEffect, useState} from 'react'
import './assets/style/main.scss'
import "sanitize.css";

import "./assets/fonts/icon-weather/css/helper.css"
import "./assets/fonts/icon-weather/css/icon-weather.css"

import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";useNavigator
import MapPage from "./Pages/MapPage";
import Layout from "./Components/Layout";

import {useNavigator} from './hooks/hooks'

function App() {

    useNavigator()
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}></Route>
                    <Route path="map" element={<MapPage/>}></Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
