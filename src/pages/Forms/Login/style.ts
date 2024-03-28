import styled  from "styled-components";
import FundoImage from '../../../assets/Fundo.png';


export const Container = styled.div`
   background-image: url(${FundoImage});
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
 
    
`;

export const CardContainerLogin = styled.div`
    background-color: #fcfcfc;
    width: 35%;
    height: 40%;
    border-radius: 8px;
    border: none;
    display: flex;
    flex-direction: column;
   
 
`;

export const CardContainerLoginTitle = styled.h2`
    text-align: center;
    font-size: 20px;
    font-family: 'Righteous', sans-serif;
`;

export const CardContainerInputs = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    padding-left: 2.5rem;
   
`;

export const CardForgotPassword = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const  CardForgotPasswordText = styled.p`
    font-size: 10px;
    padding-left: 1rem;
    padding-right: 1rem;
    font-family: 'Righteous', sans-serif;
    cursor: pointer;

`;

export const Span = styled.span`
    color: #00377B;
`

export const CardButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
`;