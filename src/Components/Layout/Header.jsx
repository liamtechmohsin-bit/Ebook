import React from 'react'
import { NavLink } from 'react-router';
import Navbar from '../Sections/Navbar';
import HeroBanner from '../Sections/HeroBanner';

const Header = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" },
    ];
    return (
        <>
            <div>
                <Navbar />
                <HeroBanner />
            </div>
        </>
    )
}

export default Header