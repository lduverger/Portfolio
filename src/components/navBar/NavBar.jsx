import React, { useState } from 'react';
import { navLinks } from '../../constants';
import { logo } from '../../assets';


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (
        <nav>
            <div>
                <img src={logo} alt="Logo portfolio"/>
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={isOpen ? 'open' : ''}>
                {
                    navLinks.map((nav) => (
                        <li key={nav.id} onClick={closeMenu}>
                            <a href={`#${nav.id}`}>{nav.title} </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default NavBar;