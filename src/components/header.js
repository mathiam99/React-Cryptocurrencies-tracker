import React from 'react';

const Header = () => {
    return ( 
        <React.Fragment>
            <nav className="nav-wrapper blue darken-3">
                <div className="container">
                    <a className="brand-logo" href="/"> CryptoTracker</a>

                    <ul className="right">
                        <li><a href="/">Home</a></li>
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/About">About</a></li>
                    </ul>
                </div>
            </nav>      
        </React.Fragment>
     );
}
 
export default Header;