import React from 'react'
import { TopBarDiv, TopBarContainer, TopBarLogoDiv, TopBarLogoText } from '../style/BarStyled'

function TopBar() {
    return (
        <TopBarContainer>
            <TopBarDiv>
                <TopBarLogoText fontFamily='GmarketL'>Wonseck Choi</TopBarLogoText>
            </TopBarDiv>
        </TopBarContainer>
    )
}

export default TopBar