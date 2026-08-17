import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Links from './pages/Links';

import './styles/styles.css';

export default function App() {
    // Read theme preference from localStorage on init
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    // Toggle theme function
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Effect to apply theme class and persist to localStorage
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <Router>
            <Routes>
                {/* Nested routes under the shared Layout */}
                <Route path="/" element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
                    <Route index element={<Navigate to="/Home" replace />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="projects/:projectId" element={<ProjectDetail />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                {/* Standalone Route for links list (no header/footer) */}
                <Route path="/links" element={<Links />} />
            </Routes>
        </Router>
    );
}
