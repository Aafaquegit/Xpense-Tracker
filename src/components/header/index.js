import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className = 'header-container'>
            <div className = 'header'>
                <div className = 'header-logo'>
                    Xpenser  <i class="fi fi-bs-credit-card"></i>
                </div>
                <div className='header-button'>
                    <a href = "https://github.com/Aafaquegit" target="_blank" rel = 'noopener noreferrer'>
                      <i class="devicon-github-original"></i>Star
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Header;