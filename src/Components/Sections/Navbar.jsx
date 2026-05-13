import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import whitelogo from '../../assets/whitelogo.png'
import { NavLink } from "react-router";
import Button from "../Common/Button";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navlinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Services", link: "/services" },
        { name: "Contact", link: "/contact" }
    ]
    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
                {/* Logo */}
                <div>
                    <img
                        src={whitelogo}
                        alt="logo"
                        className="w-16 sm:w-20 object-contain"
                    />
                </div>
                {/* Desktop Nav */}
                <div className="flex justify-between items-center gap-10">
                    <nav className="hidden lg:flex items-center gap-8 text-sm text-white">
                        {navlinks.map(
                            (item, index) => (
                                <NavLink
                                    key={index}
                                    to={item.link}
                                    className={`transition duration-300 hover:text-[#CDC72A] ${item === "Home" ? "text-yellow-400" : ""
                                        }`}
                                >
                                    {item.name}
                                </NavLink>
                            )
                        )}
                    </nav>
                    {/* Desktop Button */}
                    <Button text="Get in Touch" mobile={true}/>
                </div>
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-white text-3xl"
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>
            {/* Mobile Menu */}
            <div
                className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-yellow-400/20 overflow-hidden transition-all duration-500 ${isOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 py-6 flex flex-col gap-5">
                    {navlinks.map(
                        (item, index) => (
                            <NavLink
                                key={index}
                                to={item.link}
                                className="text-white hover:text-[CDC72A] transition duration-300"
                            >
                                {item.name}
                            </NavLink>
                        )
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;