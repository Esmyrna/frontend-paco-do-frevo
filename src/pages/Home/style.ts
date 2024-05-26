import styled from "styled-components";
import BaseColors from "../../styleguide/BaseColors";

/** ????????????
 * separar interface no arquivo de types
 */
export const Section = styled.section<{
  flexDirection: string;
  marginTop: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  width: 100%;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: 5vh;

  @media (width < 720px) {
  }
`;

export const VideoContainer = styled.video`
  width: 100%;
`;

/** ??????????// */
export const VideoSlogan = styled.section<{
  backgroundColor: string;
  width: string;
  height?: string;
  isSecondary?: boolean;
}>`
  position: absolute;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  border-radius: 12px;
  flex-direction: column;
  z-index: 0;
  height: 30vh;
  gap: 10%;

  @media (width <= 1000px) {
    height: ${(props) => (props.isSecondary ? "15vh" : "20vh")};
    width: ${(props) => (props.isSecondary ? "60vw" : "70vw")};
  }
`;

export const About = styled.section<{ width?: string }>`
  width: ${(props) => props.width ?? "60%"};
  text-align: center;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (width <= 1000px) {
    align-items: center;
    width: 80vw;
  }
`;

export const BackgroundImageFrevo = styled.div`
  background-color: #00377b;
  width: 20%;
  height: 40vh;
`;
export const AboutBackground = styled.div`
  display: flex;
  flex-direction: row;
  width: 35%;
`;

/**
The `TextAbout` styled component is defining the styles for a `<p>` element with the following
properties:
- Text alignment is set to justify.
- Font family is set to "Righteous" and fallback to sans-serif.
- Font size is initially set to 1.5rem.
- Maximum width is set to 80% of the container width.
*/
export const TextAbout = styled.p`
  text-align: justify;
  font-family: "Sofia Sans Condensed", sans-serif;
  font-size: 1.2rem;
  max-width: 100%;

  @media (width <= 1000px) {
    font-size: 0.9rem;
    max-width: 90%;
  }
`;

export const Card = styled.section<{
  border: string;
  backgroundColor: string;
  boxShadow: string;
}>`
  width: 20vw;
  height: 50vh;
  border: ${(props) => props.border};
  margin: 1rem;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 12px;
  padding: 1rem;
  box-shadow: ${(props) => props.boxShadow};

  @media (width < 900px) {
    width: 30vw;
    height: 45vh;
  }

  @media (width < 720px) {
    width: 60vw;
    height: 40vh;
  }
`;

export const ContainerInfosCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  @media (width < 900px) {
    :first-child {
      scale: 0.7;
    }

    :nth-child(3) {
      font-size: 0.9rem;
    }
  }
`;

export const SignUp = styled.section`
  padding: 0.5rem;
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
`;

export const Img = styled.img``;
export const ImgBulding = styled.img`
  width: 90%;
  height: 100%;
  border-radius: 30px;
  box-shadow: 0px 0px 30px 0px #000;
`;
export const CardText = styled.p<{ fontSize: string; fontWeight: string }>`
  color: #000;
  font-family: "Sofia Sans Condensed", sans-serif;

  text-align: center;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: justify;
`;

/**
The `TextAndCarouselContainer` styled component is defining a container element with the following
styles:
- It has a width of 100vw, which means it will take up the full width of the viewport.
- It is a flex container with the flex direction set to row, aligning items along the main axis
(horizontally) and justifying content along the cross axis (center).
- Additionally, there is a media query specified using `@media` which targets viewport widths less
than or equal to 1000px. When the viewport width is less than or equal to 1000px, the flex direction
of the container is changed to column. This means that the items inside the container will be
stacked vertically instead of horizontally when the viewport is smaller. */
export const TextAndCarouselContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 60%;

  margin-bottom: 5vh;

  @media (width < 720px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: ${BaseColors.whiteishGray};
  padding: 10vh 0;

  @media (width < 720px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ImageFrevo = styled.div`
  width: 20vw;
  background-image: url("src/assets/Fundo.png");
  background-size: 40rem;
  background-repeat: no-repeat;
  position: relative;
  top: 90px;
  right: 170px;
`;
