import React from 'react'
import { MainContainer, MainDiv } from '../style/MainStyled'
import TopBar from '../topBar/TopBar'
import Profile from '../profile/Profile'

function MainPage() {
    return (
        <MainContainer>
            <TopBar />
            <MainDiv>
                <Profile />
            </MainDiv>
        </MainContainer>

    )
}

export default MainPage