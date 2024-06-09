import styled from "styled-components";
import { AssociationStylesProps } from "./types"; // Importando os tipos

const shouldForwardProp = (prop: string) => !['isGreen', 'isMobile'].includes(prop);

export const AssociationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    padding: 0.5rem;
    align-items: center;
    flex-wrap: nowrap;

    @media (max-width: 768px) {
        padding: 0.4rem;
    }

    @media (max-width: 400px) {
        padding: 0.3rem;
    }
`;

export const AssociationQuantity = styled.div.withConfig({ shouldForwardProp })<AssociationStylesProps>`
    display: flex;
    width: ${({ isMobile }) => (isMobile ? '4vw' : '4rem')};
    height: ${({ isMobile }) => (isMobile ? '4vw' : '4rem')};
    border: ${({ isMobile }) => (isMobile ? 'none' : '4px solid')};
    border-color: ${({ isGreen }) => (isGreen ? '#27962D' : '#0065E0')};
    border-radius: 50%;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 8vw;
        height: 8vw;
    }

    @media (max-width: 400px) {
        width: 4vw;
        height: 4vw;
    }
`;

export const AssociationText = styled.span.withConfig({ shouldForwardProp })<AssociationStylesProps>`
    font-family: 'Righteous', sans-serif;
    color: ${({ isGreen }) => (isGreen ? '#27962D' : '#0065E0')};
    font-size: ${({ isMobile }) => (isMobile ? '12px' : '16px')};
    font-weight: 600;
`;
