import React from 'react';
import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className='navlinks row' style={{ marginBottom: 0 }}>
                <nav className="navbar">
                    <ul>
                        <li className="logo">Minhvan Le</li>
                        <li className="home"><a href='/'>Home</a></li>
                        <li><a href='/projects'>Projects</a></li>
                        <li><a href='/contact'>Contact</a></li>
                        <li><a href='/resume'>Resume</a></li>
                    </ul>
                </nav>
            </div>
        </div >
    );
}

export default Navbar;