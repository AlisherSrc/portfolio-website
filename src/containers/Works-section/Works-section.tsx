import React, { useState } from "react";
import './works-section.scss'
import Project, { ProjectProps } from "../../components/project/Project";
import useFirestore from "../../hooks/useFirestore";



const WorksSection = () => {
    const [workNum, setWorkNum] = useState(0);
    const [projectBoxAnim, setProjectBoxAnim] = useState<string>("fade_in");

    const { collectionList: projects, loading } = useFirestore<ProjectProps>("projects");

    const setWorkNumValidate = (id: number) => {
        console.log("id", id);

        // Animate the fade_out transition
        setProjectBoxAnim("fade_out");

        const maxIndex = projects.length - 1;

        setTimeout(() => {
            // Animate the fade_in transition after a short delay
            setProjectBoxAnim("fade_in");

            // Update workNum if id is within the valid range
            if (id <= maxIndex && id >= 0) {
                setWorkNum(id);
            }
        }, 300); // Adjust the delay (in milliseconds) as needed
    }

    const handleMouseMovement = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const target = e.currentTarget as HTMLElement;
        const boxElements = target.querySelectorAll(".box");

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
        (!loading) ?
            <section className="works-section" onMouseMove={handleMouseMovement}>
                <div className="column column-first">
                    <div className="works-list">
                        <ul>

                            {projects[workNum - 1] && <li key={projects[workNum].id + "-prev"} onClick={() => { setWorkNumValidate(workNum - 1) }}>
                                <div className={`works-list__btn works-list__item__container box`}>
                                    <div className="box-content">
                                        {projects[workNum - 1].title}
                                    </div>
                                </div>
                            </li>}
                            <li key={projects[workNum].id + "-current"}>
                                <div className={`works-list__item__container box`}>
                                    <div className="box-content">
                                        {projects[workNum].title}
                                    </div>
                                </div>
                            </li>
                            {projects[workNum + 1] && <li key={projects[workNum + 1].id + "-next"} onClick={() => { setWorkNumValidate(workNum + 1) }}>
                                <div className={`works-list__btn works-list__item__container box`}>
                                    <div className="box-content">
                                        {projects[workNum + 1].title}
                                    </div>
                                </div>
                            </li>}
                        </ul>
                    </div>
                </div>

                <div className="column column-second">
                    <a href={projects[workNum].link} target="blank">
                        <div className={`project-cards box ${projectBoxAnim}`}
                        >
                            <div className="box-content">
                                <Project
                                    id={projects[workNum].id}
                                    title={projects[workNum].title}
                                    subtitle={projects[workNum].subtitle}
                                    images={projects[workNum].images}
                                    link={projects[workNum].link} />
                            </div>
                        </div>
                    </a>
                </div>

            </section>
            :
            <section>
                <p>Loading...</p>
            </section>
    )
}

export default WorksSection;