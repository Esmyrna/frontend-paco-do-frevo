import styled, { keyframes } from "styled-components";
import BaseColors from "../../styleguide/BaseColors";


interface AssociationPropertyBlockProps {
    isBigContainer?: boolean;
}

interface IconContainerProps {
    color: string;
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

export const ContainerInfosAssociation = styled.article`
  display: flex;
  padding: 1rem;
  width: 90%;
  gap: 7.5vw;
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
`;

export const Title = styled.h4`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: ${BaseColors.darkBlue};
`;

export const RegularText = styled.p`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Association = styled.section`
  border: 2px solid #989898;
  border-radius: 10px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  width: 90%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.aside<IconContainerProps>`
  border-radius: 41% 59% 54% 46% / 50% 37% 63% 50%;
  width: 4vw;
  height: 4vw;
  background-color: ${props => props.color};

  display: flex;
  justify-content: center;
  align-items: center;

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
