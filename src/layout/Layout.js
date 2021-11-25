import React from 'react';

//router
import {BrowserRouter as Router} from "react-router-dom";

// components
import NavBar from "../components/NavBar";
import styled from "styled-components";

const DesktopPad = styled.div`
  padding: 60px 0;
  @media (max-width: 768px) {
  padding: 0;  
  }
  
`


const Layout = ({children}) => {
    return (
        <Router>
            <NavBar/>
            <DesktopPad/>
            <main>{children}</main>
        </Router>
    )
};

export default Layout;
