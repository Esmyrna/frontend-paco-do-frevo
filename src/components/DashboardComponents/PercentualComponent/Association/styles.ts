import styled from "styled-components";

export const AssociationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;
    padding: 0.5rem;
    align-items: center;
`

export const AssociationQuantity = styled.div<AssociationStylesProps>`
    display: flex;
    width: 60px;
    height: 60px;
    border: 4px solid;
    border-color: ${({ isGreen }) => isGreen ? '#27962D' : '#0065E0'};
    border-radius: 50%;
    justify-content: center;
    align-items: center;
`

export const AssociationText = styled.span<AssociationStylesProps>`
    font-family: 'Righteous', sans-serif;
    color: ${({ isGreen }) => isGreen ? '#27962D' : '#0065E0'};
    font-size: 18px;
    font-weight: 600;
`