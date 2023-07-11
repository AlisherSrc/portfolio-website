import React from "react";

import './project.scss';
import right_arrow from './../../assets/right-arrow.svg';

export interface ProjectProps {
    id: string,
    title: string,
    subtitle?: string,
    description?: string,
    images?: string[],
    type?:string
}

const Project: React.FC<ProjectProps> = ({ id, title, subtitle, description, images,type }) => {
    // TO DO: Fill it with the semantic HTML
    return (
        <article className="project__container">

            <img className="project__image" key={images?.[0]} src={images?.[0]} alt="images of project" />
            <div className="project__content">
                <p>{type}</p>
                <h1 className="project__title">{title}</h1>
                <h2 className="project__subtitle">{subtitle}</h2>
                {description && <p className="project__description">{description}</p>}
                
                <a className="project__link">More <img src={right_arrow} /></a>
            </div>
        </article>
    );
};

export default Project;