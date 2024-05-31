import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../../constants';

const Experiences = () => {
    return (
        <section id='experience' className='section-experiences'>
            <span className='tag-title'>Expériences</span>
            <h2>Mon Parcours</h2>

            <VerticalTimeline>
                {
                    experiences.map((experience, index) => (

                        <VerticalTimelineElement
                        key={`experience-${index}`}
                            contentStyle={{
                                borderRadius: "1.5rem",
                                background: "#3E92FF",
                                color: "#fff",
                            }}
                            contentArrowStyle={{ borderRight: "7px solid  #3E92FF" }}
                            date={experience.date}
                            dateClassName='date'
                            iconStyle={{ background: experience.iconBg }}
                            icon={
                                <div className='icon_vertical'>
                                    <img
                                        src={experience.icon}
                                        alt={experience.company}
                                    />
                                </div>
                            }
                        >
                            <div>
                                <h3 className='vertical-title'> {experience.title} </h3>
                                <h4 className='vertical-subtitle'> {experience.company} </h4>
                            </div>

                            <ul className='vertical-point-container'>
                                {experience.points.map((point, index) => (
                                    <li
                                        key={`experience-point-${index}`}
                                        className='vertical-point'
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>

                    ))
                }
            </VerticalTimeline>

        </section>
    );
};

export default Experiences;