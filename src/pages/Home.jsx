import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 1-second timeout

        // Cleanup timer on unmount
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loader-container">
                <div className="loader-spinner" aria-label="Loading page content"></div>
                <p>Loading Vamsi's Portfolio...</p>
            </div>
        );
    }

    return (
        <section id="home" className="hero container">
            <div className="hero-container">
                <div className="hero-text">
                    <h3>Hello, I'm</h3>
                    <h1>K.P.T.N. <span>Vamsi Krishna</span></h1>
                    <h2>Full Stack Developer</h2>
                    <p>
                        I am a Computer Science and Engineering student at the 
                        National Institute of Technology Warangal. I focus on building web applications 
                        using JavaScript, specifically working with the MERN stack for both client-side 
                        interfaces and backend development.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/projects" className="btn">
                            View Projects
                        </Link>
                        <Link to="/contact" className="btn2">
                            Contact Me
                        </Link>
                    </div>
                </div>

                <div className="hero-image">
                    <img 
                        src="https://t4.ftcdn.net/jpg/09/59/21/77/360_F_959217710_7tXOGV30gaUOjgGuMvnFzAwZhOOXbgvd.jpg" 
                        alt="K.P.T.N. Vamsi Krishna profile"
                    />
                </div>
            </div>
        </section>
    );
}
