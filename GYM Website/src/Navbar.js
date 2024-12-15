import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [show, setShow] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    let lastScrollY = 0;

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setShow(false);
        } else {
            setShow(true);
        }
        lastScrollY = window.scrollY > 0 ? window.scrollY : 0;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${show ? 'visible' : 'hidden'}`}>
            <div className="container flex">
                <div className="logo">
                    <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/logo.png" alt="Logo" />
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="/about">Why Us</a></li>
                    <li><a href="/OurBranch">Our Branches</a></li>
                    <li><a href="/Blog">Blog</a></li>
                    <li><a href="/Promotion">Promotion</a></li>
                </ul>
                <a href="/Registration" className="btn">Register</a>
            </div>
        </nav>
    );
}

export default Navbar;
