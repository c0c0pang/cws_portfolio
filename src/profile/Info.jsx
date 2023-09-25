import React from 'react'
import { AboutMeContainer, AboutMeDetailText, AboutMeDiv, AboutMeText, ProfileInfoContainer, ProfileInfoText } from '../style/ProfileCard'
import { FlexDiv } from '../style/GlobalStyled'

function Info() {
    return (
        <AboutMeContainer>
            <AboutMeDiv>
                <AboutMeText fontFamily={'GmarketB'} color='white'>About Me</AboutMeText>
                <AboutMeDetailText fontFamily={'GmarketM'} color='white'>개발하는게 즐겁고 계속 성장하고 싶어하는 FE 개발자 최원석입니다.</AboutMeDetailText>
            </AboutMeDiv>
            <AboutMeDiv>
                <AboutMeText fontFamily={'GmarketB'} color='white'>Education</AboutMeText>
                <ProfileInfoContainer>
                    <FlexDiv gap='10px'>
                        <ProfileInfoText fontFamily={'NanumB'} color='white'>2017.02 매홀 고등학교 졸업</ProfileInfoText>
                        <ProfileInfoText fontFamily={'NanumB'} color='#FFAEAE'>졸업</ProfileInfoText>
                    </FlexDiv>
                    <FlexDiv gap='10px'>
                        <ProfileInfoText fontFamily={'NanumB'} color='white'>2018.03 광운대학교</ProfileInfoText>
                        <ProfileInfoText fontFamily={'NanumB'} color='#FFAEAE'>재학 중</ProfileInfoText>
                    </FlexDiv>
                </ProfileInfoContainer>
            </AboutMeDiv>
            <AboutMeDiv>
                <AboutMeText fontFamily={'GmarketB'} color='white'>Activities</AboutMeText>
                <ProfileInfoContainer>
                    <FlexDiv gap='10px'>
                        <ProfileInfoText fontFamily={'NanumB'} color='white'>2022.01.01 멋쟁이사자처럼 대학 10기</ProfileInfoText>
                        <ProfileInfoText fontFamily={'NanumB'} color='#FFAEAE'>2022.12.31</ProfileInfoText>
                    </FlexDiv>
                    <FlexDiv gap='10px'>
                        <ProfileInfoText fontFamily={'NanumB'} color='white'>2023.8 GDSC.KW</ProfileInfoText>
                        <ProfileInfoText fontFamily={'NanumB'} color='#FFAEAE'>2024.7</ProfileInfoText>
                    </FlexDiv>
                </ProfileInfoContainer>
            </AboutMeDiv>
            <AboutMeDiv>
                <AboutMeText fontFamily={'GmarketB'} color='white'>Career</AboutMeText>
                <ProfileInfoContainer>
                    <FlexDiv gap='10px'>
                        <ProfileInfoText fontFamily={'NanumB'} color='white'>미정</ProfileInfoText>
                    </FlexDiv>
                </ProfileInfoContainer>
            </AboutMeDiv>
        </AboutMeContainer>
    )
}

export default Info