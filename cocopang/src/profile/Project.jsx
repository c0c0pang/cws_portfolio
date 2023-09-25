import React from 'react'
import { ProjectContainer, ProjectHeaderDiv, ProjectHeaderText, ProjectListDiv } from '../style/Project'
import ProjectCard from './ProjectCard'

function Project() {
    return (
        <ProjectContainer>
            <ProjectHeaderDiv>
                <ProjectHeaderText fontFamily='GmarketB' color='#fff'>Project</ProjectHeaderText>
            </ProjectHeaderDiv>
            <ProjectListDiv cnumber={3}>
                <ProjectCard />
            </ProjectListDiv>
        </ProjectContainer>
    )
}

export default Project