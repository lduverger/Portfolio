import React from 'react';
import { technos } from '../../constants';

const Skills = () => {
    return (
        <section id="skill" className='section_skill'>
            <span className='tag-title'>Compétences</span>
            <h2>Technos et outils que je maîtrise</h2>
            <div className='technos-container'>
                {
                    technos.map((techno) => (
                        <div key={techno.name} className='techno-container'>
                            <img className='techno-img' src={techno.icon} alt={"Logo " + techno.name} />
                            <p className='techno-title'>{techno.name}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Skills;