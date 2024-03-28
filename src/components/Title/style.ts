import styled from "styled-components";

export const Title = styled.h2<{color: string, textAlign: string, Size: string}>`
    text-align: ${props => props.textAlign};
    opacity: 1;
    z-index: 3;
    font-family: 'Righteous', sans-serif;
    font-size: ${props => props.Size};
    text-transform: uppercase;
    color: ${props => props.color};
    font-weight: 700;
`;