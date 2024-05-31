import styled, { css, keyframes } from "styled-components";
import BaseColors from "../../styleguide/BaseColors";
import { AssociationItemProps } from ".";

interface AssociationPropertyBlockProps {
    isBigContainer?: boolean;
}

interface CircularButtonProps {
    isExpanded?: boolean;
}

interface IconContainerProps {
    color: string;
}

interface InfoContainerProps {
    shouldHaveDivisionBorder?: boolean;
    shouldAnimate?: boolean;
    orientation: 'row' | 'column';
    alignment: 'center' | 'start';
}

const tumble = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ContainerInfosAssociation = styled.article`
  display: flex;
  padding: 1rem;
  width: 90%;
  gap: 2vw;
`;

export const AssociationPropertyBlock = styled.section<AssociationPropertyBlockProps>`
  display: flex;
  flex-direction: column;

  width: ${props => props.isBigContainer
        ? '20%'
        : '15%'
    };

  max-width: ${props => props.isBigContainer
        ? '20%'
        : '15%'
    };

  min-width: ${props => props.isBigContainer
        ? '20%'
        : '15%'
    };

  @media (width <= 768px) {
    width: ${props => props.isBigContainer
        ? '25%'
        : '20%'
    };

  max-width: ${props => props.isBigContainer
        ? '25%'
        : '20%'
    };

  min-width: ${props => props.isBigContainer
        ? '25%'
        : '20%'
    };
  }

  @media (width <= 600px) {
    width: ${props => props.isBigContainer
        ? '40%'
        : '20%'
    };

  max-width: ${props => props.isBigContainer
        ? '40%'
        : '20%'
    };

  min-width: ${props => props.isBigContainer
        ? '40%'
        : '20%'
    };
  }
`;

export const AssociationLargePropertyBlock = styled.article`
  display: flex;
  flex-direction: column;

  width: 90%;
  max-width: 90%;
  min-width: 90%;
`;

export const Title = styled.h4`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: ${BaseColors.darkBlue};
`;

export const RegularText = styled.p`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  font-size: 1rem;
  word-break: break-word;
  text-align: justify;
`;

export const PropertyText = styled.p`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #000;
  font-size: 1rem;
  word-break: break-word;
`;

export const Association = styled.li<AssociationItemProps>`
  border: 2px solid #989898;
  border-radius: 10px;
  margin-bottom: 1rem;
  width: 90%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: sticky;

  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in forwards;
  animation-delay: ${(props) => props.index * 0.05}s; /* Delay progressivo */
`;

export const InfoContainer = styled.section<InfoContainerProps>`
  padding: 0.5rem;
  width: 95%;
  max-width: 95%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: ${props => props.orientation};
  align-items: ${props => props.alignment};

  border-top: ${props => props.shouldHaveDivisionBorder
        ? '2px solid #989898;'
        : 'none;'};

  gap: ${props => props.orientation === 'column'
        ? '2.5vh'
        : '0'
    };

  ${props => props.shouldAnimate && css`
    animation: ${fadeIn} 0.25s ease-in forwards;
    opacity: 0;
  `}

  animation-delay: 0s;
`;

export const IconContainer = styled.aside<IconContainerProps>`
  border-radius: 41% 59% 54% 46% / 50% 37% 63% 50%;
  width: 3.5vw;
  height: 3.5vw;
  background-color: ${props => props.color};

  display: flex;
  justify-content: center;
  align-items: center;

  @media (width <= 1250px) {
    width: 5vw;
    height: 5vw;
  }

  @media (width <= 768px) {
    width: 8vw;
    height: 8vw;
}

@media (width <= 550px) {
    width: 10vw;
    height: 10vw;
    margin-top: -2vw;
  }

  &:hover img {
    animation: ${tumble} 0.4s ease-in-out;
  }
`;

export const IconSubstitute = styled.h3`
  color: ${BaseColors.darkBlue};
  font-size: 2rem;

  &:hover {
    animation: ${tumble} 0.4s ease-in-out;
  }
`;

// Container para o botão
export const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// Estilização do botão
export const CircularButton = styled.button<CircularButtonProps>`
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  transition: transform 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  ${(props) =>
        props.isExpanded &&
        css`
      transform: rotate(90deg);
    `}

  &:focus {
    outline: none;
  }
`;

// Triângulo dentro do botão
export const Triangle = styled.div<CircularButtonProps>`
  width: 0;
  height: 0;
  border-left: 0.4rem solid transparent;
  border-right: 0.4rem solid transparent;
  border-top: 0.5rem solid white;
  transition: transform 0.3s;

  ${(props) =>
        props.isExpanded &&
        css`
      transform: rotate(90deg);
    `}
`;

// Tooltip
export const Tooltip = styled.div`
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 0.5rem;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;

  ${ButtonContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }

  &::after {
    content: '';
    position: sticky;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

