import React from 'react';
import { github } from '../../assets';

const ProjectCard = ({title, src, description, tags, link}) => {
    return (
        <article className='projectCard'>
            <img className='project-preview' src={src} alt={"Capture d'écran de " + title} />
            <h3 className='project-title'>{title}</h3>
            <p className='project-description'>{description}</p>
            <div className='tags-container'>
                {
                    tags.map((tag) => (
                        <p key={tag} className='project-tag'>{tag}</p>
                    ))
                }
            </div>
            <div className='project-link'>

            <img  src={github} alt="Logo github" onClick={() => window.open(link, "_blank")}/>
            <p onClick={() => window.open(link, "_blank")}>Voir le code</p>
            </div>
        </article>
    );
};

export default ProjectCard;