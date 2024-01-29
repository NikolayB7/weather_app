import React from 'react';
import Menu from "./Menu";
import Search from "./Search";
import {Outlet} from "react-router-dom"
import ModalWindow from "./ModalWindow";
import {useSelector} from "react-redux";
import Container from 'react-bootstrap/Container';
const Layout = () => {
    const storeCity = useSelector(state => state.selectedCity.current)
    const overlay = useSelector(state=>state.stateElements.showOverlay)

    return (
        <>
            <header>
                <Menu/>
                <Search classType="search_header"/>
            </header>
            <main>
                <Container className="main-body">
                    <Outlet/>
                </Container>
            </main>
            <footer>footer</footer>
            {overlay && <div className="overlay"></div>}
            { Object.keys(storeCity).length === 0 &&  <ModalWindow/>}
        </>
    );
};

export default Layout;