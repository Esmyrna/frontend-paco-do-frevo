import styled from "styled-components";

/** ????????????
 * separar interface no arquivo de types
 */
export const Section = styled.section<{ flexDirection: string, marginTop: string }>`
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

export const Card = styled.div<{ border: string }>`
    width: 300px;
    height: 350px;
    border:${props => props.border};
    margin: 1rem;
`;

export const ContainerInfosCard = styled.div``;

export const SignUp = styled.div`
    
    width: 30%;
    display: flex;
    justify-content: flex-end;
    
`;

// Logo
export const Logo = styled.img`
  height: 2rem;
  width: 2rem;
`;

// Footer text
export const FooterText = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  text-align: justify;
  padding-left: 1rem;
`;

// Footer link texts
export const FooterLinkTexts = styled.a`
  font-family: 'Lato', sans-serif;
  font-size: 0.75rem;
  text-align: justify;
  padding-left: 1rem;
  color: #000;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #444;
  }
`;

// Footer container
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: start;
  background-color: white;
  border-top: solid 0.15rem #000;
  padding-top: 0.75rem;
  padding-bottom: 1rem;
  padding-left: 2.5vw;
  padding-right: 2.9vw;

  @media (max-width: 576px) {
    flex-direction: column;
  }

  & > ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

// Redes sociais
export const SocialNetworksList = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
  flex-direction: column;
  gap: 0.5rem;
`;

// Links úteis
export const UsefulLinksList = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FooterSection = styled.section<{ flexDirection: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    justify-self: flex-start;
    flex-direction: ${props => props.flexDirection};
  `;