// src/components/DarkModeToggle.js
import React, { useState } from 'react';
import './DarkModeToggle.css'; // Correct path to CSS file

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <button onClick={toggleDarkMode}>
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    );
};

export default DarkModeToggle;
