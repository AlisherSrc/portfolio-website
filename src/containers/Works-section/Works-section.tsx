import React, { useState } from "react";
import './works-section.scss'
import projects from "../../data/projects";
import Project from "../../components/project/Project";




const WorksSection = () => {
    const [workNum,setWorkNum] = useState(0);

    const setWorkNumValidate = (id : number) =>{
        const maxIndex = projects.length - 1;
        (id <= maxIndex && id >= 0) && setWorkNum(id) 
    }

    return (
        <section className="works-section">
            <div className="column column-first">
                <div className="works-list">
                    <ul>
                        {projects.map((project) => (
                            <li key={project.id} onClick={() => setWorkNumValidate(project.id)}>
                                {project.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="column column-second">
                <div className="project-cards">
                    <Project id={projects[workNum].id} title={projects[workNum].title} subtitle={projects[workNum].subtitle} images={projects[workNum].images}/>
                </div>
            </div>

        </section>
    )
}

export default WorksSection;