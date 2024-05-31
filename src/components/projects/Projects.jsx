import React from 'react';
import { projects } from '../../constants';
import ProjectCard from '../projectCard/ProjectCard';

const Projects = () => {
    return (
        <section id='work' className='section_works'>
            <span className='tag-title'>Projets</span>
            <h2>Projets que j'ai créés</h2>
            <div className='works-container'>
                {
                    projects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            title={project.name}
                            description={project.description}
                            src={project.image}
                            tags={project.tags} 
                            link={project.code_link}/>
                    ))
                }
            </div>
        </section>
    );
};

export default Projects;