import React from 'react';
import { Link } from 'react-router-dom';

export default function Links() {
    return (
        <div className="links-body">
            <div className="links-container">
                <img 
                    src="https://t4.ftcdn.net/jpg/09/59/21/77/360_F_959217710_7tXOGV30gaUOjgGuMvnFzAwZhOOXbgvd.jpg" 
                    alt="Vamsi Krishna profile image" 
                    className="links-image"
                />

                <h1>K.P.T.N. Vamsi Krishna</h1>

                <p className="links-role">
                    Full Stack Developer • MERN Stack Developer
                </p>

                <p className="links-desc">
                    Computer Science Engineering Student at National Institute of Technology Warangal.
                    Passionate about Full Stack Development and building modern web applications.
                </p>

                <div className="links">
                    <Link to="/Home">
                        Portfolio Homepage
                    </Link>

                    <a href="https://github.com/Vamsi1022K" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>

                    <a href="https://www.linkedin.com/in/vamsi-krishna-145911368/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>

                    <a href="mailto:vamsikr2007@gmail.com">
                        Email
                    </a>
                </div>

                <div className="socials">
                    <a href="https://github.com/Vamsi1022K" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <span> | </span>
                    <a href="https://www.linkedin.com/in/vamsi-krishna-145911368/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}
