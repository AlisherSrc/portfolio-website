import React from "react";
import './works-section.scss'
import projects from "../../data/projects";
import Project from "../../components/project/Project";




const WorksSection = () => {


    return (
        <section className="worksSection">
            <div>
                <h2>My works:</h2>
                <div className="projects-track">
                    {projects.map(() => (
                        <Project />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default WorksSection;