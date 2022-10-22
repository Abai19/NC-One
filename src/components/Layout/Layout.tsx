import React from 'react';
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Favorites from "../Favorites/Favorites";
import './layout.scss'
const Layout = () => {
    return (
        <div >
            <Header/>
            <div className="container">
                <div className="favorites">
                    <Favorites/>
                </div>
                <div className="list">
                    <Outlet/>
                </div>
            </div>



        </div>
    );
};

export default Layout;