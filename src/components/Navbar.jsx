import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ theme, toggleTheme }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Close mobile menu if window resizes past mobile layout
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header>
            <div className="container navbar">
                <NavLink to="/Home" className="logo" onClick={closeMenu}>
                    Vamsi Krishna
                </NavLink>

                <div className="nav-container">
                    <nav>
                        <ul className={isOpen ? 'open' : ''}>
                            <li>
                                <NavLink to="/Home" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/links" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                                    Links
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

                    <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
