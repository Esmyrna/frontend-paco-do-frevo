import styled from "styled-components";

export const VisualDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: #F5F5F5;
    gap: 0.5rem;
    overflow: none;
    width: 100%;
`

export const VisualDataSections = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;

    @media (min-width: 800px) {
        flex-direction: row;
    }
`

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 800px) {
        width: 47%;
    }

    gap: 0.5rem;
`

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 800px) {
        width: 46%;
    }

    gap: 0.5rem;
`
