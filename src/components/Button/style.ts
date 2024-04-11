import styled from 'styled-components';

type ButtonSaveProps = {
    children: React.ReactNode;
    onClick?: () => void;
    backgroundColor: string;
  };

export const StyledButton = styled.button<ButtonSaveProps>`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;
  background-color: ${ props => props.backgroundColor};
`;