import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer>
            <div className="container">
                <p>© {currentYear} K.P.T.N. Vamsi Krishna</p>
            </div>
        </footer>
    );
}
