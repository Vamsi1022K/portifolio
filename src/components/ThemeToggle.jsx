import React from 'react';

export default function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn" 
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
            {theme === 'light' ? '🌙' : '☀️'}
        </button>
    );
}
