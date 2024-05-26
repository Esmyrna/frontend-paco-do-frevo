import styled from "styled-components";

interface FieldProps {
  width?: string;
}

export const Field = styled.input<FieldProps>`
  width: 80%;
  height: 8%;
  border: 2px solid #cccccc;
  border-radius: 10px;
  padding: 0.5rem;

  @media (width < 720px) {
    align-items: center;
    padding: 0.5rem;
  }
`;

export const Label = styled.label<{ fontSize: string }>`
  font-family: sans-serif;
  font-size: ${(props) => props.fontSize};

  padding-bottom: 10px;
  margin-top: 15px;
`;
