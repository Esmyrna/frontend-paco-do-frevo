import styled, { keyframes } from "styled-components";


export const Section = styled.section<{ flexDirection: string, marginTop: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${props => props.flexDirection};
    width: 100%;
    margin-top: ${props => props.marginTop}
`;


export const VideoContainer = styled.video`
    width: 100%;
    
`;

/** ??????????// */
export const VideoSlogan = styled.div<{ backgroundColor: string, width: string, height: string }>`
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
export const About = styled.div<{ width: string }>`
    width: ${props => props.width};
    text-align: center;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items:  flex-start;
 
     
 
`;

/** ??????????????????? */
export const TextAbout = styled.p`
    text-align: justify;
    padding-left: 2rem;
    font-family: 'Righteous', sans-serif;
    font-size: 20px;
     
    /** Fonte */
   
`;


export const blinkAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px #E20821;
  }
  50% {
    box-shadow: 0 0 20px #00377B;
  }
  100% {
    box-shadow: 0 0 10px #27962D;
  }
`;

export const Card = styled.div<{ border: string; backgroundColor: string; boxShadow: string }>`
  width: 300px;
  height: 350px;
  border: ${props => props.border};
  margin: 1rem;
  background-color: ${props => props.backgroundColor};
  border-radius: 12px;
  padding: 1rem;
  box-shadow: ${props => props.boxShadow};
  animation: ${blinkAnimation} 2s infinite alternate; /* 2s de duração, infinito e alternado */
`;

export const ContainerInfosCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
 
`;

export const SignUp = styled.div`
    
    width: 31%;
    display: flex;
    justify-content: flex-end;
    
`;

export const Img = styled.img``;

export const CardText = styled.p<{fontSize: string, fontWeight: string}>`
  color: #fff;
  font-family: sans-serif;
  text-align: center;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
`;