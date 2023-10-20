import React, { useState } from 'react';
import { ProjectCategoryDiv, ProjectCategoryText, ProjectContainer, ProjectHeaderDiv, ProjectHeaderText, ProjectListDiv } from '../style/Project';
import ProjectCard from './ProjectCard';

function Project() {
    const [colorCheck, setColorCheck] = useState(true);

    const handleCategoryClick = (category) => {
        if (colorCheck !== category) {
            setColorCheck(category);
        }
    };

    return (
        <ProjectContainer>
            <ProjectHeaderDiv>
                <ProjectHeaderText fontFamily='GmarketB' color='#fff'>Project</ProjectHeaderText>
            </ProjectHeaderDiv>
            <ProjectCategoryDiv gap={20} check={colorCheck}>
                <ProjectCategoryText
                    fontFamily='GmarketB'
                    color='#fff'
                    id='web'
                    onClick={() => handleCategoryClick(true)}
                >
                    Web
                </ProjectCategoryText>
                <ProjectCategoryText
                    fontFamily='GmarketB'
                    color='#fff'
                    id='app'
                    onClick={() => handleCategoryClick(false)}
                >
                    App
                </ProjectCategoryText>
            </ProjectCategoryDiv>
            <ProjectListDiv cnumber={3}>
                <ProjectCard colorCheck={colorCheck} />
            </ProjectListDiv>
        </ProjectContainer>
    );
}

export default Project;
