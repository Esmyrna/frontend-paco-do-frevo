import styled from "styled-components";

type ButtonSaveProps = {
  children: React.ReactNode;
  onClick?: () => void;
  backgroundColor: string;
};

export const StyledButton = styled.button<ButtonSaveProps>`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;
  background-color: ${(props) => props.backgroundColor};
  font-family: "Sofia Sans Condensed", sans-serif;
  font-size: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;
