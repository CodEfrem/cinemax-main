import React from "react";
import cinemaxLogo from "../assets/cinemax-lg.png";
import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <Link to="/">
            <img src={ cinemaxLogo } atl="" width="150" />
            </Link>
            
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/">Home </Link>
                </li>
                <li className="nav-item">
                    <Link to="/favorites">Favorites </Link>
                </li>
            </ul>
        </nav>
    )
}   

export default Nav;