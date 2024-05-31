import React from 'react';
import { logo } from '../../assets';

const About = () => {
    return (
        <section id='about' className='section_about'>
            <img src={logo} alt="Photo de Loïc" />
            <div className='about-container'>
                <span className='tag-title'>A propos de moi</span>
                <h2>De testeur à développeur</h2>
                <p>Intéressé par le développement web, j'ai décidé d'abandonner ma casquette de testeur pour prendre celle de développeur. Ayant consacré plusieurs années à traquer les bugs, j'ai voulu passer de l'autre côté 
                    afin de corriger directement les problèmes à la source ! Et peut être d'en créer quelqu'uns... Fort de mon expérience du côté test, je suis désormais prêt à coder des fonctionnalités innovantes et à relever de nouveaux défis ! </p>
            </div>

        </section>
    );
};

export default About;