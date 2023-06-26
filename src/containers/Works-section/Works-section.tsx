import React, { CSSProperties, useState } from "react";
import './works-section.scss'
import projects from "../../data/projects";
import Project from "../../components/project/Project";




const WorksSection = () => {
    const [workNum, setWorkNum] = useState(0);

    const setWorkNumValidate = (id: number) => {
        const maxIndex = projects.length - 1;
        (id <= maxIndex && id >= 0) && setWorkNum(id)
    }



    const handleMouseMovement = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const target = e.currentTarget as HTMLElement;
        const boxElements = target.querySelectorAll(".box");
        // ISSUE: It changes only the element I hover upon and don't change other elements. So if I 
        // don't hover upon any element it will not change any of them
        const boxElement = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;

        if (boxElement && boxElement.classList.contains("box")) {
            const rect = boxElement.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            boxElement.style.setProperty("--mouse-x", `${x}px`);
            boxElement.style.setProperty("--mouse-y", `${y}px`);
        }
        else if (boxElements.length > 0) {

            boxElements.forEach((element) => {
                const rect = element.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                    (element as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
                    (element as HTMLElement).style.setProperty("--mouse-y", `${y}px`);

            })
        }
    }

    return (
        <section className="works-section" onMouseMove={handleMouseMovement}>
            <div className="column column-first">
                <div className="works-list">
                    <ul>
                        {projects.map((project) => (
                            <li key={project.id} onClick={() => setWorkNumValidate(project.id)}>
                                <div className="works-list__item__container box"
                                >
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
                >
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