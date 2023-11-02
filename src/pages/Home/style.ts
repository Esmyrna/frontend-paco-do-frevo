import styled from "styled-components";

/** ????????????
 * separar interface no arquivo de types
 */
export const Section = styled.section<{flexDirection: string, marginTop: string}>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.flexDirection};
    width: 100%;
    margin-top: ${props => props.marginTop}
`;

/** ????????? */
export const VideoContainer = styled.video`
    width: 100%;
    
`;

/** ??????????// */
export const VideoSlogan = styled.div<{ backgroundColor: string, width: string, height: string}>`
    position: absolute;
    background-color: ${props => props.backgroundColor};
    color: #fff;
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    border-radius: 12px;
    flex-direction: column;
    z-index: 0;
    
`;

/** ?????????? */
export const About = styled.div<{width: string}>`
    width: ${props => props.width};
    text-align: center;
 
`;

/** ??????????????????? */
export const TextAbout = styled.p`
    text-align: justify;
    padding-left: 2rem;
    font-family: 'Righteous', sans-serif;
    font-size: 16px;
    font-weight: 600;
    /** Fonte */
    font-family: 'Alatsi', sans-serif;
`;
 