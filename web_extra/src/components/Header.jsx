import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="nav">
            <a href="/" className="title">
                <img src="src/assets/EXTRAWORK-2.png" alt="logo" draggable="false" />
            </a>
            <div className="info-list">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
