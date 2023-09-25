import React from 'react'
import { projectData } from '../data/project'
import { ProjectCardDiv, ProjectCardText, ProjectCardTextDiv, ProjectImg } from '../style/Project'

function ProjectCard() {
    return (
        projectData.map((e) =>
        (
            <ProjectCardDiv id='test'>
                <ProjectImg src={e.svg} />
                <ProjectCardTextDiv>
                    <ProjectCardText fontFamily='GmarketB' color='#fff'> {e.name}</ProjectCardText>
                    <ProjectCardText fontFamily='GmarketB' color='#fff'> {e.state}</ProjectCardText>
                </ProjectCardTextDiv>
            </ProjectCardDiv>
        )
        )
    )
}

export default ProjectCard