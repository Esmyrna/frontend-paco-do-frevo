import styled from "styled-components";

interface FieldProps {
    width?: string;  
  }
  
  export const Field = styled.input<FieldProps>`
    height: 25px;
    width: ${props => (props.width ? props.width : '100%')};  
    border-radius: 8px;
    border: 1px solid #3F3F3F;
    font-family: 'Righteous', sans-serif;
    padding-left: .5rem;
  
  `;

export const Label = styled.label<{fontSize: string}>`
    font-family: 'Righteous', sans-serif;
 
    font-size: ${props => props.fontSize};
`