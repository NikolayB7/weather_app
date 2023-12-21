import React from 'react';

import {Link} from "react-router-dom";
import HomeImg from "../Icons/HomeImg";
import MapImg from "../Icons/MapImg";


const Menu = () => {
    return (
        <>
            <ul className="menu">
                <li className="menu__item">
                    <Link to="/" className="menu__link"><HomeImg/></Link>
                </li>
                <li className="menu__item">
                    <Link to="/map" className="menu__link"><MapImg/></Link>
                </li>
            </ul>
        </>
    );
};

export default Menu;