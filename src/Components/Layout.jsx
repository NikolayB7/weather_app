import React from 'react';
import Menu from "./Menu";
import Search from "./Search";
import {Outlet} from "react-router-dom"
const Layout = () => {
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
        </>
    );
};

export default Layout;