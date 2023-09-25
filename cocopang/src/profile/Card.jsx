import React from 'react'
import { CardContainer, ProfileImg, ProfileInfoContainer, ProfileInfoLink, ProfileInfoText } from '../style/ProfileCard'
import { FlexDiv } from '../style/GlobalStyled'
import profileImg from '../img/profileImg.svg'
function Card() {
    return (
        <CardContainer>
            <ProfileImg src={profileImg}></ProfileImg>
            <ProfileInfoContainer>
                <ProfileInfoText fontFamily={'NanumB'} color='white'>Wonseck Choi</ProfileInfoText>
                <ProfileInfoText fontFamily={'NanumB'} color='white'>1999.07.10</ProfileInfoText>
                <ProfileInfoText fontFamily={'NanumB'} color='white'>Tel: 010-7659-0451</ProfileInfoText>
                <ProfileInfoText fontFamily={'NanumB'} color='white'>E-mail: cocopang178@gmail.com</ProfileInfoText>
                <FlexDiv>
                    <ProfileInfoText fontFamily={'NanumB'} color='white'>GitHub:</ProfileInfoText>
                    <ProfileInfoLink href='https://github.com/c0c0pang' target='_blank'>https://github.com/c0c0pang</ProfileInfoLink>
                </FlexDiv>
            </ProfileInfoContainer>
        </CardContainer>
    )
}

export default Card