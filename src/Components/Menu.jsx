import React from 'react';

import {RouterProvider,Link,Route,Routes} from "react-router-dom";
import HomeImg from "../Icons/HomeImg";
import MapImg from "../Icons/MapImg";


const Menu = () => {
    return (
            <ul className="menu">
                <li className="menu__item">
                    <HomeImg/>
                    {/*<a href="#" className="menu__link">Home</a>*/}
                </li>
                <li className="menu__item">
                    <MapImg/>
                    {/*<a href="#" className="menu__link">Map</a>*/}
                </li>
            </ul>
    );
};

export default Menu;