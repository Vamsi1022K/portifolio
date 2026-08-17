import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ theme, toggleTheme }) {
    return (
        <div className="layout-wrapper">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
