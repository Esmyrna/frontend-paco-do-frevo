import styled from "styled-components";

export const RadioInput = styled.input`
  /* Define o tamanho do botão de rádio */
  width: 20px;
  height: 20px;

  border: 2px solid #ccc;
  border-radius: 50%; /* Torna o botão de rádio redondo */
  /* Estilo do botão de rádio quando está selecionado */
  &:checked {
    background-color: red;
    border-color: red;
  }
`;
