import { styled } from "styled-components";
import { FontDiv, GridDiv } from "./GlobalStyled";


export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
`

export const ProjectHeaderDiv = styled.div`
    :hover{
        background-color: #4F5964;
        transition: all 0.4s;
    }
`
export const ProjectHeaderText = styled(FontDiv)`
    font-size: 20px;
    padding: 10px;
    transition: all 0.3s;
    border-radius: 5px;
    box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.25);
`
export const ProjectListDiv = styled(GridDiv)` 
    grid-gap:40px;
    padding: 10px;
`
export const ProjectImg = styled.img`
    width: 100%;
    height: 50vh;
    
`
export const ProjectCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.25);
    max-height: 100%;
    border-radius: 5px;
    /* width: 100%; */
    background-color: #75A2D6;
    cursor: pointer;
`
export const ProjectCardTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
`
export const ProjectCardText = styled(FontDiv)`
    
`