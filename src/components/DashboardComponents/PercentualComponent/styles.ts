import styled from "styled-components";

export const PercentualComponentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;
    background-color: #ffff;
    border-radius: 0.25rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }

    @media (max-width: 400px) {
        padding: 0.25rem;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`