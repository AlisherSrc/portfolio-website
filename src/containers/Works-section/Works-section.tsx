import React, { CSSProperties, useState } from "react";
import './works-section.scss'
import projects from "../../data/projects";
import Project from "../../components/project/Project";




const WorksSection = () => {
    const [workNum, setWorkNum] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const setWorkNumValidate = (id: number) => {
        const maxIndex = projects.length - 1;
        (id <= maxIndex && id >= 0) && setWorkNum(id)
    }



    const handleMouseMovement = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const target = e.currentTarget as HTMLElement;
        const boxElements = target.querySelectorAll(".box");

        if (boxElements.length > 0) {
            const rect = boxElements[0].getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
            setMousePosition({x:x,y:y});

        }
    }


    // Styles

    interface boxCSSProperties extends CSSProperties{
        "--mouse-x": string,
        "--mouse-y": string
    } 

    const boxProperties: boxCSSProperties = {
        "--mouse-x":`${mousePosition.x}px`,
        "--mouse-y":`${mousePosition.y}px`
    };

    return (
        <section className="works-section" onMouseMove={handleMouseMovement}>
            <div className="column column-first">
                <div className="works-list">
                    <ul>
                        {projects.map((project) => (
                            <li key={project.id} onClick={() => setWorkNumValidate(project.id)}>
                                <div className="works-list__item__container box"
                                style={boxProperties}>
                                    <div className="box-content">
                                        {project.title}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="column column-second">

                <div className="project-cards box"
                style={boxProperties}>
                    <div className="box-content">
                        <Project
                            id={projects[workNum].id}
                            title={projects[workNum].title}
                            subtitle={projects[workNum].subtitle}
                            images={projects[workNum].images} />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default WorksSection;