import styled from 'styled-components'
import { FontDiv } from './GlobalStyled'

export const TopBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    position: sticky;
    top: 0;
    background: linear-gradient(90deg, rgba(200,205,227,1) 3%, rgba(232,177,172,1) 46%, rgba(255,166,158,1) 60%, rgba(255,218,156,1) 100%);
    height: 8em;
    padding-left: 3em;
`
export const TopBarDiv = styled.div`
`
export const TopBarLogoDiv = styled.div`
`

export const TopBarLogoText = styled(FontDiv)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 28px;
    font-weight: bold;
`