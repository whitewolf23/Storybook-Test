import React from 'react'
import './NavBar.scss';

const Navbar = ({siteTitle}) => {
    return(
        <div className="nav-bar">
            <h1 className="site-title">{siteTitle}</h1>
        </div>
    )
}

export default Navbar;