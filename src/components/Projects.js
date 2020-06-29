import React from "react";
import PROJECTS from "../data/projects";

//class to render a project
//props is passed from a parent object
const Project = props => {
    //tie all project attributes to props' keys and render it
    const { title, image, description, link, linkdesc } = props.project;
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={image} alt="Project" style={{ height: "40vmin", minHeight: 100, maxHeight: 200 }}/>
            <p></p>
            <p>{description}</p>
            <a href={link} target="_blank">{linkdesc}</a>
        </div>
    )
}

//functional component can be applied to anything w/o state
const Projects = () => (
    <div>
        <h2>My Projects</h2>
        <div>
        {
            //pass each project object to the Project class to convert it to jsx code
            PROJECTS.map(PROJECT => (
                <Project key={PROJECT.id} project={PROJECT}/>
            ))
        }
        </div>
    </div>
)

export default Projects;