import React, {useEffect, useState} from 'react'
import '../src/style/main.scss'
import "sanitize.css";

import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MapPage from "./Pages/MapPage";
import Layout from "./Components/Layout";

import {useNavigator} from './hooks/hooks'

function App() {

    console.log(useNavigator())

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
