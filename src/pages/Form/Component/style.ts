import styled from "styled-components";

export const Section = styled.section`
    margin-top: 30px;
    width: 100%;
    height: 100vh;
    display: flex;
    
    
`;

export const DataInfos = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
 
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

export const InputsContainer = styled.div<{flexDirection: string, width: string}>`
    display: flex;
    flex-direction: ${props => props.flexDirection};
    width:  ${props => props.width};
    margin-top: .2rem;
    margin-bottom: .2rem;
    
    
`;

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
    
 
   
  
`;



export const ButtonAdd = styled.button`
    margin-left: 50px;
    padding: .5rem;
    width: 15%;
    border-radius: 8px;
    background-color: #27962D;
    color: #fff;
    border: none;
    cursor: pointer;
     
`;

export const TextArea = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    width: 97%;
   
`;


export const FieldTextArea = styled.textarea`
    height: 80%;
    margin-top: 10px;
    resize: none;
`;


export const Infos = styled.div`
    background-color: #E9E9E9;
    width: 250px;
    height: 180px;
    margin-top: 10%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
 
`;

export const ButtonAddContact = styled.button`
    padding: .6rem;
    background-color: #27962D;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

export const SpaceButtonAdd = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;

`;