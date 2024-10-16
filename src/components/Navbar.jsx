import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Navbar.css"

function Navbar  () {
        const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav>
            <Link to="/" className="title">John Doe</Link>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/accueil">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/realisations">Réalisations</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Me contacter</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;