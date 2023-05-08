import React from "react";

interface ProjectProps {
    id: number,
    title: string,
    subtitle?: string,
    description?: string,
    images?: string[],
    imagesNum?:number
}

const Project: React.FC<ProjectProps> = ({id,title,subtitle,description,images,imagesNum}) => {
    return (
        <>
            <h1 className="project__title">{title}</h1>
            <h2 className="project__subtitle">{subtitle}</h2>
            {description && <p className="project__description">{description}</p>}
            <img className="project__image" key={images?.[0]} src={images?.[0]} alt="images of project" />
        </>
    );
};

export default Project;