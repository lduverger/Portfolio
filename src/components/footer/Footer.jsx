import React from 'react';
import { github } from '../../assets';

const Footer = () => {
    return (
        <footer>
            <a href="">
                <img src={github} alt="icon github" onClick={() => window.open("https://github.com/lduverger", "_blank")}/>
            </a>
            <span>Copyright © Loïc Duverger</span>
        </footer>
    );
};

export default Footer;