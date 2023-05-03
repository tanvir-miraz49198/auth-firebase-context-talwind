import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <div>
            
            <Header></Header>
            <Outlet></Outlet>
            <h1>this is home page</h1>
        </div>
    );
};

export default Layout;