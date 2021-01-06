import React from 'react';
import {NavLink, Link} from "react-router-dom";

const Header = () => {
    return ( 
        <React.Fragment>
            <nav className="nav-wrapper blue darken-3">
                <div className="container">
                    <a className="brand-logo" href="/"> CryptoTracker</a>

                    <ul className="right hide-on-med-and-down">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/About">About</NavLink></li>
                    </ul>
                </div>
            </nav>      
        </React.Fragment>
     );
}
 
export default Header;