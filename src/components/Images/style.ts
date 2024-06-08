import styled from "styled-components";

export const Images = styled.img<{width: string, height: string, right: string, top: string}>`
    width: ${props => props.width};
    height: ${props => props.height};
    position: relative;
    right: ${props => props.right};
    top: ${props => props.top};
`;