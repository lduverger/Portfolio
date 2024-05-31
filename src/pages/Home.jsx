import React from 'react';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';
import Contact from '../components/contact/Contact';
import About from '../components/about/About';
import Experiences from '../components/experiences/Experiences';

const Home = () => {
    return (
        <main>
            <About />
            <hr />
            <Skills />
            <hr />
            <Projects />
            <hr />
            <Experiences />
            <hr />
            <Contact />
        </main>
    );
};

export default Home;