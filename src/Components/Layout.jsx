import React from 'react';
import Menu from "./Menu";
import Search from "./Search";
import {Outlet} from "react-router-dom"
import ModalWindow from "./ModalWindow";
import {useSelector} from "react-redux";
const Layout = () => {
    const storeCity = useSelector(state => state.selectedCity.current)

    return (
        <>
            <header>
                <Menu/>
                <Search/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>footer</footer>
            { Object.keys(storeCity).length === 0 &&  <ModalWindow/>}
        </>
    );
};

export default Layout;