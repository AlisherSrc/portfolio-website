import React from "react";
import './navbar.scss'
import burger_menu from './../../assets/burger-menu.svg';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-icon">
                <a>AlisherSk</a>
            </div>
            <div className="navbar-burger__menu">
                <img src={burger_menu}  alt='menu'/>
            </div>
        </div>
    )
}

export default Navbar;