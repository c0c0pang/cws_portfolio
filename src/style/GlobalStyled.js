import { styled } from "styled-components";

export const FontDiv = styled.div`
    font-family: ${(props) => props.fontFamily};
    color: ${(props) => props.color};
`;
export const FlexDiv = styled.div`
    display: flex;
    gap: ${(props) => props.gap};
    flex-direction: ${(props) => props.direction};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.cnumber}, 1fr);
    justify-items: center;
`;
export const GridCard = styled.div`
    width: 100%;
    height: 300px;
    box-shadow: 1px 2px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    transition: all 0.4s;
`;