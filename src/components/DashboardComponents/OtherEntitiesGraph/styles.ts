import styled from "styled-components"

export const OtherEntitiesGraphWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 0.25rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: auto;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
`

export const OtherEntitiesGraphTitle = styled.h4`
    font-size: 1rem;
    font-family: 'Righteous';
    color: #3F3F3F;
    font-weight: 600;
    line-height: 150%;
`

export const NoDataMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 100%;
    font-size: 1.2rem;
    color: #999;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 0.25rem;
`;