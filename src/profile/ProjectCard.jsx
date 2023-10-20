import React from 'react';
import { projectData } from '../data/project';
import { ProjectCardDiv, ProjectCardText, ProjectCardTextDiv, ProjectImg } from '../style/Project';

function ProjectCard(props) {
    const filteredProjects = projectData.filter((e) => {
        if (props.colorCheck) {
            return e.type === 'Web';
        } else {
            return e.type === 'App';
        }
    });

    return (
        <>
            {filteredProjects.map((project, index) => (
                <ProjectCardDiv id='test' key={index}>
                    <ProjectImg src={project.svg} />
                    <ProjectCardTextDiv>
                        <ProjectCardText fontFamily='GmarketB' color='#fff'>{project.name}</ProjectCardText>
                        <ProjectCardText fontFamily='GmarketB' color='#fff'>{project.state}</ProjectCardText>
                    </ProjectCardTextDiv>
                </ProjectCardDiv>
            ))}
        </>
    );
}

export default ProjectCard;
