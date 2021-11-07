import React from 'react';

//router
import {BrowserRouter as Router} from "react-router-dom";

// components
import NavBar from "../components/NavBar";

const Layout = ({children}) => {
    return (
        <Router>
            <NavBar/>
            <main>{children}</main>
        </Router>
    )
};

export default Layout;
