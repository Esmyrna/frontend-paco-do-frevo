import styled from "styled-components";

export const DashboardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`
export const DashboardContent = styled.div`
    display: flex;
    height: auto;
    overflow-y: scroll;
    overflow-x: none;
    &::-webkit-scrollbar{
        width: 0.25rem;
    }
    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 0.625rem;
        background-color: #C0C0C0;
    }
`