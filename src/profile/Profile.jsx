import React from 'react'
import { FlexDiv } from '../style/GlobalStyled'
import Card from './Card'
import Info from './Info'
import Project from './Project'
function Profile() {
    return (
        <FlexDiv direction='column'>
            <FlexDiv>
                <Card />
                <Info />
            </FlexDiv>
            <Project />
        </FlexDiv>
    )
}

export default Profile