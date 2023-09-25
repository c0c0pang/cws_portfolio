import { styled } from "styled-components";
import { FontDiv } from "./GlobalStyled";

export const CardContainer = styled.div`
    display: flex;
    padding: 20px;
    padding-left: 50px;
    padding-top: 40px;
    flex-direction: column;
    gap: 30px;
`

export const ProfileImg = styled.img`
    width: 10em;
    border-radius: 7px;
`
export const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 3px solid white;
    padding: 10px;
    gap: 25px;
`
export const ProfileInfoText = styled(FontDiv)`
    font-size: 16px;
`

export const ProfileInfoLink = styled.a`
    color: white;
    font-size: 17px;
`
export const AboutMeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 50px;
`
export const AboutMeDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const AboutMeText = styled(FontDiv)`
    font-size: 30px;
`
export const AboutMeDetailText = styled(FontDiv)`
    font-size: 19px;
`