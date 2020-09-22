import React, { Component } from 'react';



const NavBar = (props) => {
    return (  
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-braand" href="/">NavBar
        <span className="badge badge-spill badge-secondary">{props.totalCounter} </span> </a>
    </nav>
    );
}
 
export default NavBar;