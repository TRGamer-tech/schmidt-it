import React from 'react';

const Header: React.FC = () => {
    const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        // Implement navigation logic here
    };

    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/" onClick={handleNavigation}>Home</a></li>
                    <li><a href="/about" onClick={handleNavigation}>About</a></li>
                    <li><a href="/contact" onClick={handleNavigation}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;