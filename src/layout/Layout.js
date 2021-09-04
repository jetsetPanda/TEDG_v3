import React from 'react';

//router
import {BrowserRouter as Router} from "react-router-dom";

// components
import MenuBar from "../components/MenuBar";

const Layout = ({children}) => {
    return (
        <Router>
            <MenuBar/>
            <main>{children}</main>
        </Router>
    )
};

export default Layout;
