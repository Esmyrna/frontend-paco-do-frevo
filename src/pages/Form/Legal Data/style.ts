import styled from "styled-components";

export const Section = styled.section`
    margin-top: 30px;
    width: 100%;
    height: 30vh;
    display: flex;
    
    
`;

export const DataInfos = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
 
`;

export const Infos = styled.div`
    background-color: #E9E9E9;
    width: 250px;
    height: 230px;
    margin-top: 10%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;


 
`;

export const ButtonOptions = styled.div`
 
    border: none;
    text-align: start;
    margin: 1rem;
    font-family: 'Righteous', sans-serif;

    &:hover {
    color: #E20821;
    border: none;
    padding: .8rem;
    margin: .5rem;
    text-align: start;
    background-color: #fff;
    cursor: pointer;
    border-radius: 8px;
    }
`;

export const FormContainer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    
`

export const FormText = styled.div`
    width: 30%;
    border-radius: 8px;
    border: 1px solid #3F3F3F;
     
`;

export const InputsContainer = styled.div<{flexDirection: string, width: string, height: string}>`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    width:  ${props => props.width};
    margin-top: .2rem;
    margin-bottom: .2rem;
    height: ${props => props.height};
    
`;


export const RadioInputContainer = styled.div`
    display: flex;
    height: 70%;
    flex-direction: column;
    margin-top: 20px;

`;

export const Options = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 100px;
    height: 35px;
   
`;

export const RadioLabel = styled.label`
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 0px;
    margin-right: 4rem;
    font-size: 16px;
    user-select: none;
`;

export const QuestionsInput = styled.div`
    width: 70%;
    display: flex;
    font-size: 16px;
    flex-direction: column;
    height: 25%;

   
  ;
   
`;

export const RadioInputChecked = styled.input``;

export const FormInputs = styled.div`
    display: flex;
    width: 65%;
    flex-direction: column;
    border-radius: 8px;
    border-right: 1px solid #3F3F3F;
    border-top: 1px solid #3F3F3F;
    border-bottom: 1px solid #3F3F3F;
     
    
`;

export const Fields = styled.div`
    width: 100%;
    height: 55%;
    padding: .6rem;

`;

export const SaveInfos = styled.div`
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 3rem;
`;
export const Select = styled.select<{width: string}>`
    height: 28px;
    width: ${props => props.width};
    border-radius: 8px;
    border: 1px solid #3F3F3F;
    font-family: 'Righteous', sans-serif;
   

`;
export const ButtonForm = styled.div``;

export const TextForm = styled.p`
    margin:0;
    font-family: 'Righteous', sans-serif;
    padding: 1rem;
`;

export const Contact = styled.div`
    display: flex;
    align-items: flex-end;
    padding-left: .5rem;
    width: 99%;
    flex-direction: row;
    margin-top: 20px;
    padding-bottom: 5%;
    border-bottom: 1px solid #000;
   
  
`;



export const ButtonContact = styled.button`
    margin-left: 50px;
    padding: .5rem;
    width: 15%;
    border-radius: 8px;
    background-color: #27962D;
    color: #fff;
    border: none;
    cursor: pointer;
     
`;

export const SpaceButton = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    height: 85px;
    justify-content: center;
    align-items: center;
`;

export const BackButton = styled.button`
    color: #0065E0;
    background-color: transparent;
    border: 1px solid #0065E0;
    margin: 1rem;
    padding: .5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
`;